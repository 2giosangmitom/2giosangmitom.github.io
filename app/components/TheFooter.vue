<script setup lang="ts">
const socials = [
  { icon: 'lucide:github', href: 'https://github.com/2giosangmitom' },
  { icon: 'lucide:linkedin', href: 'https://www.linkedin.com/in/2giosangmitom' },
  { icon: 'lucide:youtube', href: 'https://www.youtube.com/@2giosangmitom' },
  { icon: 'lucide:facebook', href: 'https://www.facebook.com/2giosangmitom' }
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div>
        <p class="name">Vo Quang Chien</p>
        <p>🇻🇳 Based in Vietnam</p>
        <p class="copyright">&copy; 2025 Vo Quang Chien. All rights are reserved.</p>
      </div>
      <div>
        <p>Built with Nuxt.js, TypeScript, and TailwindCSS.</p>
        <p>Made with 🍜 and ❤️ at 2AM.</p>
        <div class="socials">
          <NuxtLink v-for="item in socials" :key="item.href" :to="item.href" target="_blank">
            <BaseButton :icon="item.icon" variant="soft" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.footer {
  background-color: variables.$color-surface;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .container {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    color: variables.$color-dimmed;

    @media screen and (min-width: variables.$screen-md) {
      flex-direction: row;
      justify-content: space-between;
    }

    > div {
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;

      @media screen and (min-width: variables.$screen-md) {
        &:last-child {
          align-items: flex-end;
        }
      }
    }

    > :first-child {
      .name {
        color: variables.$color-foreground;
        font-size: variables.$font-xl;
        font-weight: bold;
      }

      .copyright {
        color: variables.$color-foreground;
        font-size: variables.$font-sm;
      }
    }

    > :last-child {
      @media screen and (min-width: variables.$screen-md) {
        text-align: right;
      }
      
      .socials {
        display: inline-flex;
        column-gap: 1rem;

        button {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
