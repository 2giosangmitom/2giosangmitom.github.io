<script setup lang="ts">
const searchModalOpen = useState('search-modal', () => false);

useEventListener('keyup', (e) => {
  if (e.ctrlKey && e.key === '/') {
    searchModalOpen.value = !searchModalOpen.value;
  }
});
</script>

<template>
  <NuxtLoadingIndicator :color="false" class="loading-indicator" />
  <Transition name="fade">
    <TheSearch v-if="searchModalOpen" @close="searchModalOpen = false" />
  </Transition>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.loading-indicator {
  background-color: variables.$color-primary;
}
</style>
