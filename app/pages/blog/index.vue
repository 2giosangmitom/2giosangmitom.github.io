<script setup lang="ts">
useSeoMeta({
  title: 'Blog'
});

const { data: blogs } = await useAsyncData('all-blogs', () => {
  return queryCollection('blog').order('createdOn', 'DESC').all();
});
</script>

<template>
  <main class="container">
    <div v-if="blogs" class="blogs">
      <BlogCard
        v-for="item in blogs"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :created-on="item.createdOn"
        :tags="item.tags"
        :path="item.path"
      />
    </div>
  </main>
</template>

<style lang="scss">
.blogs {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
