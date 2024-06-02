<template>
  <footer class="footer">
    <p>
      Made with Nuxt.js 3 by
      <a href="https://github.com/2giosangmitom" target="_blank" rel="noopener noreferrer">Vo Quang Chien</a>
    </p>
    <div class="footer-overlay"></div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  margin: 0 -5rem;
}

.footer-overlay {
  height: 15rem;
  width: 100%;
  background-image: url("~/assets/images/footer.svg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: -12.5rem;
  z-index: -1;
}
</style>
