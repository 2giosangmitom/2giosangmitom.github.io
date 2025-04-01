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
        style="display: flex; align-items: center; justify-content: center"
      >
        <Icon name="mdi:github" size="20px" />
      </NuxtLink>
    </div>

    <div class="header__right">
      <nav class="header__nav">
        <NuxtLink to="/posts">posts</NuxtLink>
        <NuxtLink to="/tags">tags</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
      </nav>
      <ClientOnly>
        <Icon
          :name="icon"
          class="color-mode-icon"
          size="20px"
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
}

.header__right,
.header__nav,
.header__left {
  display: flex;
  gap: 10px;
  align-items: center;
}

.color-mode-icon {
  cursor: pointer;
}
</style>
