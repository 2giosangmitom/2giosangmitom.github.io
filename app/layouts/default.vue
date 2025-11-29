<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const navLinks = [
  { label: 'About', to: '/about', icon: 'lucide:book-open' },
  { label: 'Articles', to: '/articles', icon: 'lucide:pen-tool' },
  { label: 'Tags', to: '/tags', icon: 'lucide:tags' },
  { label: 'Contact', to: '/contact', icon: 'lucide:mail' }
] as const satisfies NavigationMenuItem[];
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader :links="navLinks" />
    <div class="flex-1 my-24">
      <slot />
    </div>
    <USeparator icon="lucide:code-xml" type="dotted" />
    <AppFooter />
  </div>
</template>
