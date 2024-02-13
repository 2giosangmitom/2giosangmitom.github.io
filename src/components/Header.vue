<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Transition } from "vue";
import gsap from "gsap";

const views = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];
if (window.innerWidth <= 640) {
  views.splice(0, 0, { name: "Home", path: "/" });
}
</script>

<template>
  <Transition
    appear
    @enter="
      (e) => {
        gsap.from(e, {
          opacity: 0,
          duration: 1,
          ease: 'elastic.inOut',
          y: -100,
        });
      }
    "
  >
    <header class="header">
      <RouterLink to="/" class="header__link">
        <span class="header__logo">2giosangmitom</span>
      </RouterLink>

      <div class="header__nav">
        <RouterLink
          :to="path"
          class="header__link"
          v-for="{ name, path } in views"
        >
          <span>{{ name }}</span>
        </RouterLink>
      </div>
    </header>
  </Transition>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav {
  font-size: 1.05rem;
}

.header__link {
  text-decoration: none;
  color: var(--neutral-white);
}

.header__logo {
  font-size: 1.2rem;
  user-select: none;
}

.header__nav > a {
  margin: 0 1.25rem;
}

.header__logo:hover,
.header__link:hover {
  opacity: 0.9;
  cursor: pointer;
  transition-duration: 300ms;
}

@media (max-width: 1024px) {
  .header__nav {
    font-size: 1rem;
  }

  .header__logo {
    font-size: 1.1rem;
  }
}

@media (max-width: 640px) {
  .header {
    justify-content: center;
  }

  .header__nav > a {
    margin: 0 0.5rem;
  }

  .header > a {
    display: none;
  }
}
</style>
