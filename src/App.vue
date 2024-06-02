<script setup lang="ts">
import TheAbout from './components/TheAbout.vue'
import TheIntro from './components/TheIntro.vue'
import TheHobbies from './components/TheHobbies.vue'
import TheSkills from './components/TheSkills.vue'
import TheContact from './components/TheContact.vue'
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
  margin: 2rem 5rem;
  width: 90%;
  max-width: 800px;
}

@media (max-width: 600px) {
  main {
    width: 100%;
  }
}
</style>
