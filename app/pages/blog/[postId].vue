<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(route.params.postId as string, () => {
  return queryCollection('blog').path(route.path).first();
});

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  });
}

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description
});
</script>

<template>
  <div v-if="post">
    <ContentRenderer :value="post" class="leading-7" />
  </div>
</template>
