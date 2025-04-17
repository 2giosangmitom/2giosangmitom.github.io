<template>
  <code class="formatted-code">
    <slot />
  </code>
</template>

<style scoped>
.formatted-code {
  background-color: rgba(var(--color-pink), 0.2);
  padding: 0.1rem;
  border-radius: 5px;
}
</style>
