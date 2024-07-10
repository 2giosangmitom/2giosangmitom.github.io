<script setup lang="ts">
const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const isOpen = ref(false);

const handleClickOutside = (event: MouseEvent) => {
  const sidebar = document.getElementById("sidebar");
  if (sidebar && !sidebar.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

const toggleSidebarIcon = computed(() =>
  isOpen.value ? "line-md:close" : "line-md:menu"
);

useEventListener(document, "click", handleClickOutside);
</script>

<template>
  <nav class="desktop-navigation">
    <NuxtLink to="/" class="brand">
      <h1 class="logo">2giosangmitom<span class="accent-dot">.</span></h1>
    </NuxtLink>
    <div class="desktop-navigator">
      <NuxtLink
        v-for="item in links"
        :key="item.path"
        :to="item.path"
        :class="{ 'active-link': item.path === $route.path }"
      >
        {{ item.name }}
      </NuxtLink>
      <ToggleTheme />
    </div>
  </nav>
  <nav class="mobile-navigation" id="sidebar">
    <NuxtLink to="/" class="brand">
      <h1 class="logo">2giosangmitom<span class="accent-dot">.</span></h1>
    </NuxtLink>
    <button
      class="nav-trigger"
      @click="isOpen = !isOpen"
      aria-label="Toggle Navigation"
    >
      <iconify-icon
        :icon="toggleSidebarIcon"
        style="font-size: 1.75rem; color: var(--accent)"
      />
    </button>
    <div class="nav-content" :class="{ 'nav-content-open': isOpen }">
      <NuxtLink to="/" @click="isOpen = false">
        <h1 class="logo">2giosangmitom<span class="accent-dot">.</span></h1>
      </NuxtLink>
      <NuxtLink
        v-for="item in links"
        :key="item.path"
        :to="item.path"
        :class="{ 'active-link': item.path === $route.path }"
        @click="isOpen = false"
      >
        {{ item.name }}
      </NuxtLink>
      <ToggleTheme />
    </div>
  </nav>
</template>

<style scoped>
* {
  font-family: "JetBrainsMono", monospace;
  font-weight: 500;
  font-style: normal;
}

.accent-dot {
  color: var(--accent);
}

a {
  text-decoration: none;
  text-transform: capitalize;
}

h1 {
  font-size: 1.5rem;
}

.desktop-navigation {
  display: none;
}

.mobile-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.nav-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
  background: none;
  border: none;
  padding: 5px;
}

.nav-content {
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 10;
  overflow-y: auto;
  background-color: var(--background-overlay);
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.nav-content button {
  position: fixed;
  bottom: 0;
  margin-bottom: 20px;
  right: 0;
  margin-right: 20px;
  padding: 10px;
}

.nav-content-open {
  transform: translateX(0);
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 0.1);
}

.nav-content a {
  margin-top: 1.5rem;
  font-size: 1.25rem;
}

.nav-content a:first-child {
  margin-top: 4rem;
}

.mobile-navigation .active-link {
  color: var(--accent);
  text-decoration: underline solid 2px;
  text-underline-offset: 0.2em;
  font-weight: bold;
}

@media screen and (min-width: 840px) {
  .desktop-navigation {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .desktop-navigator {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .desktop-navigation a {
    transition: all 0.2s ease-in;
  }

  .desktop-navigation .active-link {
    color: var(--accent);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.2em;
    font-weight: bold;
  }

  .desktop-navigation a:hover {
    color: var(--accent);
  }

  .mobile-navigation {
    display: none;
  }
}
</style>
