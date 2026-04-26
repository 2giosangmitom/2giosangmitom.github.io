<script setup lang="ts">
import { motion } from 'motion-v';

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
  <motion.main
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.45, ease: 'easeOut' }"
  >
    <UContainer>
      <motion.section
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, amount: 0.6 }"
        :transition="{ duration: 0.45, ease: 'easeOut' }"
      >
        <h1 class="text-4xl font-bold mb-4">Technical Articles</h1>
        <p>Insights and best practices on web development, software engineering, and emerging technologies.</p>
      </motion.section>

      <motion.section
        :initial="{ opacity: 0, y: 24 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 0.5, ease: 'easeOut', delay: 0.06 }"
      >
        <ArticleList v-if="data" :articles="data" orientation="vertical" class="mt-10" />
      </motion.section>
    </UContainer>
  </motion.main>
</template>
