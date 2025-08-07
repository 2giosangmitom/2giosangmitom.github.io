<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
    required?: boolean;
    placeholder?: string;
    icon?: string;
    rows?: number;
  }>(),
  {
    required: false,
    placeholder: '',
    icon: undefined,
    rows: 8
  }
);
</script>

<template>
  <div class="base-textarea-container">
    <label :for="name" class="textarea-label font-medium">
      {{ name }}
      <span v-if="required" class="required-sign">*</span>
    </label>

    <div class="textarea-box">
      <textarea
        :id="name"
        type="text"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :rows="rows"
        :style="icon ? 'padding-left: 2rem;' : ''"
      />

      <span v-if="icon" class="textarea-box__icon">
        <Icon :name="icon" size="20" />
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.base-textarea-container {
  .textarea-label {
    font-size: variables.$font-sm;
    .required-sign {
      color: variables.$color-error;
    }
  }

  .textarea-box {
    margin-top: 0.2rem;
    position: relative;

    textarea {
      padding: 0.3rem 0.5rem;
      border: none;
      outline: 1px solid variables.$color-dimmed;
      background-color: variables.$color-background;
      color: variables.$color-foreground;
      font-size: variables.$font-sm;
      border-radius: variables.$rounded-sm;
      transition: outline-color 200ms ease;
      width: 100%;

      &:focus {
        outline: 2px solid variables.$color-primary;
      }

      &::placeholder {
        font-size: variables.$font-sm;
      }
    }

    &__icon {
      position: absolute;
      left: 0.5rem;
      top: 0.3rem;
    }
  }
}
</style>
