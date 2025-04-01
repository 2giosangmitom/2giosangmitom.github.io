<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(route.path, () =>
  queryCollection("posts").path(route.path).first(),
);

if (data.value) {
  useSeoMeta(data.value.seo);
}
</script>

<template>
  <main v-if="data">
    <h1>{{ data.title }}</h1>
    <p>
      Posted on
      {{ new Intl.DateTimeFormat("en-ca").format(new Date(data.createdOn)) }}
    </p>
    <p>
      Tags:
      <NuxtLink
        v-for="item in data.tags"
        :key="item"
        :to="{ name: 'tags-tag', params: { tag: item } }"
        >{{ item }}</NuxtLink
      >
    </p>
    <ContentRenderer :value="data" />
  </main>
  <main v-else>Page not found</main>
</template>
