<template>
  <header class="header">
    <h1>Hello!</h1>
    <h2>I&apos;m Chien.</h2>
  </header>
  <main class="main">
    <p>
      I&apos;m an aspiring web developer from Vietnam, specializing in front-end development with Vue.js and back-end
      development with Node.js.
      I have a strong understanding of JavaScript and its ecosystem, and I&apos;m passionate about building scalable web
      applications.
      In my free time, I love contributing to open-source projects and continuously expanding my knowledge.
      My goal is to become a professional programmer in the future.
    </p>
  </main>
  <footer class="footer">
    <p>
      <a href="https://github.com/2giosangmitom" target="_blank">GitHub</a> |
      <a href="https://www.linkedin.com/in/2giosangmitom/" target="_blank">LinkedIn</a>
    </p>
  </footer>
</template>

<style scoped>
.header h1 {
  font-size: 4rem;
  font-weight: 700;
  color: #bb86fc;
}

.header h2 {
  font-size: 2rem;
  font-weight: 400;
  color: #b0b0b0;
  margin-top: -10px;
}

.main {
  max-width: 700px;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6;
  margin-top: 20px;
}

.footer {
  margin-top: 20px;
  font-size: 1rem;
  font-weight: 400;
}

.footer a {
  text-decoration: none;
  color: #03dac6;
  font-weight: 500;
  transition: color 0.1s ease-in;
}

.footer a:hover {
  color: #bb86fc;
}
</style>
