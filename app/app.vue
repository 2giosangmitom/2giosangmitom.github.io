<script setup lang="ts">
const searchModalOpen = useState('search-modal', () => false);

useEventListener('keyup', (e) => {
  if (e.ctrlKey && e.key === '/') {
    searchModalOpen.value = !searchModalOpen.value;
  }
});

const { toasts } = useToast();
</script>

<template>
  <NuxtLoadingIndicator :color="false" class="loading-indicator" />
  <Transition name="fade">
    <TheSearch v-if="searchModalOpen" @close="searchModalOpen = false" />
  </Transition>

  <ToastProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <TheToast
      v-for="toast in toasts"
      :title="toast.title"
      :content="toast.content"
      :key="`${toast.content}-${toast.title}`"
    />

    <ToastViewport class="toast-viewport" />
  </ToastProvider>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.loading-indicator {
  background-color: variables.$color-primary;
}

.toast-viewport {
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
</style>
