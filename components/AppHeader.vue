<template>
  <ClientOnly>
    <header>
      <NavBar />
    </header>
  </ClientOnly>
</template>

<style lang="scss" scoped>
header {
  padding: 0.5rem 5px;
  margin: 0 -5px;
  background-color: $background-overlay;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 0.1);
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
