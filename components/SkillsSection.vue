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
      <Icon icon="vscode-icons:file-type-html" :ssr="true" />
    </div>
    <Icon icon="vscode-icons:file-type-css" :srr="true" />
  </section>
</template>

<style lang="scss" scoped>
.skill-item {
  width: 2.5rem;
  height: 2.5rem;
  background-color: grayscale($color: #000000);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}
</style>
