<script setup lang="ts">
const skills = [
  { name: "HTML", color: "#F75431" },
  { name: "CSS", color: "#2965F1" },
  { name: "JavaScript", color: "#987070" },
  { name: "TypeScript", color: "#007ACC" },
  { name: "Go", color: "#00ADD8" },
  { name: "Nix", color: "#5277C3" },
  { name: "Git", color: "#F34F29" },
  { name: "GitHub", color: "#424769" },
  { name: "Docker", color: "#2496ED" },
  { name: "Vue.js", color: "#42B883" },
  { name: "Nuxt.js", color: "#3FA796" },
  { name: "Tailwind", color: "#38B2AC" },
  { name: "Vitest", color: "#0F6292" },
  { name: "Pinia", color: "#10B981" },
  { name: "Vite", color: "#FA2FB5" },
  { name: "NixOS", color: "#5277C3" },
  { name: "Node.js", color: "#43853D" },
  { name: "React.js", color: "#3ABEF9" },
  { name: "Next.js", color: "#850F8D"}
];
</script>

<template>
  <section id="skills">
    <h2 class="section-title">Technical skills</h2>
    <div class="skills-container">
      <div
        class="skill-item"
        v-for="skill in skills"
        :key="skill.name"
        :style="{ backgroundColor: skill.color, color: '#F5F7F8' }"
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

.skills-container .skill-item {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
