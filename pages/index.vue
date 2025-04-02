<script setup lang="ts">
useSeoMeta({
  title: "Vo Quang Chien",
  ogTitle: "Vo Quang Chien",
  description:
    "This is the blog of Vo Quang Chien, a passionate full-stack developer from Vietnam.",
  ogDescription:
    "This is the blog of Vo Quang Chien, a passionate full-stack developer from Vietnam.",
});

const { data: posts } = await useAsyncData("recently-updated-posts", () =>
  queryCollection("posts")
    .select("id", "updatedOn", "title", "path")
    .order("updatedOn", "DESC")
    .limit(4)
    .all()
);
</script>

<template>
  <div>
    <TheTitle text="welcome" class="mb-2" />
    <p>
      My name is
      <ULink
        raw
        to="/about"
        class="underline decoration-dotted transition-colors hover:text-accent"
        >Vo Quang Chien</ULink
      >, a passionate developer from Vietnam. I have a deep passion for
      full-stack web development, network programming, and system programming. I
      enjoy working with Linux, and building high-performance systems. I also
      love ricing and tinkering!
    </p>

    <h2 class="text-2xl mt-4">recently updated posts</h2>
    <ul class="mt-2">
      <li v-for="post in posts" :key="post.id">
        <ThePost
          :date="new Date(post.updatedOn)"
          :title="post.title"
          :path="post.path"
        />
      </li>
    </ul>
  </div>
</template>
