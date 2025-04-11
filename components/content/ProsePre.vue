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
  <div class="relative">
    <div v-show="!copied">
      <UButton
        class="absolute right-0 top-0 cursor-pointer outline-none rounded-none rounded-bl-sm dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700 p-2 text-lg bg-zinc-300 text-black hover:bg-zinc-400"
        icon="mdi-light:clipboard"
        title="Copy code"
        size="xl"
        @click="handleCopy"
      />
    </div>
    <div v-show="copied">
      <UButton
        class="absolute right-0 top-0 cursor-pointer outline-none rounded-none rounded-bl-sm dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700 p-2 text-lg bg-zinc-300 text-black hover:bg-zinc-400"
        icon="mdi-light:clipboard-check"
        title="Copy code"
        size="xl"
      />
    </div>
    <pre
      class="dark:bg-zinc-900 border dark:border-zinc-800 bg-zinc-100 border-zinc-300 my-2"
      :class="$props.class"
    ><slot/></pre>
  </div>
</template>

<style>
pre code .line {
  display: block;
}
</style>
