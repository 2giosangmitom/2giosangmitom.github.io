<script setup lang="ts">
useSeoMeta({ title: "About Me" });

const info = [
  { label: "Pronouns", value: "He/Him" },
  { label: "Nationality", value: "Vietnam" },
  { label: "Human Languages", value: "English, Vietnamese" },
  { label: "Favorite Beer", value: "Huda" },
];

const skills = [
  {
    category: "Programming Languages",
    items: ["C++", "Java", "JavaScript", "TypeScript", "Lua", "Bash"],
  },
  {
    category: "Frontend Development",
    items: ["Vue.js", "Nuxt.js"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQLite"],
  },
  {
    category: "Editor",
    items: ["Neovim"],
  },
];
</script>

<template>
  <div>
    <TheTitle text="about me" class="mb-4" />

    <!-- Personal Info -->
    <h2 class="text-xl font-semibold">Vo Quang Chien</h2>
    <p class="text-accent mb-2">
      <em>Always, I&apos;m a newbie...</em>
    </p>
    <ul class="ml-5 space-y-1">
      <li
        v-for="item in info"
        :key="item.label"
        class="relative before:content-['-'] before:absolute before:-left-5 before:text-accent"
      >
        <b class="capitalize">{{ item.label }}:</b> {{ item.value }}
      </li>
    </ul>

    <!-- Professional Skills -->
    <h2 class="text-xl font-semibold mt-6">Professional Skills</h2>
    <ul class="ml-5 space-y-1">
      <li
        v-for="item in skills"
        :key="item.category"
        class="relative before:content-['-'] before:absolute before:-left-5 before:text-accent"
      >
        <b>{{ item.category }}:</b> {{ item.items.join(", ") }}
      </li>
    </ul>
  </div>
</template>
