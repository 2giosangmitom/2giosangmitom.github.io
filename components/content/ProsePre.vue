<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

const copied = ref<boolean>(false);

const handleCopy = async () => {
  copied.value = true;

  await navigator.clipboard.writeText(props.code);

  setTimeout(() => {
    copied.value = false;
  }, 1000);
};
</script>

<template>
  <div>
    <div v-show="!copied">
      <button title="Copy code" @click="handleCopy" />
    </div>
    <div v-show="copied">
      <button title="Copy code" />
    </div>
    <pre :class="$props.class"><slot/></pre>
  </div>
</template>

<style>
pre code .line {
  display: block;
}
</style>
