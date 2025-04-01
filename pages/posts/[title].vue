<script setup lang="ts">
const route = useRoute();
const { data: post } = await useAsyncData(() =>
  queryCollection("posts").path(route.path).first()
);
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>
      Posted on
      {{ new Intl.DateTimeFormat("en-ca").format(new Date(post.createdOn)) }}
    </p>
    <p>
      Tags:
      <NuxtLink
        v-for="item in post.tags"
        :key="post.id"
        :to="`/tags/${item}`"
        >{{ item }}</NuxtLink
      >
    </p>
    <ContentRenderer :value="post" />
  </div>
  <div v-else>Page not found</div>
</template>
