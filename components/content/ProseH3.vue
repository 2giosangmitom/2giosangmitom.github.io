<script setup lang="ts">
const props = defineProps<{ id?: string }>();
</script>

<template>
  <h2
    :id="props.id"
    class="text-xl my-1 before:content-['###'] before:mr-2 before:text-accent"
  >
    <ULink
      raw
      :to="`#${props.id}`"
      class="hover:bg-accent transition-all px-0.5"
    >
      <slot />
    </ULink>
  </h2>
</template>
