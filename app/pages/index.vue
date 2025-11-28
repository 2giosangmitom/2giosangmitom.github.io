<script setup lang="ts">
useSeoMeta({
  title: 'Software Engineer - Vo Quang Chien',
  description:
    'Welcome to the personal website of Vo Quang Chien, a passionate software engineer specializing in web development and technology solutions.',
  ogTitle: 'Software Engineer - Vo Quang Chien',
  ogDescription:
    'Welcome to the personal website of Vo Quang Chien, a passionate software engineer specializing in web development and technology solutions.'
});

const techStacks = [
  'logos:nuxt-icon',
  'devicon:vuejs',
  'logos:nodejs-icon',
  'logos:fastify-icon',
  'logos:nestjs',
  'logos:python',
  'logos:typescript-icon',
  'logos:prisma',
  'devicon:express'
];

const { data } = await useAsyncData('latest-articles-home', () => {
  const articles = queryCollection('articles').order('pubDate', 'DESC');

  if (import.meta.env.PROD) {
    articles.where('draft', '<>', true);
  }

  return articles.limit(3).all();
});
</script>

<template>
  <UContainer as="main" class="space-y-36">
    <!-- Introduction -->
    <section class="flex flex-col-reverse gap-y-14 lg:flex-row lg:gap-y-0 lg:gap-x-10 xl:gap-x-24">
      <NuxtImg
        src="/images/avt.png"
        sizes="100vw sm:70vw md:400px"
        alt="Vo Quang Chien"
        class="max-w-full h-auto self-center rounded"
      />

      <div class="space-y-4">
        <h1 class="text-6xl font-bold">Software Engineer and <span class="text-primary">Vue.js</span> enthusiast.</h1>
        <p class="leading-6">
          I&apos;m Chien, a Software Engineer with a focus on fullstack web development. I love building things with
          Vue.js, Node.js and TypeScript. I enjoy learning new technologies and sharing my knowledge with the community.
          Currently, I&apos;m expanding my abilities in <span class="text-primary">AI applications development</span>,
          and <span class="text-primary">Web3 technology</span>.
        </p>
        <div class="space-x-4">
          <UButton icon="lucide:at-sign" to="/contact">Contact Me</UButton>
          <UButton icon="lucide:pen-tool" variant="outline" to="/articles">Read Articles</UButton>
        </div>
      </div>
    </section>

    <!-- Tech Stacks -->
    <section>
      <ClientOnly>
        <UMarquee>
          <UIcon v-for="tech in techStacks" :key="tech" :name="tech" class="size-16 shrink-0 fill-current" mode="svg" />
        </UMarquee>
      </ClientOnly>
    </section>

    <!-- Latest Articles -->
    <section>
      <h2 class="text-2xl font-bold text-center">Latest Articles</h2>

      <UBlogPosts orientation="horizontal" class="mt-12">
        <UBlogPost
          v-for="article in data"
          :key="article.id"
          :title="article.title"
          :description="article.description"
          :date="article.pubDate"
          :to="article.path"
          variant="outline"
        >
          <template v-if="article.tags" #footer>
            <div class="space-x-4 float-right mr-4 mb-4">
              <UBadge v-for="tag in article.tags" :key="tag" variant="soft">{{ tag }}</UBadge>
            </div>
          </template>
        </UBlogPost>
      </UBlogPosts>
    </section>
  </UContainer>
</template>
