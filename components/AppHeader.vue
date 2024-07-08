<template>
  <header>
    <ClientOnly>
      <div class="header-container">
        <NavBar />
      </div>
    </ClientOnly>
  </header>
</template>

<style lang="css" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-container h1 {
  font-size: 1.5rem;
}
</style>
