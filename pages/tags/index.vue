<script setup lang="ts">
useSeoMeta({
  title: "Tags"
});

const { data: posts } = await useLazyAsyncData("all-posts", () =>
  queryCollection("posts").select("id", "createdOn", "path", "title", "tags").order("createdOn", "DESC").all()
);

const tags = computed(() => {
  if (!posts.value) return null;

  const result = new Map<string, number>();
  for (const post of posts.value) {
    for (const tag of post.tags) {
      result.set(tag, (result.get(tag) ?? 0) + 1);
    }
  }
  return result;
});
</script>

<template>
  <div class="tags-page">
    <TheTitle class="tags-title">Tags</TheTitle>
    <ul class="tags-list">
      <li v-for="tag of tags?.keys()" :key="tag" class="tags-list__item">
        <NuxtLink :to="{ name: 'tags-tag', params: { tag } }" class="tag-link">
          <Icon name="mdi:tag-text" class="tag-link__icon" />
          {{ tag }}
          <span class="tag-link__count">({{ tags?.get(tag) }} posts)</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.tags-page {
  padding: 1.5rem 0;
}

.tags-title {
  margin-bottom: 0.5rem;
}

.tags-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;

  &__item {
    line-height: 1.6;
  }
}

.tag-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.1rem;
  font-size: $text-md;
  font-family: $font-sans;
  color: var(--text-color);
  text-decoration: none;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: color 0.3s;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(var(--color-pink), 0.15);
    transform: scaleY(0.05);
    opacity: 0;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
    z-index: -1;
    border-radius: inherit;
  }

  &:hover::before {
    transform: scaleY(1);
    opacity: 1;
  }

  &:hover {
    color: rgb(var(--color-pink));
  }

  &__icon {
    font-size: 1rem;
  }

  &__count {
    font-size: $text-sm;
    opacity: 0.75;
    margin-left: 0.25rem;
  }
}
</style>
