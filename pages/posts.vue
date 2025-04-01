<script setup lang="ts">
const { data: posts } = await useAsyncData(() =>
  queryCollection("posts").select("id", "createdOn", "path", "title").all(),
);

const route = useRoute();
const isHome = computed(() => route.path === "/posts");

useSeoMeta({
  title: "Posts - Vo Quang Chien",
});
</script>

<template>
  <section v-if="isHome">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <span>{{
          new Intl.DateTimeFormat("en-ca").format(new Date(post.createdOn))
        }}</span>
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
  <NuxtPage v-else />
</template>
