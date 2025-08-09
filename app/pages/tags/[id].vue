<script setup lang="ts">
const route = useRoute();
const id = route.params.id as string;

useSeoMeta({
  title: `Entries tagged :: ${id}`
});

const { data: blogs } = await useAsyncData(`tags-${id}`, () => {
  return queryCollection('blog').where('tags', 'LIKE', `%${id}%`).order('createdOn', 'DESC').all();
});
</script>

<template>
  <main class="container tags-details">
    <h1 class="tags-details__title">Entries tagged <span class="separator">::</span> {{ id }}</h1>

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
@use '~/assets/scss/variables';

.tags-details {
  &__title {
    text-align: center;
    margin-bottom: 4rem;

    .separator {
      color: variables.$color-primary;
    }
  }
}
</style>
