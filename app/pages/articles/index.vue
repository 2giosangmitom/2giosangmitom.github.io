<script setup lang="ts">
useSeoMeta({
  title: 'Articles - Vo Quang Chien',
  description:
    'Technical articles and insights on web development, software engineering best practices, and modern technology trends.',
  ogTitle: 'Articles - Vo Quang Chien',
  ogDescription:
    'Technical articles and insights on web development, software engineering best practices, and modern technology trends.'
});

const { data } = await useAsyncData('all-articles', () => {
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
    <h1 class="text-4xl font-bold mb-4">Technical Articles</h1>
    <p>Insights and best practices on web development, software engineering, and emerging technologies.</p>

    <ArticleList v-if="data" :articles="data" orientation="vertical" class="mt-10" />
  </UContainer>
</template>
