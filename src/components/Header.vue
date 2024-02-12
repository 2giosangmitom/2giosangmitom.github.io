<script setup lang="ts">
import { RouterLink } from "vue-router";
const views: { name: string; path: string }[] = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="header__link">
      <span class="header__logo">2giosangmitom</span>
    </RouterLink>

    <div class="header__nav">
      <RouterLink
        :to="path"
        class="header__link"
        v-for="{ name, path } in views"
        style="margin: 0 20px"
      >
        <span>{{ name }}</span>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.header__nav {
  font-size: 1.15rem;
}

.header__link {
  text-decoration: none;
  color: var(--neutral-white);
}

.header__logo {
  font-size: 1.25rem;
  user-select: none;
}

.header__logo:hover {
  opacity: 0.9;
  color: var(--neutral-green);
  cursor: pointer;
  transition-duration: 300ms;
}
</style>
