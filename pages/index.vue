<script setup lang="ts">
useSeoMeta({
  title: "Vo Quang Chien",
});

const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("posts")
    .select("id", "updatedOn", "title", "path")
    .order("updatedOn", "DESC")
    .limit(4)
    .all()
);
</script>

<template>
  <main class="main">
    <TheTitle text="welcome" />
    <p>
      My name is Vo Quang Chien, a passionate developer from Vietnam. I have a
      deep passion for full-stack web development, network programming, and
      system programming. I enjoy working with Linux, and building efficient
      applications. I also love ricing and tinkering!
    </p>
    <p>My primary languages are C++, Java and JavaScript.</p>
    <p>My editor is Neovim, and I do everything in the terminal.</p>

    <h2>recently updated posts</h2>
    <ul class="main__list-posts">
      <li v-for="post in posts" :key="post.id">
        <span class="post-date">
          {{
            new Intl.DateTimeFormat("en-ca").format(new Date(post.updatedOn))
          }}
        </span>
        <span class="hash">#</span>
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.main p:not(:first-child) {
  margin-top: 0.6rem;
}

h2 {
  margin-top: 1rem;
}

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
