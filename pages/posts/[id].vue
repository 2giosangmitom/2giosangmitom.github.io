<script setup lang="ts">
const route = useRoute();
const postId = route.params.id as string;
const { data: post } = await useAsyncData(postId, () =>
  queryCollection("posts").path(route.path).first(),
);

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}

useSeoMeta(post.value.seo);
</script>

<template>
  <div v-if="post">
    <TheTitle>{{ post.title }}</TheTitle>
    <PostMeta :created-on="new Date(post.createdOn)" :tags="post.tags" />
    <ContentRenderer :value="post" />
    <p class="text-gray-500 mt-5 text-right">
      Last update:
      {{
        dateFormat(new Date(post.updatedOn), "en-CA", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
      }}
    </p>
  </div>
</template>
