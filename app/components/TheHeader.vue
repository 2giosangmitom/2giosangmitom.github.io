<script setup lang="ts">
const navigations = [
  { icon: 'material-symbols:person', href: '/about', name: 'About' },
  { icon: 'icomoon-free:blog', href: '/blog', name: 'Blog' },
  { icon: 'lucide:tag', href: '/tags', name: 'Tags' },
  { icon: 'mdi:email', href: '/contact', name: 'Contact' }
];

const isOpen = ref(false);
const toggleIcon = computed(() => {
  if (isOpen.value) {
    return 'lucide:x';
  }
  return 'lucide:menu';
});
</script>

<template>
  <header class="header container">
    <NuxtLink to="/" class="btn--link">2giosangmitom</NuxtLink>

    <div class="header__navigation">
      <!-- Desktop navigation -->
      <nav class="header__navigation__desktop">
        <NuxtLink v-for="item in navigations" :key="item.href" class="btn--link" :to="item.href">{{
          item.name
        }}</NuxtLink>
      </nav>

      <BaseButton icon="lucide:search" variant="soft" />

      <nav class="header__navigation__mobile">
        <BaseButton
          :icon="toggleIcon"
          class="header__navigation__mobile__toggle"
          variant="subtle"
          @click="isOpen = !isOpen"
        />

        <Transition name="slide">
          <div v-show="isOpen" class="header__navigation__mobile__list">
            <NuxtLink
              v-for="item in navigations"
              :key="item.href"
              :to="item.href"
              class="header__navigation__mobile__list__item"
              @click="isOpen = false"
            >
              <BaseButton :icon="item.icon" variant="soft">{{ item.name }}</BaseButton>
            </NuxtLink>
          </div>
        </Transition>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.slide-enter-active,
.slide-leave-active {
  transition:
    transform 400ms cubic-bezier(0.19, 0.83, 0.38, 0.91),
    opacity 400ms cubic-bezier(0.19, 0.83, 0.38, 0.91);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0%);
}

.header {
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: variables.$font-lg;

  &__navigation {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    &__desktop {
      align-items: center;
      column-gap: 1rem;
      display: none;

      @media screen and (min-width: variables.$screen-sm) {
        display: flex;
      }
    }

    &__mobile {
      &__toggle {
        position: relative;
        z-index: 20;
      }

      &__list {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        background-color: variables.$color-surface;
        height: 100vh;
        width: 100%;
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &__item {
          width: 100%;
          text-decoration: none;

          button {
            width: 100%;
            justify-content: flex-start;
            padding: 1rem 1rem;
          }
        }
      }

      @media screen and (min-width: variables.$screen-sm) {
        display: none;
      }
    }
  }
}
</style>
