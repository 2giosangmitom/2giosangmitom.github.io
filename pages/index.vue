<script setup lang="ts">
useSeoMeta({
  title: "Vo Quang Chien | Web developer",
  description:
    "Explore the dynamic world of Vo Quang Chien, an accomplished web developer. Delve into his diverse portfolio to witness his remarkable achievements and expertise.",
});
</script>

<template>
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $background-light;
  transition: background-color 0.5s ease;
  background-image: url("~/assets/images/overlay.svg");
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 40%;
  margin: 0 5rem;
}

section {
  margin-top: 1rem;
}
</style>
