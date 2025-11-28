<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

defineProps<{
  links: NavigationMenuItem[];
}>();
</script>

<template>
  <header>
    <UContainer>
      <UNavigationMenu
        :items="links"
        variant="link"
        :ui="{
          link: 'px-0 data-active:font-semibold',
          list: 'gap-x-5'
        }"
      >
        <template #list-trailing>
          <div class="space-x-4">
            <UContentSearchButton />
            <UColorModeButton />
          </div>
        </template>
      </UNavigationMenu>
    </UContainer>
  </header>
</template>
