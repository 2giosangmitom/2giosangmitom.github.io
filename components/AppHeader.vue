<template>
  <ClientOnly>
    <header>
      <NavBar />
    </header>
  </ClientOnly>
</template>

<style lang="scss" scoped>
header {
  background-color: var(--background-overlay);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 10px;
  z-index: 20;
}

@media screen and (min-width: 720px) {
  header {
    padding: 10px 20px;
  }
}

@media screen and (min-width: 1200px) {
  header {
    padding: 10px 50px;
  }
}
</style>
