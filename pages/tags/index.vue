<script setup lang="ts">
useSeoMeta({
  title: "Tags",
});

const { data: posts } = await useAsyncData("all-posts", () =>
  queryCollection("posts")
    .select("id", "createdOn", "path", "title", "tags")
    .order("createdOn", "DESC")
    .all()
);

const tags = computed(() => {
  if (!posts.value) {
    return null;
  }

  const result = new Map<string, number>();

  for (const post of posts.value) {
    for (const tag of post.tags) {
      const currentValue = result.get(tag);
      if (!currentValue) {
        result.set(tag, 1);
      } else {
        result.set(tag, currentValue + 1);
      }
    }
  }

  return result;
});
</script>

<template>
  <div>
    <TheTitle text="tags" class="mb-2" />
    <ul>
      <li v-for="tag of tags?.keys()" :key="tag">
        <NuxtLink
          :to="{ name: 'tags-tag', params: { tag } }"
          class="inline-flex items-center relative before:transition-all before:absolute before:w-full before:h-0.5 before:bg-accent before:bottom-0 before:left-0 hover:before:h-full before:-z-10"
        >
          <Icon name="mdi:tag-text" class="mr-0.5" />
          {{ tag }}
          ({{ tags?.get(tag) }} posts)
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
