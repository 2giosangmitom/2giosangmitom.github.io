<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  }
});
</script>

<template>
  <UContainer class="py-8">
    <header class="flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold hover:text-primary transition-colors"> 2giosangmitom </NuxtLink>

      <nav class="flex gap-x-6 items-center">
        <NuxtLink to="/about" class="text-lg hover:text-primary transition-colors">About</NuxtLink>
        <NuxtLink to="/projects" class="text-lg hover:text-primary transition-colors">Projects</NuxtLink>
        <NuxtLink to="/blog" class="text-lg hover:text-primary transition-colors">Blog</NuxtLink>
        <NuxtLink to="/contact" class="text-lg hover:text-primary transition-colors">Contact</NuxtLink>
        <UTooltip text="Search">
          <UButton icon="i-lucide-search" size="md" color="primary" variant="ghost" />
        </UTooltip>
        <ClientOnly v-if="!colorMode?.forced">
          <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" variant="ghost" @click="isDark = !isDark" />

          <template #fallback>
            <div class="size-8" />
          </template>
        </ClientOnly>
      </nav>
    </header>
  </UContainer>
</template>
