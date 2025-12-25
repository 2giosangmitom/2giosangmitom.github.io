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

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('articles'));
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('articles'), {
  server: false
});

onMounted(() => {
  OverlayScrollbars(
    {
      target: document.body,
      cancel: {
        nativeScrollbarsOverlaid: true
      }
    },
    {
      scrollbars: {
        autoHide: 'leave',
        autoHideDelay: 500,
        autoHideSuspend: false
      }
    }
  );
});
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator color="var(--ui-primary)" />
    <ClientOnly>
      <LazyUContentSearch
        v-model:search-term="searchTerm"
        shortcut="meta_k"
        :fuse="{ resultLimit: 42 }"
        :navigation="navigation"
        :files="files"
      />
    </ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
