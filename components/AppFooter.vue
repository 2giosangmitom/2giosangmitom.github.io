<template>
  <footer class="footer">
    <p>
      Made with <span class="nuxt">Nuxt.js 3</span> by
      <a
        href="https://github.com/2giosangmitom"
        target="_blank"
        rel="noopener noreferrer"
        >Vo Quang Chien</a
      >
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: 1rem;
  background-color: #f1f1f1;
  border-top: 1px solid #e0e0e0;
}

.footer p {
  font-size: 1rem;
  color: #333;
  margin: 0;
}

.footer a {
  text-decoration: none;
  color: #008080; // Replace $teal with the hex code for teal color
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #005f5f; // A darker shade of teal for the hover state
}

.nuxt {
  font-weight: bold;
}
</style>
