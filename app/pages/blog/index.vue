<script setup lang="ts">
useSeoMeta({
  title: 'Blog'
});

const { data: blogs } = await useAsyncData('all-blogs', () => {
  return queryCollection('blog').order('createdOn', 'DESC').all();
});
</script>

<template>
  <main class="container blogs">
    <h1 class="blogs__title">SELECT <span class="text-primary">*</span> FROM blog</h1>
    <div v-if="blogs" class="blogs__list">
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
  &__title {
    text-align: center;
    margin-bottom: 3rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
}
</style>
