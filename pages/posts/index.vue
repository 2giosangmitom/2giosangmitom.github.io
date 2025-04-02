<script setup lang="ts">
useSeoMeta({
  title: "Posts - Vo Quang Chien",
});

const { data: posts } = await useAsyncData("all-posts", () =>
  queryCollection("posts").select("id", "createdOn", "path", "title", "tags").all()
);
</script>

<template>
  <div>
    <TheTitle text="posts" class="mb-2" />
    <ul>
      <li v-for="post in posts" :key="post.id">
        <ThePost
          :date="new Date(post.createdOn)"
          :title="post.title"
          :path="post.path"
        />
      </li>
    </ul>
  </div>
</template>
