<template>
  <header class="header">
    <div>
      <NuxtLink to="/">2giosangmitom</NuxtLink>
      <NuxtLink to="https://github.com/2giosangmitom" target="_blank">
        <Icon name="mdi:github" />
      </NuxtLink>
    </div>

    <nav class="header__nav">
      <NuxtLink to="/posts">posts</NuxtLink>
      <NuxtLink to="/tags">tags</NuxtLink>
      <NuxtLink to="/contact">contact</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.header__nav {
  display: inline-flex;
  gap: 10px;
}
</style>
