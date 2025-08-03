<template>
  <UContainer class="py-8">
    <header class="flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold hover:text-primary-400 transition-colors">
        2giosangmitom
      </NuxtLink>

      <nav class="flex gap-x-6">
        <NuxtLink to="/about" class="text-lg hover:text-primary-400 transition-colors">
          About
        </NuxtLink>
        <NuxtLink to="/projects" class="text-lg hover:text-primary-400 transition-colors">
          Projects
        </NuxtLink>
        <NuxtLink to="/blog" class="text-lg hover:text-primary-400 transition-colors">
          Blog
        </NuxtLink>
        <NuxtLink to="/contact" class="text-lg hover:text-primary-400 transition-colors">
          Contact
        </NuxtLink>
        <UTooltip text="Search">
          <UButton icon="i-lucide-search" size="md" color="primary" variant="solid" />
        </UTooltip>
      </nav>
    </header>
  </UContainer>
</template>
