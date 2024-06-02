<template>
  <section class="skills">
    <h2>Skills</h2>
    <div class="skills-container">
      <div class="skill-box js">JavaScript</div>
      <div class="skill-box ts">TypeScript</div>
      <div class="skill-box vue">Vue.js</div>
      <div class="skill-box nuxt">Nuxt.js</div>
      <div class="skill-box react">React</div>
      <div class="skill-box next">Next.js</div>
      <div class="skill-box node">Node.js</div>
      <div class="skill-box go">Go</div>
      <div class="skill-box docker">Docker</div>
      <div class="skill-box git">Git</div>
      <div class="skill-box css">CSS</div>
      <div class="skill-box html">HTML</div>
    </div>
  </section>
</template>

<style scoped>
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.skill-box {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: #151515;
  font-weight: bold;
  text-align: center;
  font-size: 0.875rem;
}
.js {
  background-color: #f0db4f;
}
.ts {
  background-color: #007acc;
}
.vue {
  background-color: #42b883;
}
.nuxt {
  background-color: #00dc82;
}
.react {
  background-color: #61dafb;
}
.next {
  background-color: #0070f3;
}
.node {
  background-color: #3c873a;
}
.go {
  background-color: #00add8;
}
.docker {
  background-color: #2496ed;
}
.git {
  background-color: #e84d31;
}
.css {
  background-color: #2862e9;
}
.html {
  background-color: #e44d26;
}
</style>
