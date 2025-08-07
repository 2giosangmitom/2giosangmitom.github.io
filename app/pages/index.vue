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
  { name: 'simple-icons:nestjs', label: 'NestJS' },
  { name: 'mdi:nuxt', label: 'Nuxt' },
  { name: 'mdi:vuejs', label: 'Vue' },
  { name: 'mdi:nodejs', label: 'Node.js' },
  { name: 'simple-icons:redis', label: 'Redis' },
  { name: 'simple-icons:postgresql', label: 'PostgreSQL' },
  { name: 'simple-icons:mysql', label: null },
  { name: 'mdi:docker', label: 'Docker' },
  { name: 'simple-icons:linux', label: 'Linux' }
];

const iconsRef = useTemplateRef<HTMLDivElement>('tech-icons');
onMounted(() => {
  if (iconsRef.value) {
    const childs = iconsRef.value.childNodes as NodeListOf<HTMLDivElement>;
    childs.forEach((element) => {
      element.addEventListener('click', () => {
        element.classList.add('spinning');

        setTimeout(() => {
          element.classList.remove('spinning');
        }, 200);
      });
    });
  }
});
</script>

<template>
  <main class="container main-page">
    <section class="main-page__author">
      <NuxtImg
        src="/img/avt.png"
        format="webp"
        preload
        :placeholder="400"
        alt="Vo Quang Chien"
        width="400"
        height="400"
        class="avt"
      />

      <div class="main-page__author__text">
        <BaseBadge>Full stack developer</BaseBadge>
        <h1 class="greeting font-bold">Yo! I&apos;m <span>Vo Quang Chien</span>.</h1>
        <p class="description">
          I enjoy developing projects that both functionally sound and artistic. Currently, I'm interesting in full
          stack development, seeking to improve my skills to provide as much as possible value.
        </p>
        <div class="actions">
          <NuxtLink to="/contact">
            <BaseButton icon="lucide:at-sign">Contact Me</BaseButton>
          </NuxtLink>
          <NuxtLink to="/blog">
            <BaseButton icon="lucide:pen-tool" variant="outline">Read My Blog</BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="technologies">
      <h2 class="title font-bold">Technologies I use</h2>
      <p class="description">
        Here are some programming languages, and frameworks that I use. I'm fully equipped to tackle complex software
        development challenges, crafting innovate solutions that drive business forward.
      </p>

      <div ref="tech-icons" class="icons">
        <div v-for="(icon, index) in icons" :key="icon.name + index" class="icon-item">
          <Icon :name="icon.name" size="80" />
          <span v-if="icon.label">{{ icon.label }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

section .title {
  font-size: variables.$font-2xl;
  color: variables.$color-primary;
  text-align: center;
}

.main-page {
  display: flex;
  flex-direction: column;
  row-gap: 12rem;

  &__author {
    display: flex;
    column-gap: 6rem;

    &__text {
      > :not(:first-child) {
        margin-top: 1rem;
      }

      .greeting {
        font-size: variables.$font-4xl;
        line-height: 5rem;

        span {
          color: variables.$color-primary;
        }
      }
      .actions {
        display: flex;
        align-items: center;
        column-gap: 1rem;

        button {
          cursor: pointer;
        }
      }
    }

    .avt {
      border-radius: variables.$rounded-sm;
    }
  }

  .technologies {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;

    .description {
      text-align: center;
      max-width: 70%;
    }

    .icons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      place-items: center;
      gap: 4rem 6rem;

      .icon-item {
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

        &.spinning {
          animation: 200ms spin ease-out;
        }
      }
    }
  }
}
</style>
