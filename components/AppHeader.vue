<template>
  <ClientOnly>
    <header>
      <NavBar />
    </header>
  </ClientOnly>
</template>

<style lang="scss" scoped>
header {
  background-color: $background-overlay;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 10px;
}

@media screen and (min-width: 720px) {
  header {
    padding: 10px 20px;
  }
}
</style>
