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
useHeadSafe({
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});
</script>

<template>
  <main>
    <TheIntro />
    <TheAbout />
    <TheSkills />
    <TheHobbies />
    <TheContact />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  margin: 2rem 3rem;
}

html {
  background-color: #0c0c0c;
  color: #f9e8c9;
  font-family: Roboto, sans-serif;
  scroll-behavior: smooth;
  font-size: 16px;
}

section {
  margin-top: 2rem;
}

.section-title {
  margin-bottom: 1rem;
  color: #ffd0ec;
  letter-spacing: 1px;
}

@media screen and (max-width: 768px) {
  main {
    margin: 2rem 1rem;
  }
}
</style>
