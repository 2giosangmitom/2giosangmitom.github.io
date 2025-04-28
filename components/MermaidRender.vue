<script setup lang="ts">
import mermaid from "mermaid";
import { nanoid } from "nanoid";

const props = defineProps<{
  code: string;
}>();

const loaded = ref(false);
const svgCode = ref("");

onMounted(async () => {
  try {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark"
    });
    const { svg } = await mermaid.render(nanoid(), props.code);
    svgCode.value = svg;
    loaded.value = true;
  } catch (e) {
    console.error(e);
  }
});
</script>

<template>
  <!-- Loading Indicator -->
  <div v-if="!loaded" class="loading-text">Loading Mermaid graph...</div>
  <div v-else class="mermaid-container">
    <!-- Rendered Mermaid SVG -->
    <pre class="mermaid" v-html="svgCode" />
  </div>
</template>

<style lang="scss" scoped>
.mermaid-container {
  background-color: rgb(17, 17, 27);
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2);
  margin: 1rem 0;
  overflow: auto;
  text-align: center;
}

.mermaid {
  min-width: 600px;
  width: 100%;
  height: auto;
  font-size: 16px;

  svg {
    width: 100%;
    height: auto;
  }
}
</style>
