<template>
  <NuxtLoadingIndicator :color="false" class="loading-indicator" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.loading-indicator {
  background-color: variables.$color-primary;
}
</style>
