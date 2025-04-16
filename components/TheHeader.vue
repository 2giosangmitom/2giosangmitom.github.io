<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get: () => colorMode.value === "dark",
  set: () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <header class="header">
    <div class="header__home-btn">
      <NuxtLink to="/">2giosangmitom</NuxtLink>
      <NuxtLink
        to="https://github.com/2giosangmitom"
        target="_blank"
        class="header-icon"
      >
        <Icon name="mdi:github" />
      </NuxtLink>
      <NuxtLink
        to="https://www.youtube.com/@2giosangmitom"
        target="_blank"
        class="header-icon"
      >
        <Icon name="mdi:youtube" />
      </NuxtLink>
    </div>
    <nav class="header__nav">
      <NuxtLink to="/posts">posts</NuxtLink>
      <NuxtLink to="/tags">tags</NuxtLink>
      <NuxtLink to="/about">about</NuxtLink>
      <ClientOnly>
        <button
          class="toggle-theme-btn"
          aria-label="Toggle dark mode"
          @click="isDark = !isDark"
        >
          <Icon v-show="!isDark" name="material-symbols:clear-day-rounded" />
          <Icon v-show="isDark" name="material-symbols:moon-stars" />
        </button>
      </ClientOnly>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 20px;

  .header-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform: translateY(4px);
    color: var(--text-color);

    span {
      font-size: $text-lg;
    }

    &:hover {
      background-color: var(--color-red);
      color: var(--color-mantle);
    }
  }

  &__home-btn a:last-child {
    margin-left: 5px;
  }

  &__home-btn a:first-child {
    margin-right: 10px;
  }

  &__home-btn a:first-child,
  &__nav a {
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.1rem;
    font-family: $font-mono;
    position: relative;
    z-index: 10;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-mantle);
    }

    &::after {
      content: "";
      position: absolute;
      background-color: var(--color-red);
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      transition: height 0.2s ease;
      z-index: -1;
    }

    &:hover::after {
      height: 100%;
    }
  }

  @media (min-width: $screen-medium) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: $content-medium;
  }

  @media (min-width: $screen-mediumpp) {
    width: $content-mediumpp;
  }

  @media (min-width: $screen-wide) {
    width: $content-wide;
  }

  @media (min-width: $screen-widepp) {
    width: $content-widepp;
  }
}

.header__nav {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  a::before {
    content: "/";
    color: var(--text-color);
  }

  a:hover::before {
    color: var(--color-mantle);
  }
}

.toggle-theme-btn {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: $text-lg;
  transition: color 0.2s ease;
  outline: none;
  transform: translateY(3px);

  &:hover {
    color: var(--color-red);
  }

  span {
    display: inline-flex;
  }
}
</style>
