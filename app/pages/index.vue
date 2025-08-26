<script setup lang="ts">
useSeoMeta({
  title: 'Full stack developer'
});

const icons = [
  { name: 'mdi:language-cpp', label: null },
  { name: 'mdi:language-javascript', label: 'JavaScript' },
  { name: 'mdi:language-typescript', label: 'TypeScript' },
  { name: 'mdi:language-python', label: 'Python' },
  { name: 'simple-icons:express', label: 'Express' },
  { name: 'simple-icons:fastify', label: 'Fastify' },
  // { name: 'simple-icons:nestjs', label: 'NestJS' },
  { name: 'mdi:nuxt', label: 'Nuxt' },
  { name: 'mdi:vuejs', label: 'Vue' },
  { name: 'mdi:nodejs', label: 'Node.js' },
  { name: 'simple-icons:redis', label: 'Redis' },
  { name: 'simple-icons:postgresql', label: 'PostgreSQL' },
  { name: 'simple-icons:mysql', label: null },
  { name: 'mdi:docker', label: 'Docker' },
  { name: 'simple-icons:linux', label: 'Linux' },
  { name: 'simple-icons:prisma', label: 'Prisma' }
];

function handleTadaa(e: MouseEvent) {
  const target = e.currentTarget as HTMLSpanElement;
  target.classList.add('technologies__icon--tadaa');
  setTimeout(() => {
    target.classList.remove('technologies__icon--tadaa');
  }, 1000);
}
</script>

<template>
  <main class="container main-page">
    <!-- Author Section -->
    <section class="author">
      <NuxtImg
        src="/img/avt.png"
        format="webp"
        preload
        :placeholder="400"
        alt="Vo Quang Chien"
        width="400"
        height="400"
        class="author__avatar"
      />

      <div class="author__text">
        <BaseBadge class="author__badge">Full stack developer</BaseBadge>
        <h1 class="author__greeting font-bold">Yo! I&apos;m <span>Vo Quang Chien</span>.</h1>
        <p class="author__description">
          I enjoy developing projects that both functionally sound and artistic. Currently, I'm interesting in full
          stack development, seeking to improve my skills to provide as much as possible value.
        </p>
        <div class="author__actions">
          <NuxtLink to="/contact">
            <BaseButton icon="lucide:at-sign">Contact Me</BaseButton>
          </NuxtLink>
          <NuxtLink to="/blog">
            <BaseButton icon="lucide:pen-tool" variant="outline">Read My Blog</BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="technologies">
      <h2 class="technologies__title font-bold">Technologies I use</h2>
      <p class="technologies__description">
        Here are some programming languages, and frameworks that I use. I'm fully equipped to tackle complex software
        development challenges, crafting innovate solutions that drive business forward.
      </p>

      <div class="technologies__icons">
        <div v-for="(icon, index) in icons" :key="icon.name + index" class="technologies__icon" @click="handleTadaa">
          <Icon :name="icon.name" size="80" />
          <span v-if="icon.label">{{ icon.label }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.main-page {
  display: flex;
  flex-direction: column;
  row-gap: 12rem;
}

/* Author block */
.author {
  display: flex;
  flex-direction: column-reverse;
  row-gap: 6rem;

  @media screen and (min-width: variables.$screen-lg) {
    flex-direction: row;
    column-gap: 6rem;
  }

  &__text > :not(:first-child) {
    margin-top: 1rem;
  }

  &__greeting {
    font-size: variables.$font-3xl;
    line-height: 5rem;

    span {
      color: variables.$color-primary;
    }
  }

  &__description {
    margin-top: 1rem;
  }

  &__actions {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    button {
      cursor: pointer;
    }
  }

  &__avatar {
    border-radius: variables.$rounded-sm;
    align-self: center;
    max-width: 100%;
    height: auto;

    @media screen and (min-width: variables.$screen-lg) {
      align-self: flex-start;
    }
  }
}

/* Technologies block */
.technologies {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;

  &__title {
    font-size: variables.$font-2xl;
    color: variables.$color-primary;
    text-align: center;
  }

  &__description {
    text-align: center;

    @media screen and (min-width: variables.$screen-sm) {
      max-width: 80%;
    }
  }

  &__icons {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    gap: 4rem 6rem;

    @media screen and (min-width: variables.$screen-sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: variables.$screen-lg) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: variables.$screen-xl) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__icon {
    user-select: none;
    display: inline-flex;
    gap: 1rem;
    align-items: center;
    font-size: variables.$font-xl;
    font-weight: bold;
    transition: color 200ms ease;

    &:hover {
      color: variables.$color-primary;
    }

    &--tadaa {
      animation: 1s tadaa ease;
    }
  }
}
</style>
