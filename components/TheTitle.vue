<template>
  <h1><slot /><span> .</span></h1>
</template>

<style lang="scss" scoped>
h1 {
  font-size: $text-xl;
}

span {
  color: var(--color-pink);
}
</style>
