<script setup lang="ts">
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
  <UContainer>
    <h1 class="text-4xl font-bold mb-4">Tags</h1>
    <p>Browse all tags on my blog.</p>

    <div v-if="data" class="flex flex-col mt-10 gap-y-4">
      <Motion
        v-for="(tag, index) in data"
        :key="tag"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UButton icon="mdi:tag" variant="ghost" :to="{ name: 'tags-slug', params: { slug: tag } }" class="w-fit">{{
          tag
        }}</UButton>
      </Motion>
    </div>
  </UContainer>
</template>
