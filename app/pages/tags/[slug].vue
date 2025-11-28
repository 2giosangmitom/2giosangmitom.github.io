<script setup lang="ts">
const route = useRoute();

useSeoMeta({
  title: `Articles.tagged(${route.params.slug}) - Vo Quang Chien`,
  description: `Browse all articles tagged with "${route.params.slug}" on Vo Quang Chien's blog.`,
  ogTitle: `Articles.tagged(${route.params.slug}) - Vo Quang Chien`,
  ogDescription: `Browse all articles tagged with "${route.params.slug}" on Vo Quang Chien's blog.`
});

const { data } = await useAsyncData(route.path, () => {
  const articlesPromise = queryCollection('articles')
    .select('title', 'description', 'pubDate', 'path', 'id')
    .where('tags', 'LIKE', `%${route.params.slug}%`)
    .order('pubDate', 'ASC');

  if (import.meta.env.PROD) {
    articlesPromise.where('draft', '<>', true);
  }

  return articlesPromise.all();
});
</script>

<template>
  <UContainer>
    <h1 class="text-4xl font-bold mb-4">
      Articles tagged <span class="text-primary">::</span> {{ route.params.slug }}
    </h1>
    <p>
      Browse all articles tagged with <span class="text-primary">{{ route.params.slug }}</span> on my blog.
    </p>

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
      />
    </UBlogPosts>
  </UContainer>
</template>
