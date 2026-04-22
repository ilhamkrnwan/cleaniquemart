<template>
  <div class="layout-wrapper">
    <AppNavbar />
    <main id="main-content" class="layout-main">
      <slot />
    </main>
    <AppFooter />
    <AppFloatingActions />
  </div>
</template>

<style scoped>
.layout-wrapper {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.layout-main {
  flex: 1;
  padding-top: 72px; /* navbar height */
}
</style>
