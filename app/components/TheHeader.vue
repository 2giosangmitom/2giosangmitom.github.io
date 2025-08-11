<script setup lang="ts">
type NavigationItem = {
  icon: string;
  href: string;
  name: string;
};

const navigations: NavigationItem[] = [
  { icon: 'material-symbols:person', href: '/about', name: 'About' },
  { icon: 'icomoon-free:blog', href: '/blog', name: 'Blog' },
  { icon: 'lucide:tag', href: '/tags', name: 'Tags' },
  { icon: 'mdi:email', href: '/contact', name: 'Contact' }
];

const isOpen = ref(false);
const searchModalOpen = useState('search-modal', () => false);

const toggleSearchModal = () => (searchModalOpen.value = !searchModalOpen.value);
const openMobileNav = () => (isOpen.value = true);
const closeMobileNav = () => (isOpen.value = false);
</script>

<template>
  <header class="header container">
    <NuxtLink to="/" class="btn--link">2giosangmitom</NuxtLink>

    <div class="header__navigation">
      <!-- Desktop navigation -->
      <nav class="header__navigation__desktop">
        <NuxtLink v-for="item in navigations" :key="item.href" class="btn--link" :to="item.href">
          {{ item.name }}
        </NuxtLink>
      </nav>

      <BaseButton icon="lucide:search" variant="soft" @click="toggleSearchModal" />

      <!-- Mobile navigation -->
      <nav class="header__navigation__mobile">
        <BaseButton
          icon="lucide:menu"
          class="header__navigation__mobile__open"
          variant="subtle"
          @click="openMobileNav"
        />

        <Transition name="slide">
          <div v-show="isOpen" class="header__navigation__mobile__list">
            <BaseButton
              icon="lucide:x"
              class="header__navigation__mobile__list__close"
              variant="subtle"
              @click="closeMobileNav"
            />
            <NuxtLink
              v-for="item in navigations"
              :key="item.href"
              :to="item.href"
              class="header__navigation__mobile__list__item"
              @click="closeMobileNav"
            >
              <BaseButton :icon="item.icon" variant="soft">
                {{ item.name }}
              </BaseButton>
            </NuxtLink>
          </div>
        </Transition>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@use '~/assets/scss/variables' as v;

.header {
  padding-block: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: v.$font-lg;

  &__navigation {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    &__desktop {
      display: none;
      align-items: center;
      column-gap: 1rem;

      @media (min-width: v.$screen-sm) {
        display: flex;
      }
    }

    &__mobile {
      @media (min-width: v.$screen-sm) {
        display: none;
      }

      &__list {
        position: fixed;
        z-index: 10;
        inset: 0;
        background-color: v.$color-surface;
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        overflow-x: hidden;

        &__item {
          width: 100%;
          text-decoration: none;

          button {
            width: 100%;
            justify-content: flex-start;
            padding: 1rem;
          }
        }

        &__close {
          position: fixed;
          top: 2rem;
          right: 1rem;
        }
      }
    }
  }
}
</style>
