<template>
  <section>
    <TheIntro />
    <TheAbout />
    <TheSkills />
    <TheContact />
  </section>
</template>

<style lang="scss" scoped>
section {
  margin-bottom: 1rem;
}

@media screen and (min-width: 720px) {
  section {
    max-width: 70rem;
  }
}
</style>
