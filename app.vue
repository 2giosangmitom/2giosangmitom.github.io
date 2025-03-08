<template>
  <div class="container">
    <header>
      <h1>Welcome to my website</h1>
      <p>Hi, I'm Chien, a passionate web developer.</p>
    </header>
    <main>
      <section>
        <h2>About Me</h2>
        <p>
          I have a deep passion for backend development, network programming,
          system programming, and everything Linux. I love building efficient,
          high-performance applications and exploring the inner workings of
          operating systems and databases.
        </p>
      </section>
      <section>
        <h2>My Projects</h2>
        <p>Here are some of my latest projects:</p>
        <ul>
          <li>
            <a href="https://github.com/2giosangmitom/tools">tools</a> - My own
            CLI/TUI tools for Arch Linux btw
          </li>
          <li>
            <a href="https://github.com/2giosangmitom/nightfall.nvim"
              >nightfall.nvim</a
            >
            - A sublime Neovim colorscheme, immerse in twilight hues for
            enhanced focus and creativity
          </li>
          <li>
            <a href="https://github.com/2giosangmitom/blog">blog</a> - [WIP] My
            blog
          </li>
        </ul>
      </section>
      <section>
        <h2>Contact Me</h2>
        <p>
          If you want to get in touch, feel free to
          <a href="mailto:voquangchien.dev@proton.me">email me</a>.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Vo Quang Chien | 2giosangmitom",
  description: "Discover my projects and get in touch.",
});
</script>

<style scoped>
.container {
  font-family: "Arial", sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}

p {
  font-size: 1.2rem;
  color: #34495e;
}

h2 {
  font-size: 2rem;
  color: #2980b9;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #ecf0f1;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
}

a {
  color: #2980b9;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
