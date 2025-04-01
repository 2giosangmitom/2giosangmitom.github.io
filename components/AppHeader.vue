<script setup lang="ts">
const colorMode = useColorMode();

const icon = computed(() => {
  return colorMode.value === "dark"
    ? "material-symbols:moon-stars"
    : "material-symbols:sunny";
});

const handleSwitchColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <header class="header">
    <div class="header__left">
      <NuxtLink to="/">2giosangmitom</NuxtLink>
      <NuxtLink
        to="https://github.com/2giosangmitom"
        target="_blank"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3px;
        "
      >
        <Icon name="mdi:github" size="20px" />
      </NuxtLink>
    </div>

    <div class="header__right">
      <nav class="header__nav">
        <NuxtLink to="/posts">/posts</NuxtLink>
        <NuxtLink to="/tags">/tags</NuxtLink>
        <NuxtLink to="/contact">/contact</NuxtLink>
      </nav>
      <ClientOnly>
        <Icon
          :name="icon"
          class="color-mode-icon"
          size="20px"
          style="cursor: pointer; padding: 3px"
          @click="handleSwitchColorMode"
        />
      </ClientOnly>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
}

.header__right,
.header__nav,
.header__left {
  display: flex;
  gap: 10px;
  align-items: center;
}

.header__nav a,
.header__left > a:first-child {
  position: relative;
  overflow: hidden;
}

.header__left a:last-child {
  transition: all 0.1s ease;
}

.header__left a:last-child:hover,
.color-mode-icon {
  background-color: var(--accent-color);
}

.header__nav a::before,
.header__left > a:first-child::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-color);
  transition: height 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: -5;
}

.header__nav a:hover::before,
.header__left > a:first-child:hover::before {
  height: 100%;
}

a {
  text-decoration: none;
  color: var(--text-0);
}
</style>
