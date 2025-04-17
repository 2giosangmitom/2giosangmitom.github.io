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
    <p class="post__last-update">
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

<style scoped>
.post__last-update {
  text-align: right;
  margin-top: 1rem;
  color: rgb(var(--color-pink));
}
</style>
