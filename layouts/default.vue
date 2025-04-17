<template>
  <div class="layout">
    <TheLoadingIndicator />
    <TheHeader />
    <div class="wrapper">
      <TheSeparator />
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.wrapper {
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;
}

/* medium */
@media (min-width: $screen-medium) {
  .wrapper {
    width: $content-medium;
    margin-left: auto;
    margin-right: auto;
  }
}

/* medium++ */
@media (min-width: $screen-mediumpp) {
  .wrapper {
    width: $content-mediumpp;
  }
}

/* wide */
@media (min-width: $screen-wide) {
  .wrapper {
    width: $content-wide;
  }
}

/* wide++ */
@media (min-width: $screen-widepp) {
  .wrapper {
    width: $content-widepp;
  }
}
</style>
