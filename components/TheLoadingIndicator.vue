<script setup lang="ts">
const { progress } = useLoadingIndicator();
const visible = ref(false);

watch(progress, (val) => {
  if (val > 0 && val < 100) {
    visible.value = true;
  }

  if (val === 100) {
    setTimeout(() => {
      visible.value = false;
      // Reset width after fade
      setTimeout(() => {}, 400); // match fade duration
    }, 200);
  }
});
</script>

<template>
  <div class="loading-indicator" :class="{ 'is-visible': visible }" :style="{ width: `${progress}%` }" />
</template>

<style scoped lang="scss">
.loading-indicator {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background-color: var(--color-red);
  box-shadow: 0 0 8px rgba(var(--color-pink), 0.4);
  opacity: 0;
  transform: translateZ(0);
  transition:
    width 0.3s ease-out,
    opacity 0.4s ease-in-out;
  z-index: 9999;
  pointer-events: none;

  &.is-visible {
    opacity: 1;
  }
}
</style>
