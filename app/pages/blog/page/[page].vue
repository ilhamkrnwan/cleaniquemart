<template>
  <BlogListPage :page-number="pageNumber" />
</template>

<script setup lang="ts">
const route = useRoute()
const rawPage = Number(route.params.page)

if (!Number.isFinite(rawPage) || rawPage < 1) {
  throw createError({ statusCode: 404, statusMessage: 'Halaman blog tidak ditemukan' })
}

const pageNumber = Math.floor(rawPage)

if (pageNumber === 1) {
  await navigateTo('/blog', {
    redirectCode: 301,
    replace: true,
  })
}
</script>
