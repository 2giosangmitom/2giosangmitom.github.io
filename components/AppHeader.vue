<template>
  <header class="header">
    <div>
      <NuxtLink href="/">2giosangmitom</NuxtLink>
      <a href="https://github.com/2giosangmitom" target="_blank">
        <Icon name="mdi:github" />
      </a>
    </div>

    <nav class="header__nav">
      <NuxtLink href="/posts">posts</NuxtLink>
      <NuxtLink href="/tags">tags</NuxtLink>
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
