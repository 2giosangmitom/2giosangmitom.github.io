<template>
  <header class="header container">
    <NuxtLink to="/" class="btn--link">2giosangmitom</NuxtLink>

    <div class="navigation">
      <!-- Desktop navigation -->
      <nav class="desktop-navigation">
        <NuxtLink to="/about" class="btn--link">About</NuxtLink>
        <NuxtLink to="/blog" class="btn--link">Blog</NuxtLink>
        <NuxtLink to="/tags" class="btn--link">Tags</NuxtLink>
        <NuxtLink to="/contact" class="btn--link">Contact</NuxtLink>
      </nav>

      <BaseButton icon="lucide:search" variant="soft" />
    </div>
  </header>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.header {
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: variables.$font-lg;
}

.navigation {
  display: flex;
  align-items: center;
  column-gap: 1rem;

  .desktop-navigation {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
}
</style>
