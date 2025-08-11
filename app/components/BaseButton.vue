<script setup lang="ts">
type ButtonVariant = 'solid' | 'soft' | 'outline' | 'subtle';
type ButtonType = 'button' | 'submit' | 'reset' | undefined;

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    icon?: string;
    loading?: boolean;
    loadingIcon?: string;
    type?: ButtonType;
  }>(),
  {
    variant: 'solid',
    icon: undefined,
    loading: false,
    loadingIcon: undefined,
    type: undefined
  }
);

const buttonClasses = computed(() => ['base-button', `base-button--${props.variant}`]);
</script>

<template>
  <button :class="buttonClasses" :type="props.type">
    <Icon v-if="props.icon && !props.loading" class="base-button__icon" :name="props.icon" size="20" />
    <Icon
      v-if="props.loading && props.loadingIcon"
      class="base-button__loading-icon"
      :name="props.loadingIcon"
      size="20"
    />
    <slot />
  </button>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as v;

.base-button {
  display: inline-flex;
  column-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  outline: none;
  border: none;
  border-radius: v.$rounded-sm;
  transition: background-color 200ms ease;
  font-size: v.$font-base;

  &__loading-icon {
    animation: 1s infinite spin linear;
  }

  &__icon {
    width: v.$font-lg;
    height: v.$font-lg;
  }

  // Variants
  &--solid {
    background-color: v.$color-primary;
    color: v.$color-background;

    &:hover {
      background-color: color-mix(in hsl, v.$color-primary, transparent 20%);
    }
  }

  &--soft {
    background-color: transparent;
    color: v.$color-primary;

    &:hover {
      background-color: color-mix(in hsl, v.$color-primary, transparent 80%);
    }
  }

  &--outline {
    background-color: transparent;
    color: v.$color-primary;
    outline: 1px solid v.$color-primary;

    &:hover {
      background-color: color-mix(in hsl, v.$color-primary, transparent 90%);
    }
  }

  &--subtle {
    color: v.$color-primary;
    background-color: color-mix(in hsl, v.$color-primary, transparent 90%);

    &:hover {
      background-color: color-mix(in hsl, v.$color-primary, transparent 70%);
    }
  }
}
</style>
