<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
const themeIcon = computed(() => {
  return (
    (isDark.value && "line-md:sunny-filled-loop-to-moon-filled-transition") ||
    "line-md:sunny-filled"
  );
});
</script>

<template>
  <button class="toggle-theme" @click="toggleDark()">
    <iconify-icon :icon="themeIcon" style="font-size: 1.5rem" />
  </button>
</template>

<style scoped>
.toggle-theme {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  border: 1px solid var(--accent);
  border-radius: 100%;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  padding: 5px;
  cursor: pointer;
  outline: none;
  transition: all 0.1s ease-in;
}

.toggle-theme:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
