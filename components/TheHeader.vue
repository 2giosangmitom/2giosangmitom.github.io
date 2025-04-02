<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <header class="flex flex-col items-center text-xl">
    <div class="flex items-center gap-x-2">
      <NuxtLink
        to="/"
        class="relative before:transition-all before:absolute before:w-full before:h-0.5 before:bg-accent before:bottom-0 before:left-0 hover:before:h-full before:-z-10"
        >2giosangmitom</NuxtLink
      >
      <NuxtLink
        to="https://github.com/2giosangmitom"
        target="_blank"
        class="flex items-center justify-center hover:bg-accent transition-colors"
      >
        <Icon name="mdi:github" />
      </NuxtLink>
    </div>

    <div class="flex gap-x-2">
      <nav class="flex gap-x-2 text-nowrap">
        <NuxtLink
          to="/posts"
          class="relative before:transition-all before:absolute before:w-full before:h-0.5 before:bg-accent before:bottom-0 before:left-0 hover:before:h-full before:-z-10"
          >/posts</NuxtLink
        >
        <NuxtLink
          to="/tags"
          class="relative before:transition-all before:absolute before:w-full before:h-0.5 before:bg-accent before:bottom-0 before:left-0 hover:before:h-full before:-z-10"
          >/tags</NuxtLink
        >
        <NuxtLink
          to="/about"
          class="relative before:transition-all before:absolute before:w-full before:h-0.5 before:bg-accent before:bottom-0 before:left-0 hover:before:h-full before:-z-10"
          >/about</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="relative before:transition-all before:absolute before:w-full before:h-0.5 before:bg-accent before:bottom-0 before:left-0 hover:before:h-full before:-z-10"
          >/contact</NuxtLink
        >
      </nav>
      <ClientOnly v-if="!colorMode?.forced">
        <span
          class="flex items-center justify-center cursor-pointer"
          @click="isDark = !isDark"
        >
          <Icon :name="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" />
        </span>
      </ClientOnly>
    </div>
  </header>
</template>
