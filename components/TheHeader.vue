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

const underlineAnimation =
  "relative before:transition-all before:absolute before:w-full before:h-0.5 before:bg-accent before:bottom-0 before:left-0 hover:before:h-full before:-z-10";
</script>

<template>
  <header
    class="flex flex-col items-center text-xl sm:flex-row sm:justify-between"
  >
    <div class="flex items-center gap-x-2">
      <NuxtLink to="/" :class="underlineAnimation">2giosangmitom</NuxtLink>
      <NuxtLink
        to="https://github.com/2giosangmitom"
        target="_blank"
        class="flex items-center justify-center hover:bg-accent transition-colors"
      >
        <Icon name="mdi:github" />
      </NuxtLink>
      <NuxtLink
        to="https://www.youtube.com/@2giosangmitom"
        target="_blank"
        class="flex items-center justify-center hover:bg-accent transition-colors"
      >
        <Icon name="mdi:youtube" />
      </NuxtLink>
    </div>

    <div class="flex gap-x-2">
      <nav class="flex gap-x-2 text-nowrap">
        <NuxtLink to="/posts" :class="underlineAnimation">/posts</NuxtLink>
        <NuxtLink to="/tags" :class="underlineAnimation">/tags</NuxtLink>
        <NuxtLink to="/about" :class="underlineAnimation">/about</NuxtLink>
        <NuxtLink to="/contact" :class="underlineAnimation">/contact</NuxtLink>
      </nav>
      <ClientOnly>
        <span
          class="flex items-center justify-center cursor-pointer min-w-6"
          @click="isDark = !isDark"
        >
          <Icon :name="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" size="20px" />
        </span>
      </ClientOnly>
    </div>
  </header>
</template>
