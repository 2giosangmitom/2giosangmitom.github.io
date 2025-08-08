<script setup lang="ts">
const props = defineProps({
  code: { type: String, default: '' },
  language: { type: String, default: null },
  filename: { type: String, default: null },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: { type: String, default: null },
  class: { type: String, default: null }
});

const { copy, copied } = useClipboard({ source: props.code, copiedDuring: 3000 });
</script>

<template>
  <div class="prose-pre">
    <button class="prose-pre__copy" title="Copy code" @click="copy()">
      <Icon v-show="!copied" name="lucide:clipboard" size="24" />
      <Icon v-show="copied" name="lucide:clipboard-check" size="24" />
    </button>
    <pre :class="['prose-pre__pre', $props.class]"><slot /></pre>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.prose-pre {
  position: relative;
  margin: 10px 0;

  &__copy {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.4rem 0.6rem;
    background-color: color-mix(in hsl, variables.$color-dimmed, transparent 90%);
    color: variables.$color-foreground;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    border-bottom-left-radius: variables.$rounded-md;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    gap: 0.3rem;

    &:hover {
      background-color: color-mix(in hsl, variables.$color-dimmed, transparent 70%);
    }
  }

  &__pre {
    background-color: color-mix(in hsl, variables.$color-dimmed, transparent 90%);
    border: 1px solid variables.$color-secondary;
    border-radius: variables.$rounded-sm;
    overflow-x: auto;
    padding: 0.5rem;
    font-family: 'JetBrainsMono', monospace;
    font-size: variables.$font-sm;
    color: variables.$color-foreground;
  }
}

pre code .line {
  display: block;
}
</style>
