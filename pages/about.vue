<script setup lang="ts">
useSeoMeta({ title: "About Me" });

const info = [
  { label: "Pronouns", value: "He/Him" },
  { label: "Nationality", value: "Vietnam" },
  { label: "Human Languages", value: "English, Vietnamese" },
  { label: "Preferred Programming Languages", value: "C++, JavaScript" },
  { label: "Favorite Beer", value: "Huda" },
];

const skills = [
  {
    category: "Programming Languages",
    items: ["C++", "Java", "JavaScript", "TypeScript", "Typst", "Lua", "Bash"],
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
    <h2 class="text-xl font-semibold">Vo Quang Chien</h2>
    <p class="text-accent">
      <em>Always, I&apos;m a newbie...</em>
    </p>

    <!-- Personal Info -->
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
    <div>
      <div v-for="skill in skills" :key="skill.category" class="mt-2">
        <h4 class="font-semibold text-accent">{{ skill.category }}</h4>
        <ul class="ml-4 space-y-1">
          <li
            v-for="item in skill.items"
            :key="item"
            class="relative before:content-['•'] before:absolute before:-left-4 before:text-accent"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
