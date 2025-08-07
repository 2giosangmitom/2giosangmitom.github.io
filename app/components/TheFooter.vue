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
  background-color: variables.$color-secondary;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .container {
    display: flex;
    justify-content: space-between;
    color: variables.$color-dimmed;

    > div {
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;

      &:last-child {
        align-items: flex-end;
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
      text-align: right;

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
