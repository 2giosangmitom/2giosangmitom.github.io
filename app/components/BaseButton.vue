<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'solid' | 'soft' | 'outline';
    icon?: string;
    loading?: boolean;
    loadingIcon?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
  }>(),
  {
    variant: 'solid',
    loading: false,
    icon: undefined,
    loadingIcon: undefined,
    type: undefined
  }
);
</script>

<template>
  <button :class="`base-button ${props.variant}`" :type="type">
    <Icon v-if="props.icon" v-show="!loading" class="icon" :name="props.icon" size="20" />
    <Icon v-if="props.loading && props.loadingIcon" :name="props.loadingIcon" size="20" class="loading-icon" />
    <slot />
  </button>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.base-button {
  display: inline-flex;
  column-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  outline: none;
  border: none;
  border-radius: variables.$rounded-sm;
  transition: background-color 200ms ease;
  font-size: variables.$font-base;

  .loading-icon {
    animation: 1s infinite spin linear;
  }

  .icon {
    width: variables.$font-lg;
    height: variables.$font-lg;
  }

  // Variants
  &.solid {
    background-color: variables.$color-primary;

    &:hover {
      background-color: color-mix(in hsl, variables.$color-primary, transparent 20%);
    }
  }

  &.soft {
    background-color: transparent;
    color: variables.$color-primary;

    &:hover {
      background-color: color-mix(in hsl, variables.$color-primary, transparent 80%);
    }
  }

  &.outline {
    background-color: transparent;
    color: variables.$color-primary;
    outline: 1px solid variables.$color-primary;

    &:hover {
      background-color: color-mix(in hsl, variables.$color-primary, transparent 90%);
    }
  }
}
</style>
