<script setup lang="ts">
import type { ArticlesCollectionItem } from '@nuxt/content';

defineProps<{
  articles: Pick<ArticlesCollectionItem, 'path' | 'title' | 'pubDate' | 'description' | 'id' | 'tags'>[];
  orientation?: 'vertical' | 'horizontal';
}>();
</script>

<template>
  <UBlogPosts :orientation="orientation" class="mt-10">
    <div v-for="article in articles" :key="article.id">
      <UBlogPost
        :key="article.id"
        :title="article.title"
        :description="article.description"
        :date="article.pubDate"
        :to="article.path"
        variant="outline"
        orientation="vertical"
      >
        <template v-if="article.tags" #footer>
          <UBadge v-for="tag in article.tags" :key="tag" variant="soft" size="md">{{ tag }}</UBadge>
        </template>
      </UBlogPost>
    </div>
  </UBlogPosts>
</template>
