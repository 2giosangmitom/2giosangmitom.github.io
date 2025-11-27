<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const navLinks: NavigationMenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
  { label: 'Tags', to: '/tags' },
  { label: 'Uses', to: '/uses' },
  { label: 'Contact', to: '/contact' }
] as const;
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader :links="navLinks" />
    <div class="flex-1 my-24">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
