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
      <UButton
        size="xl"
        to="https://github.com/2giosangmitom"
        color="neutral"
        variant="link"
        target="_blank"
        icon="mdi:github"
      />
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
        <UButton
          size="xl"
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          color="neutral"
          variant="ghost"
          @click="isDark = !isDark"
        />
      </ClientOnly>
    </div>
  </header>
</template>
