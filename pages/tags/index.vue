<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("posts").all()
);

const tags = computed(() => {
  if (!posts.value) {
    return [];
  }

  let result: string[] = [];
  posts.value.forEach((post) => {
    result = result.concat(...post.tags);
  });

  return result;
});
</script>

<template>
  <section>
    <h1>Tags</h1>

    <ul>
      <li v-for="item in tags" :key="item">
        <NuxtLink :to="`/tags/${item}`">{{ item }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
