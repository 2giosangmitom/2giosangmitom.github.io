<script setup lang="ts">
const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const isOpen = ref(false);

function handleClickOutside(event: MouseEvent) {
  const sidebar = document.getElementById("sidebar");
  if (sidebar && !sidebar.contains(event.target as Node)) {
    isOpen.value = false;
  }
}

const toggleSidebarIcon = computed(
  () => (isOpen.value && "line-md:close") || "line-md:menu"
);

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <NuxtLink to="/">
    <h1 class="logo">2giosangmitom<span class="accent-dot">.</span></h1>
  </NuxtLink>
  <nav class="desktop-navigation">
    <NuxtLink
      v-for="item in links"
      :key="item.path"
      :to="item.path"
      :class="{ 'active-link': item.path === $route.path }"
    >
      {{ item.name }}
    </NuxtLink>
  </nav>
  <nav class="mobile-navigation" id="sidebar">
    <button
      class="nav-trigger"
      @click="isOpen = !isOpen"
      aria-label="Toggle Navigation"
      id="navTrigger"
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
    </div>
  </nav>
</template>

<style scoped>
.accent-dot {
  color: var(--accent);
}

a {
  text-decoration: none;
  text-transform: capitalize;
}

.desktop-navigation {
  display: none;
}

.mobile-navigation {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.nav-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
  background: none;
  border: none;
}

.nav-content {
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
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

.nav-content-open {
  transform: translateX(0);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
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

@media screen and (min-width: 640px) {
  .desktop-navigation {
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
