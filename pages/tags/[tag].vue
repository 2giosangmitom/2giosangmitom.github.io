<script setup lang="ts">
const route = useRoute();

const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("posts")
    .select("tags", "createdOn", "title", "id", "path")
    .all()
);

const tag = route.params.tag as string;
const filteredPosts = posts.value?.filter((v) => v.tags.includes(tag));
</script>

<template>
  <section>
    <h1>Entries tagged :: {{ tag }}</h1>
    <ul>
      <li v-for="post in filteredPosts" :key="post.id">
        <span>
          {{
            new Intl.DateTimeFormat("en-ca").format(new Date(post.createdOn))
          }}
        </span>
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
