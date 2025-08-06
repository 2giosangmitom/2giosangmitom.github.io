<script setup lang="ts">
const props = defineProps<{
  items: string[];
}>();

const current = ref(0);
const total = props.items.length;

function getStyle(index: number) {
  const pos = (index - current.value + total) % total;

  const translateX = pos * 10;
  const translateY = pos * -10;

  return {
    transform: `translateX(${translateX}px) translateY(${translateY}px)`,
    zIndex: total - pos,
    opacity: (index === current.value && 1) || (index > 2 && 0) || 0.5,
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
  };
}

onMounted(() => {
  setInterval(() => {
    current.value = (current.value + 1) % total;
  }, 2000);
});
</script>

<template>
  <div class="relative w-full min-h-62 md:max-w-96">
    <div v-for="(item, index) in items" :key="item" class="absolute border border-zinc-700" :style="getStyle(index)">
      <NuxtImg :src="item" alt="preview" class="object-fill" />
    </div>
  </div>
</template>
