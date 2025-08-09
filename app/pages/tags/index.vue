<script setup lang="ts">
useSeoMeta({
  title: 'Tags'
});

const { data: blogs } = await useAsyncData('all-tags', () => {
  return queryCollection('blog').select('tags').order('tags', 'ASC').all();
});

const tags = computed(() => {
  if (!blogs.value) {
    return [];
  }

  const res = new Set<string>();

  for (const blog of blogs.value) {
    for (const tag of blog.tags) {
      res.add(tag);
    }
  }

  return Array.from(res);
});
</script>

<template>
  <main class="container tags">
    <h1 class="tags__title">SELECT DISTINCT tags FROM blog</h1>
    <div v-if="tags" class="tags__list">
      <div v-for="tag in tags" :key="tag" class="btn--link">
        <Icon name="lucide:tag" />
        <NuxtLink :to="{ name: 'tags-id', params: { id: tag } }">{{ tag }}</NuxtLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.tags {
  &__title {
    text-align: center;
    margin-bottom: 1rem;
  }

  .btn--link {
    width: fit-content;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    a {
      color: inherit;
      text-decoration: none;
    }

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
}
</style>
