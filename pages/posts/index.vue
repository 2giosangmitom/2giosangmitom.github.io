<script setup lang="ts">
const { data: posts } = await useLazyAsyncData("all-posts", () =>
  queryCollection("posts").select("id", "createdOn", "path", "title", "tags").order("createdOn", "DESC").all()
);
</script>

<template>
  <div class="posts">
    <TheTitle>Posts</TheTitle>
    <ul class="posts__list">
      <li v-for="post in posts" :key="post.id">
        <ThePost :date="new Date(post.createdOn)" :title="post.title" :path="post.path" :tags="post.tags" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.posts__list {
  margin-top: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
