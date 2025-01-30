<template>
  <header class="header">
    <h1>Hello!</h1>
    <h2>I&apos;m Chien.</h2>
  </header>
  <main class="main">
    <p>
      I&apos;m a passionate developer from Vietnam, specializing in back-end
      development with
      <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js</a>
      and exploring front-end with
      <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>.
    </p>
    <p>
      I also have experience with
      <em class="text-medium">C, C++, and Rust</em>, developing useful CLI
      tools that enhance my productivity in my
      <a href="https://archlinux.org/" target="_blank" rel="noopener noreferrer">Linux</a>
      environment.
    </p>
    <p>
      Currently, I&apos;m diving deeper into the world of back-end development,
      focusing on building scalable and efficient systems. I actively contribute
      to open-source projects and continuously expand my skills. My ultimate
      goal is to grow into a professional programmer and make a meaningful
      impact in the tech world.
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
a {
  text-decoration: none;
  color: #03dac6;
  transition: color 0.1s ease-in;
}

a:hover {
  color: #bb86fc;
}

.header h1 {
  font-size: 4.5rem;
  font-weight: 700;
  color: #bb86fc;
}

.header h2 {
  font-size: 2.5rem;
  font-weight: 400;
  color: #ffbcbc;
  margin-top: 10px;
}

.main {
  max-width: 700px;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.6;
  margin-top: 20px;
}

.footer {
  margin-top: 20px;
  font-size: 1.25rem;
  font-weight: 400;
}
</style>
