<script setup lang="ts">
const { data: posts } = await useAsyncData(() =>
  queryCollection("posts").select("id", "createdOn", "path", "title").all(),
);

useSeoMeta({
  title: "Posts - Vo Quang Chien",
});
</script>

<template>
  <main class="posts">
    <TheTitle text="posts" />
    <ul>
      <li v-for="post in posts" :key="post.id">
        <span>
          {{
            new Intl.DateTimeFormat("en-ca").format(new Date(post.createdOn))
          }}
        </span>
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>
