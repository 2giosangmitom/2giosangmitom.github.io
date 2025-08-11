<script setup lang="ts">
type BadgeVariant = 'solid' | 'outline' | 'subtle';

const props = withDefaults(
  defineProps<{
    variant?: BadgeVariant;
  }>(),
  {
    variant: 'solid'
  }
);

const badgeClasses = computed(() => ['base-badge', `base-badge--${props.variant}`]);
</script>

<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as v;

.base-badge {
  border-radius: v.$rounded-sm;
  padding: 0.3rem 0.4rem;
  font-size: v.$font-sm;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &--solid {
    color: v.$color-background;
    background-color: v.$color-primary;
  }

  &--outline {
    outline: 1px solid v.$color-primary;
  }

  &--subtle {
    color: v.$color-primary;
    background-color: color-mix(in hsl, v.$color-primary, transparent 90%);
  }
}
</style>
