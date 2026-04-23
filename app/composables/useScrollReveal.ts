/**
 * useScrollReveal — Modern scroll-driven reveal/hide animation system
 *
 * Supports multiple animation variants via CSS classes:
 *   .reveal        — fade up (default)
 *   .reveal-left   — slide from left
 *   .reveal-right  — slide from right
 *   .reveal-scale  — scale up from 0.85
 *   .reveal-blur   — blur + scale reveal
 *
 * Auto-stagger: Add `.reveal-stagger` on a parent to automatically
 * stagger children's animation delays by 80ms each.
 *
 * Calling conventions (both supported):
 *   useScrollReveal()                    — default threshold 0.1
 *   useScrollReveal(0.15)                — custom threshold
 *   useScrollReveal('.reveal', 0.15)     — legacy 2-arg form (selector ignored, threshold used)
 *
 * All variants respect `prefers-reduced-motion`.
 * Observer cleans up on component unmount.
 */
export function useScrollReveal(
  selectorOrThreshold: string | number = 0.1,
  legacyThreshold?: number,
) {
  let observer: IntersectionObserver | null = null
  const defaultSelector = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur'
  const revealSelector = typeof selectorOrThreshold === 'string'
    ? selectorOrThreshold
    : defaultSelector

  // Resolve threshold — handle both call signatures gracefully
  const resolvedThreshold: number = (() => {
    if (legacyThreshold !== undefined && Number.isFinite(legacyThreshold)) {
      return legacyThreshold
    }
    if (typeof selectorOrThreshold === 'number' && Number.isFinite(selectorOrThreshold)) {
      return selectorOrThreshold
    }
    return 0.1
  })()

  onMounted(() => {
    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      document.querySelectorAll(revealSelector).forEach((el) => {
        el.classList.add('is-visible')
      })
      return
    }

    // Auto-stagger: assign --reveal-index to children of .reveal-stagger
    document.querySelectorAll('.reveal-stagger').forEach((parent) => {
      const children = parent.querySelectorAll(revealSelector)
      children.forEach((child, i) => {
        ;(child as HTMLElement).style.setProperty('--reveal-index', String(i))
      })
    })

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      {
        threshold: resolvedThreshold,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    document.querySelectorAll(revealSelector).forEach((el) => {
      observer!.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })
}
