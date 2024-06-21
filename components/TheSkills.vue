<script setup lang="ts">
const skills = [
  { name: "HTML", color: "#F75431" },
  { name: "CSS", color: "#A0DEFF" },
  { name: "JavaScript", color: "#FFC100" },
  { name: "TypeScript", color: "#5AB2FF" },
  { name: "Go", color: "#68D2E8" },
  { name: "Nix", color: "#E1AFD1" },
  { name: "Git", color: "#F34F29" },
  { name: "Vue.js", color: "#42B883" },
  { name: "GitHub", color: "#EEF7FF" },
  { name: "Docker", color: "#CAE6B2" },
  { name: "Tailwind", color: "#38B2AC" },
  { name: "Vitest", color: "#BFF6C3" },
  { name: "Pinia", color: "#FFFDB5" },
  { name: "Vite", color: "#FA2FB5" },
  { name: "Nuxt.js", color: "#3FA796" },
  { name: "Jest", color: "#E6FF94" },
  { name: "NixOS", color: "#7E8EF1" },
  { name: "Node.js", color: "#7ABA78" },
  { name: "PostgreSQL", color: "#3ABEF9" },
  { name: "MongoDB", color: "#40A578" },
  { name: "Shell", color: "#C3FF93" },
];
</script>

<template>
  <section id="skills">
    <h2 class="section-title">Technical Skills</h2>
    <div class="skills-container">
      <div
        v-for="skill in skills"
        :key="skill.name"
        :style="{ backgroundColor: skill.color, color: '#151515' }"
        class="skill-item"
        translate="no"
      >
        {{ skill.name }}
      </div>
    </div>
  </section>
</template>

<style scoped>
#skills {
  max-width: 60rem;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-item {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
