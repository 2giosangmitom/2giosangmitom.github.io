<template>
  <li>
    <slot />
  </li>
</template>

<style scoped>
li::before {
  content: "-";
  margin-right: 10px;
  color: var(--color-sapphire);
}

li:not(:first-child) {
  margin-top: 5px;
}
</style>
