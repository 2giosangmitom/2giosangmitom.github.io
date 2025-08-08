<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
    required?: boolean;
    placeholder?: string;
    icon?: string;
    error?: string;
  }>(),
  {
    required: false,
    placeholder: '',
    icon: undefined,
    error: ''
  }
);

const input = defineModel<string>();
const emit = defineEmits(['blur']);
</script>

<template>
  <div class="base-input-container">
    <label :for="name" class="input-label font-medium">
      {{ name }}
      <span v-if="required" class="required-sign">*</span>
    </label>

    <div class="input-box">
      <input
        :id="name"
        v-model="input"
        type="text"
        :name="name"
        :placeholder="placeholder"
        :style="icon ? 'padding-left: 2rem;' : ''"
        :class="{ error: error }"
        @blur="emit('blur')"
      />

      <span v-if="icon" class="input-box__icon">
        <Icon :name="icon" size="20" />
      </span>
    </div>
    <p v-if="error" class="input-error">{{ error }}</p>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.base-input-container {
  .input-label {
    font-size: variables.$font-sm;
    .required-sign {
      color: variables.$color-error;
    }
  }

  .input-box {
    margin-top: 0.2rem;
    position: relative;

    input {
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

      &.error {
        outline: 2px solid variables.$color-error;
      }
    }

    &__icon {
      position: absolute;
      left: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
  }

  .input-error {
    color: variables.$color-error;
    font-size: variables.$font-sm;
  }
}
</style>
