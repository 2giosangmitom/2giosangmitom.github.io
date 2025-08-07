<template>
  <div class="wrapper">
    <TheHeader />
    <div class="page-content">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .page-content {
    flex: 1;
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
}
</style>
