<script setup lang="ts">
import { OverlayScrollbars } from 'overlayscrollbars';

useHead({
  htmlAttrs: {
    lang: 'en',
    'data-overlayscrollbars-initialize': ''
  },
  bodyAttrs: {
    'data-overlayscrollbars-initialize': ''
  }
});

const searchTerm = shallowRef('');

onMounted(() => {
  OverlayScrollbars(document.body, {
    scrollbars: {
      autoHide: 'leave'
    }
  });
});
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator color="var(--ui-primary)" />
    <ClientOnly>
      <LazyUContentSearch v-model:search-term="searchTerm" shortcut="/" :fuse="{ resultLimit: 42 }" />
    </ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
