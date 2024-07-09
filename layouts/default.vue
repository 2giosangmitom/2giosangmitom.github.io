<script>
import "iconify-icon";
</script>

<template>
  <div class="container">
    <AppHeader />
    <slot />
  </div>
</template>

<style scoped>
.container {
  margin: 0 1rem;
  padding-top: 1rem;
}

@media screen and (min-width: 840px) {
  .container {
    margin: 0 4rem;
    padding-top: 2rem;
  }
}
</style>
