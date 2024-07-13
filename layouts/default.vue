<script setup lang="ts">
const meta = {
  title: "Vo Quang Chien - Web Developer",
  description:
    "Step into the vibrant world of Vo Quang Chien, a passionate web developer. Take a stroll through his diverse portfolio to see his journey and skills in action!",
  ogImage: "/open-graph.png",
  url: "https://2giosangmitom.is-a.dev/",
};

const { title, description, ogImage, url } = meta;

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

import "iconify-icon";
</script>

<template>
  <div class="container">
    <AppHeader />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 10px;
}

@media screen and (min-width: 720px) {
  .container {
    margin: 0 20px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    margin: 0 50px;
  }
}
</style>
