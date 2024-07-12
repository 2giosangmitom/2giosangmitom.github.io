<script setup lang="ts">
const isOpen = ref(false);

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
];

const handleClickOutside = (event: MouseEvent) => {
  const sidebar = document.getElementById("sidebar");
  if (sidebar && !sidebar.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

useEventListener(document, "click", handleClickOutside);

const triggerIcon = computed(() =>
  isOpen.value ? "line-md:close-small" : "line-md:menu",
);
</script>

<template>
  <nav class="mobile-nav" id="sidebar">
    <span class="logo">2giosangmitom<span class="logo-dot">.</span></span>
    <button class="nav-trigger" @click="isOpen = !isOpen">
      <iconify-icon :icon="triggerIcon" class="iconify" />
    </button>
    <div class="nav-content" :class="{ 'nav-content-open': isOpen }">
      <NuxtLink class="logo" to="/" @click="isOpen = !isOpen">
        2giosangmitom<span class="logo-dot">.</span>
      </NuxtLink>
      <NuxtLink
        v-for="item in links"
        :key="item.path"
        :to="item.path"
        :class="{ 'active-route': $route.path === item.path }"
        @click="isOpen = !isOpen"
      >
        {{ item.name }}
      </NuxtLink>
      <ToggleTheme />
    </div>
  </nav>

  <nav class="desktop-nav">
    <NuxtLink class="logo" to="/">
      2giosangmitom<span class="logo-dot">.</span>
    </NuxtLink>
    <div>
      <NuxtLink
        v-for="item in links"
        :key="item.path"
        :to="item.path"
        :class="{ 'active-route': $route.path === item.path }"
        @click="isOpen = !isOpen"
      >
        {{ item.name }}
      </NuxtLink>
      <ToggleTheme />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.logo {
  font-size: 1.25rem;
  color: var(--foreground);
}

.logo-dot {
  font-size: 1.2rem;
  color: var(--accent);
}

.desktop-nav {
  display: none;
}

.toggle-theme {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 1rem;
  margin-right: 1rem;
}

.mobile-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .active-route {
    color: var(--accent);
    text-decoration: underline solid 2px;
    text-underline-offset: 0.2em;
    font-weight: bold;
  }
}

.nav-trigger {
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem;
  margin-right: -0.1rem;
  background: none;
  border: 1px solid var(--accent);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  outline: none;

  &:hover {
    background-color: var(--accent);

    .iconify {
      color: var(--background-overlay);
    }
  }

  .iconify {
    font-size: 1.25rem;
    color: var(--foreground);
    transition: all 0.2s ease-in;
  }
}

.nav-content {
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(100%);
  width: 80%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 10;
  overflow-y: auto;
  transition: transform 0.3s ease;
  background-color: var(--background-overlay);

  a {
    color: var(--foreground);
    text-decoration: none;
    transition: all 0.2s ease-in;

    &:not(:first-child) {
      margin-top: 0.2rem;
      font-size: 1.25rem;
    }

    &:hover:not(:first-child) {
      color: var(--accent);
    }
  }

  .logo {
    margin-top: 5rem;
    font-size: 1.5rem;
  }
}

.nav-content-open {
  transform: translateX(0);
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 720px) {
  .mobile-nav {
    display: none;
  }

  .toggle-theme {
    margin: 0;
    position: unset;
  }

  .desktop-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      a {
        color: var(--foreground);
        text-decoration: none;
        transition: all 0.2s ease-in;

        &:hover {
          color: var(--accent);
        }
      }
    }

    .active-route {
      color: var(--accent);
      text-decoration: underline solid 2px;
      text-underline-offset: 0.2em;
      font-weight: bold;
    }
  }

  .logo {
    text-decoration: none;
  }
}
</style>
