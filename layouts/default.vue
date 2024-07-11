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
  padding: 0 5px;
}
</style>
