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

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
