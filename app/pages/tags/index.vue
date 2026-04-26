<script setup lang="ts">
import { motion } from 'motion-v';

useSeoMeta({
  title: 'Tags - Vo Quang Chien',
  description: "Browse all tags on Vo Quang Chien's blog.",
  ogTitle: 'Tags - Vo Quang Chien',
  ogDescription: "Browse all tags on Vo Quang Chien's blog."
});

const { data } = await useAsyncData('tags', async () => {
  const articlesPromise = queryCollection('articles').select('tags').order('tags', 'ASC');

  if (import.meta.env.PROD) {
    articlesPromise.where('draft', '<>', true);
  }

  const articles = await articlesPromise.all();
  const tagSet = new Set<string>();

  for (const article of articles) {
    if (article.tags) {
      for (const tag of article.tags) {
        tagSet.add(tag);
      }
    }
  }

  return Array.from(tagSet);
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
        :in-view-options="{ once: true, amount: 0.6 }"
        :transition="{ duration: 0.45, ease: 'easeOut' }"
      >
        <h1 class="text-4xl font-bold mb-4">Tags</h1>
        <p>Browse all tags on my blog.</p>
      </motion.section>

      <div v-if="data" class="flex flex-col mt-10 gap-y-4">
        <motion.div
          v-for="(tag, index) in data"
          :key="tag"
          :initial="{ opacity: 0, x: -12 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true, amount: 0.4 }"
          :transition="{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }"
        >
          <UButton icon="mdi:tag" variant="ghost" :to="{ name: 'tags-slug', params: { slug: tag } }" class="w-fit">
            {{ tag }}
          </UButton>
        </motion.div>
      </div>
    </UContainer>
  </motion.main>
</template>
