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
  const articles = queryCollection('articles').order('pubDate', 'DESC');

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

    <UBlogPosts orientation="vertical" class="mt-24">
      <UBlogPost
        v-for="article in data"
        :key="article.id"
        :title="article.title"
        :description="article.description"
        :date="article.pubDate"
        :to="article.path"
        variant="outline"
        orientation="vertical"
      >
        <template v-if="article.tags" #footer>
          <div class="space-x-4 float-right mr-4 mb-4">
            <UBadge v-for="tag in article.tags" :key="tag" variant="soft">{{ tag }}</UBadge>
          </div>
        </template>
      </UBlogPost>
    </UBlogPosts>
  </UContainer>
</template>
