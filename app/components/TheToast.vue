<script setup lang="ts">
defineProps<{
  title?: string;
  content?: string;
}>();
</script>

<template>
  <ToastRoot class="toast-root">
    <div class="toast-content">
      <div class="toast-text">
        <ToastTitle v-if="title" class="toast-title">
          {{ title }}
        </ToastTitle>
        <ToastDescription v-if="content" class="toast-description">
          {{ content }}
        </ToastDescription>
      </div>
      <ToastClose aria-label="Close" class="toast-close">
        <BaseButton icon="mdi:close" variant="subtle" />
      </ToastClose>
    </div>
  </ToastRoot>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as v;

.toast-root {
  position: relative;
  display: flex;
  align-items: center;
  background-color: v.$color-surface;
  color: v.$color-foreground;
  padding: 1rem 1.25rem;
  border-radius: v.$rounded-sm;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  width: 360px;
  gap: 1rem;
  animation: toast-slide-in 0.3s ease-out;

  &[data-state='closed'] {
    animation: toast-fade-out 0.2s ease-in forwards;
  }
}

.toast-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.toast-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.toast-title {
  font-weight: 600;
  font-size: 0.95rem;
}

.toast-description {
  font-size: 0.85rem;
  color: v.$color-dimmed;
  line-height: 1.3;
}

.toast-close {
  flex-shrink: 0;
  margin-left: 0.5rem;
  border-radius: 50%;
  background-color: transparent;
  border: none;

  button {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
  }
}

@keyframes toast-slide-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes toast-fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
