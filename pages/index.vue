<script setup lang="ts">
useSeoMeta({
  title: "Vo Quang Chien",
});

const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("posts")
    .select("id", "updatedOn", "title", "path")
    .order("updatedOn", "DESC")
    .limit(10)
    .all(),
);
</script>

<template>
  <main class="main">
    <h1>Welcome!</h1>
    <p>
      My name is Võ Quang Chiến, a passionate developer from Vietnam. I have a
      deep passion for full-stack web development, network programming, and
      system programming. I enjoy working with Linux, and building efficient
      applications. I also love ricing and tinkering!
    </p>
    <p>My primary languages are C++, Java and JavaScript.</p>
    <p>My editor is Neovim, and I do everything in the terminal.</p>

    <div>
      <h2>Recently updated</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <span>
            {{
              new Intl.DateTimeFormat("en-ca").format(new Date(post.updatedOn))
            }}
          </span>
          <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>
