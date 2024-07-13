<script>
import "iconify-icon";
</script>

<template>
  <div class="container">
    <AppHeader />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 10px;
}

@media screen and (min-width: 720px) {
  .container {
    margin: 0 20px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    margin: 0 50px;
  }
}
</style>
