<template>
  <ULink
    raw
    :href="props.href"
    :target="props.target"
    class="underline decoration-dotted transition-colors hover:text-accent"
  >
    <slot />
  </ULink>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String as PropType<
      | "_blank"
      | "_parent"
      | "_self"
      | "_top"
      | (string & object)
      | null
      | undefined
    >,
    default: undefined,
    required: false,
  },
});
</script>
