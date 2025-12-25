<script setup lang="ts">
const searchTerm = shallowRef('');

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('articles'));
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('articles'), {
  server: false
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
