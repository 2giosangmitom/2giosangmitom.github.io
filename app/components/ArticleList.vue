<script setup lang="ts">
import type { ArticlesCollectionItem } from '@nuxt/content';
import { motion } from 'motion-v';

const descriptionLimit = 120;

defineProps<{
  articles: Pick<ArticlesCollectionItem, 'path' | 'title' | 'pubDate' | 'description' | 'id' | 'tags'>[];
  orientation?: 'vertical' | 'horizontal';
}>();

const truncateDescription = (description?: string | null) => {
  if (!description) {
    return '';
  }

  return description.length > descriptionLimit ? `${description.slice(0, descriptionLimit).trimEnd()}...` : description;
};
</script>

<template>
  <UBlogPosts :orientation="orientation" class="mt-10">
    <motion.div
      v-for="(article, index) in articles"
      :key="article.id"
      :initial="{ opacity: 0, y: 24, scale: 0.98 }"
      :while-in-view="{ opacity: 1, y: 0, scale: 1 }"
      :viewport="{ once: true, amount: 0.3 }"
      :transition="{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }"
    >
      <UBlogPost
        :key="article.id"
        :title="article.title"
        :description="truncateDescription(article.description)"
        :date="article.pubDate"
        :to="article.path"
        variant="outline"
        orientation="vertical"
      >
        <template v-if="article.tags" #footer>
          <UBadge v-for="tag in article.tags" :key="tag" variant="soft" size="md">{{ tag }}</UBadge>
        </template>
      </UBlogPost>
    </motion.div>
  </UBlogPosts>
</template>
