<script setup lang="ts">
const { data: posts } = await useAsyncData(() =>
  queryCollection("posts").select("id", "createdOn", "path", "title").all(),
);

useSeoMeta({
  title: "Posts - Vo Quang Chien",
});
</script>

<template>
  <main class="posts">
    <TheTitle text="posts" />
    <ul class="main__list-posts">
      <li v-for="post in posts" :key="post.id">
        <span class="post-date">
          {{
            new Intl.DateTimeFormat("en-ca").format(new Date(post.createdOn))
          }}
        </span>
        <span class="hash">#</span>
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.main__list-posts {
  list-style: none;
}

.main__list-posts a {
  text-decoration: none;
  color: var(--text-0);
  margin-left: 1rem;
  transition: all 0.2s;
}

.main__list-posts a:hover {
  background-color: var(--accent-color);
}

.post-date {
  color: var(--text-1);
  margin-right: 1rem;
}

.main__list-posts .hash {
  color: var(--accent-color);
}
</style>