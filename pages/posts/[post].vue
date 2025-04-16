<script setup lang="ts">
const route = useRoute();
const postId = route.params.post as string;
const { data: post } = await useAsyncData(postId, () =>
  queryCollection("posts").path(route.path).first()
);

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
});
</script>

<template>
  <div v-if="post">
    <ContentRenderer :value="post" />
  </div>
</template>
