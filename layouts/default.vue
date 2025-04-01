<template>
  <div class="wrapper">
    <AppHeader />
    <div class="content">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.wrapper {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
