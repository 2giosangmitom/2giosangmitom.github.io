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
  <main>
    <TheTitle :text="`Entries tagged :: ${tag}`" />
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
  </main>
</template>
