<script setup lang="ts">
const { data: intro } = await useLazyAsyncData("intro", () => queryCollection("intro").first());
</script>

<template>
  <main class="main">
    <ContentRenderer v-if="intro" :value="intro" :prose="true" class="content" />
  </main>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
