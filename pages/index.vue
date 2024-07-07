<script setup lang="ts">
const description =
  "Step into the vibrant world of Vo Quang Chien, a passionate web developer. Take a stroll through his diverse portfolio to see his journey and skills in action!";
const title = "Vo Quang Chien - Web Developer";
const ogImage = "/open-graph.png";
const url = "https://2giosangmitom.is-a.dev/";

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogUrl: url,
  ogType: "website",
  ogTitle: title,
  ogImage,
  twitterCard: "summary_large_image",
  twitterDescription: description,
  twitterImage: ogImage,
  twitterTitle: title,
});
</script>

<template>
  <main>Home page</main>
</template>

<style scoped>

</style>
