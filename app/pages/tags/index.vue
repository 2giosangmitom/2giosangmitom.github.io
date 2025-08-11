<script setup lang="ts">
useSeoMeta({
  title: 'Tags'
});

const { data: blogs, error } = await useAsyncData('all-tags', () =>
  queryCollection('blog').select('tags').order('tags', 'ASC').all()
);

const tags = computed(() => {
  if (!blogs.value) {
    return [];
  }

  const uniqueTags = new Set<string>();
  for (const blog of blogs.value) {
    if (blog.tags && blog.tags.length > 0) {
      for (const tag of blog.tags) {
        uniqueTags.add(tag);
      }
    }
  }

  return Array.from(uniqueTags).sort((a, b) => a.localeCompare(b));
});
</script>

<template>
  <main class="container tags">
    <h1 class="tags__title">SELECT DISTINCT <span class="text-primary">tags</span> FROM blog</h1>

    <div v-if="error" class="tags__error">
      <p>Failed to load tags. Please try again later.</p>
    </div>

    <div v-else-if="tags.length" class="tags__list">
      <div v-for="tag in tags" :key="tag" class="btn--link">
        <Icon name="lucide:tag" />
        <NuxtLink :to="{ name: 'tags-id', params: { id: tag } }">{{ tag }}</NuxtLink>
      </div>
    </div>

    <div v-else class="tags__empty">
      <p>No tags found.</p>
    </div>
  </main>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.tags {
  &__title {
    text-align: center;
    margin-bottom: 3rem;
  }

  &__error,
  &__empty {
    text-align: center;
    margin-top: 2rem;
    color: variables.$color-dimmed;
    font-size: variables.$font-sm;
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
