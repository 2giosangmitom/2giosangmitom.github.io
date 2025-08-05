<script setup lang="ts">
useSeoMeta({
  title: 'Blog'
});

const { data: blogs } = await useAsyncData('all-blogs', () => {
  return queryCollection('blog').all();
});
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-4">
      <h1 class="text-5xl text-primary font-bold text-center">SELECT * FROM blog</h1>
      <p class="text-dimmed text-center">Sharing tips, experiences, and tutorials.</p>
    </div>

    <div class="space-y-4">
      <OrganismsBlogCard
        v-for="blog in blogs"
        :key="blog.path"
        :title="blog.title"
        :description="blog.description"
        :tags="blog.tags"
        :created-at="blog.createdAt"
        :path="blog.path"
        variant="wide"
      />
    </div>
  </div>
</template>
