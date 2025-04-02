<script setup lang="ts">
const route = useRoute();
const tag = route.params.tag as string;

const { data: posts } = await useAsyncData("all-posts", () =>
  queryCollection("posts")
    .select("id", "createdOn", "path", "title", "tags")
    .order("createdOn", "DESC")
    .all()
);

const filteredPosts = computed(() => {
  if (!posts.value) {
    return [];
  }
  return posts.value.filter((v) => v.tags.includes(tag));
});
</script>

<template>
  <div>
    <TheTitle :text="`Entries tagged :: ${tag}`" />

    <ul>
      <li v-for="post in filteredPosts" :key="post.id">
        <ThePost
          :date="new Date(post.createdOn)"
          :title="post.title"
          :path="post.path"
          :tags="post.tags"
        />
      </li>
    </ul>
  </div>
</template>
