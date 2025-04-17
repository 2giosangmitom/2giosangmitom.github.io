<script setup lang="ts">
const route = useRoute();
const tag = route.params.tag as string;

const { data: posts } = await useAsyncData("all-posts", () =>
  queryCollection("posts").select("id", "createdOn", "path", "title", "tags").order("createdOn", "DESC").all()
);

const filteredPosts = computed(() => {
  if (!posts.value) return [];
  return posts.value.filter((post) => post.tags.includes(tag));
});

useSeoMeta({
  title: `Entries tagged :: ${tag}`
});
</script>

<template>
  <div class="tag-page">
    <TheTitle class="tag-page__title">
      Entries tagged <span class="tag-page__title-sep">::</span>
      {{ tag }}
    </TheTitle>
    <ul class="tag-page__list">
      <li v-for="post in filteredPosts" :key="post.id" class="tag-page__item">
        <ThePost :date="new Date(post.createdOn)" :title="post.title" :path="post.path" :tags="post.tags" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.tag-page {
  padding: 2rem 0;

  &__title {
    margin-bottom: 1rem;
    color: var(--text-color);

    &-sep {
      color: var(--color-sapphire);
    }
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
