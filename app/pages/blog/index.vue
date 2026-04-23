<template>
  <BlogListPage />
</template>

<script setup lang="ts">
const route = useRoute()
const requestedPage = Number(route.query.page ?? 1)

if (Number.isFinite(requestedPage) && requestedPage > 1) {
  await navigateTo(`/blog/page/${Math.floor(requestedPage)}`, {
    redirectCode: 301,
    replace: true,
  })
}
</script>
