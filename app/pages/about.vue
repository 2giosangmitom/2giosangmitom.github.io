<script setup lang="ts">
useSeoMeta({
  title: 'About'
});
</script>

<template>
  <div class="space-y-6">
    <!-- Intro -->
    <section class="space-y-4">
      <h1 class="text-4xl font-bold text-primary-400">Hello there!</h1>
      <div class="text-base">
        <p>
          I'm <b>Vo Quang Chien</b>, a second-year software development student from Vietnam 🇻🇳,
          currently studying at <b>Hue University of Science</b>.
        </p>
        <p>
          I'm passionate about building efficient software and exploring how systems work - from web
          applications to low-level programming.
        </p>
      </div>
    </section>

    <!-- What I Do -->
    <section>
      <h2 class="text-2xl font-semibold">What I'm Working On</h2>
      <ul class="list-disc pl-5">
        <li>C, C++, TypeScript (with some Python)</li>
        <li>Node.js (Express, Fastify, NestJS) & Vue/Nuxt for full stack development</li>
        <li>Network programming & Linux system programming</li>
      </ul>
      <p class="mt-3">
        I work mainly on <b>Linux</b>, and I'm a fan of the terminal, Vim, and tweaking my setup
        (BTW, I use Arch 🐧).
      </p>
    </section>

    <!-- Quick Facts -->
    <section>
      <h2 class="text-2xl font-semibold">Quick Facts</h2>
      <ul>
        <li><b>Pronouns:</b> He/Him</li>
        <li><b>Languages:</b> Vietnamese, English</li>
        <li><b>Beer or wine?:</b> Beer (Huda forever!)</li>
      </ul>
    </section>

    <!-- Connect -->
    <section>
      <h2 class="text-2xl font-semibold">Find Me Online</h2>
      <ul>
        <li>
          <NuxtLink
            to="https://www.youtube.com/@2giosangmitom"
            class="text-blue-300 transition-colors hover:text-blue-500"
            target="_blank"
          >
            YouTube
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.linkedin.com/in/2giosangmitom/"
            class="text-blue-300 transition-colors hover:text-blue-500"
            target="_blank"
          >
            LinkedIn
          </NuxtLink>
        </li>
      </ul>
    </section>

    <!-- Quote -->
    <section>
      <blockquote class="italic text-gray-400">
        "🍜 Accept the things you cannot change, and change the things you cannot accept."
      </blockquote>
    </section>
  </div>
</template>
