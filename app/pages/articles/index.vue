<script setup lang="ts">
useSeoMeta({
  title: 'Latest Articles - Vo Quang Chien',
  description:
    'Read the latest articles and insights on web development, programming, and technology by Vo Quang Chien.',
  ogTitle: 'Latest Articles - Vo Quang Chien',
  ogDescription:
    'Read the latest articles and insights on web development, programming, and technology by Vo Quang Chien.'
});

const { data } = await useAsyncData('latest-articles', () => {
  const articles = queryCollection('articles')
    .select('path', 'title', 'pubDate', 'description', 'id', 'tags')
    .order('pubDate', 'DESC');

  if (import.meta.env.PROD) {
    articles.where('draft', '<>', true);
  }

  return articles.all();
});
</script>

<template>
  <UContainer>
    <h1 class="text-4xl font-bold mb-4">Latest Articles</h1>
    <p>Some of my recent thoughts on programming and technology.</p>

    <ArticleList v-if="data" :articles="data" orientation="vertical" class="mt-10" />
  </UContainer>
</template>
