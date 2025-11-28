<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

defineProps<{
  links: NavigationMenuItem[];
}>();
</script>

<template>
  <UHeader mode="slideover" title="2giosangmitom">
    <UNavigationMenu :items="links" />

    <template #right>
      <UContentSearchButton />
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="links" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
