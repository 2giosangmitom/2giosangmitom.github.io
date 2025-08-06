<script setup lang="ts">
const colorMode = useColorMode();

// Mobile navigation toggle
const open = ref(false);

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
  <UContainer class="py-4 md:py-8">
    <header class="flex items-center justify-between">
      <NuxtLink to="/" class="text-lg md:text-xl font-bold hover:text-primary transition-colors"
        >2giosangmitom</NuxtLink
      >

      <div class="flex gap-x-4 items-center">
        <!-- Desktop navigation -->
        <nav class="hidden md:flex gap-x-6 items-center">
          <NuxtLink to="/about" class="text-base sm:text-lg hover:text-primary transition-colors">About</NuxtLink>
          <NuxtLink to="/projects" class="text-base sm:text-lg hover:text-primary transition-colors">Projects</NuxtLink>
          <NuxtLink to="/blog" class="text-base sm:text-lg hover:text-primary transition-colors">Blog</NuxtLink>
          <NuxtLink to="/contact" class="text-base sm:text-lg hover:text-primary transition-colors">Contact</NuxtLink>
        </nav>

        <!-- Action buttons -->
        <div class="flex items-center gap-x-2">
          <UTooltip text="Search">
            <UButton icon="i-lucide-search" size="md" color="primary" variant="ghost" />
          </UTooltip>
          <ClientOnly v-if="!colorMode?.forced">
            <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" variant="ghost" @click="isDark = !isDark" />

            <template #fallback>
              <div class="size-8" />
            </template>
          </ClientOnly>
        </div>

        <!-- Mobile navigation -->
        <div class="md:hidden">
          <USlideover
            v-model:open="open"
            title="Navigation"
            description="Navigate through the site"
            :close="{
              variant: 'soft',
              color: 'primary',
              size: 'lg'
            }"
          >
            <UButton icon="i-lucide-menu" size="lg" color="primary" variant="soft" />

            <template #body>
              <nav class="flex flex-col gap-y-6">
                <NuxtLink
                  class="text-xl flex items-center gap-x-4 hover:bg-primary-200/10 w-full p-4"
                  to="/about"
                  @click="open = !open"
                  ><UIcon name="material-symbols:person" />About</NuxtLink
                >
                <NuxtLink
                  class="text-xl flex items-center gap-x-4 hover:bg-primary-200/10 w-full p-4"
                  to="/projects"
                  @click="open = !open"
                  ><UIcon name="lucide:code-xml" />Projects</NuxtLink
                >
                <NuxtLink
                  class="text-xl flex items-center gap-x-4 hover:bg-primary-200/10 w-full p-4"
                  to="/blog"
                  @click="open = !open"
                  ><UIcon name="icomoon-free:blog" />Blog</NuxtLink
                >
                <NuxtLink
                  class="text-xl flex items-center gap-x-4 hover:bg-primary-200/10 w-full p-4"
                  to="/contact"
                  @click="open = !open"
                  ><UIcon name="mdi:email" />Contact</NuxtLink
                >
              </nav>
            </template>
          </USlideover>
        </div>
      </div>
    </header>
  </UContainer>
</template>
