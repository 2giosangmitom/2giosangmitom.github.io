<script setup lang="ts">
useSeoMeta({
  title: "Vo Quang Chien | Web developer",
  description:
    "Discover the dynamic world of Vo Quang Chien, where he excels as a web developer, creates innovative Neovim plugins, and embraces the discipline of calisthenics. Explore his diverse portfolio to witness his achievements and expertise.",
});
</script>

<template>
  <div>
    <AppHero />
  </div>
</template>

<style lang="scss">
body {
  background-color: $background-light;
  transition: background-color 0.5s ease;
  &.dark {
    background-color: $background-dark;
  }
}
</style>
