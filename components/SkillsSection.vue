<script setup lang="ts">
// const skills = {
//   frontEnd: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "Vue.js", "Nuxt.js"],
//   testing: ["Jest", "Vitest", "Vue Test Utils"],
//   backend: ["Go", "Go Fiber"],
//   toolsAndPlatforms: ["NixOS", "Neovim", "Git", "GitHub Actions", "Docker", "Makefile", "Node.js"],
//   databases: ["PostgreSQL", "MongoDB"],
//   otherLanguages: ["Nix", "Typst", "Markdown", "Shell", "Rust", "Lua"],
// };
import { Icon } from "@iconify/vue";
</script>

<template>
  <section id="skills">
    <div class="skill-item">
      <Icon icon="vscode-icons:file-type-html" style="font-size: 2rem" />
    </div>
    <div class="skill-item">
      <Icon icon="vscode-icons:file-type-css" style="font-size: 2rem" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
#skills {
  display: flex;
  gap: 0.5rem;
}

.skill-item {
  width: 3.5rem;
  height: 3.5rem;
  background-color: $grey;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}
</style>
