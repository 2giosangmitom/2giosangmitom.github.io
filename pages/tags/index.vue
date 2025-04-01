<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("posts").select("tags").all()
);

// Get all unique tags from all blog posts
const tags = computed(() => {
  if (!posts.value) {
    return [];
  }

  let result = new Set<string>();

  posts.value.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!result.has(tag)) {
        result.add(tag);
      }
    });
  });

  return result;
});
</script>

<template>
  <section>
    <h1>Tags</h1>
    <ul>
      <li v-for="item in tags" :key="item">
        <NuxtLink :to="{ name: 'tags-tag', params: { tag: item } }">
          {{ item }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
