<script setup lang="ts">
import { motion } from 'motion-v';

const route = useRoute();
const path = withoutTrailingSlashes(route.path);

useSeoMeta({
  title: `Articles.tagged(${route.params.slug}) - Vo Quang Chien`,
  description: `Browse all articles tagged with "${route.params.slug}" on Vo Quang Chien's blog.`,
  ogTitle: `Articles.tagged(${route.params.slug}) - Vo Quang Chien`,
  ogDescription: `Browse all articles tagged with "${route.params.slug}" on Vo Quang Chien's blog.`
});

const { data, error } = await useAsyncData(path, () => {
  const articlesPromise = queryCollection('articles')
    .select('title', 'description', 'pubDate', 'path', 'id')
    .where('tags', 'LIKE', `%${route.params.slug}%`)
    .order('pubDate', 'ASC');

  if (import.meta.env.PROD) {
    articlesPromise.where('draft', '<>', true);
  }

  return articlesPromise.all();
});

if (error.value || !data.value?.length) {
  throw createError({
    statusCode: 404,
    statusMessage: 'No articles found for this tag'
  });
}
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
        <h1 class="text-4xl font-bold mb-4">
          Articles tagged <span class="text-primary">::</span> {{ route.params.slug }}
        </h1>
        <p>
          Browse all articles tagged with <span class="text-primary">{{ route.params.slug }}</span> on my blog.
        </p>
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
