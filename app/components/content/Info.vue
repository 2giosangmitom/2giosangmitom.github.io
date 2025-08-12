<template>
  <div class="content-info-card">
    <div class="content-info-card__label font-bold">
      <Icon name="lucide:info" />
      INFO
    </div>
    <div class="content-info-card__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use 'assets/scss/variables' as v;

.content-info-card {
  position: relative;
  border-left: 5px solid v.$color-primary;
  padding-left: 0.75rem;
  margin: 0.5rem 0;

  &__label {
    font-size: v.$font-base;
    color: v.$color-primary;
    display: inline-flex;
    column-gap: 0.25rem;
    align-items: center;
  }
}
</style>
