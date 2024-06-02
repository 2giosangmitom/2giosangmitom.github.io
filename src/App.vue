<script setup lang="ts">
import TheIntro from "./components/TheIntro.vue";
import TheAbout from "./components/TheAbout.vue";
import TheSkills from "./components/TheSkills.vue";
import TheHobbies from "./components/TheHobbies.vue";
import TheContact from "./components/TheContact.vue";
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

<style scoped>
main {
  margin: 2rem 3rem;
}

@media screen and (max-width: 768px) {
  main {
    margin: 2rem 1rem;
  }
}
</style>
