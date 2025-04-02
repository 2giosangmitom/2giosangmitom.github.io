<script setup lang="ts">
const { data: posts } = await useAsyncData("all-tags", () =>
  queryCollection("posts").select("tags").all()
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
        <UButton
          :to="{ name: 'tags-tag', params: { tag } }"
          icon="mdi:tag-text"
          variant="link"
          color="neutral"
          size="xl"
        >
          {{ tag }} ({{ tags?.get(tag) }} posts)
        </UButton>
      </li>
    </ul>
  </div>
</template>
