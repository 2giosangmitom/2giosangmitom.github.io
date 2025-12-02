<script setup lang="ts">
import type { ArticlesCollectionItem } from '@nuxt/content';

defineProps<{
  articles: Pick<ArticlesCollectionItem, 'path' | 'title' | 'pubDate' | 'description' | 'id' | 'tags'>[];
  orientation?: 'vertical' | 'horizontal';
}>();
</script>

<template>
  <UBlogPosts :orientation="orientation" class="mt-10">
    <Motion
      v-for="(article, index) in articles"
      :key="article.id"
      :initial="{ opacity: 0, transform: 'translateY(10px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ delay: 0.2 * index }"
      :in-view-options="{ once: true }"
    >
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
    </Motion>
  </UBlogPosts>
</template>
