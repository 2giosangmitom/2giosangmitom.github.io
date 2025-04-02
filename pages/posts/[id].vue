<script setup lang="ts">
const route = useRoute();
const postId = route.params.id as string;
const { data: post } = useAsyncData(postId, () =>
  queryCollection("posts").path(route.path).first()
);
</script>

<template>
  <div v-if="post">
    <TheTitle :text="post.title" />
    <div class="flex gap-x-4 items-center">
      <p>
        Posted on
        <span class="text-gray-500">
          {{
            new Intl.DateTimeFormat("en-ca").format(new Date(post.createdOn))
          }}
        </span>
      </p>
      <div class="text-accent">::</div>
      <div class="flex gap-2 items-center">
        <NuxtLink
          v-for="tag in post.tags"
          :key="tag"
          :to="{ name: 'tags-tag', params: { tag } }"
          class="inline-flex items-center relative before:transition-all before:absolute before:w-full before:h-0.5 before:bg-accent before:bottom-0 before:left-0 hover:before:h-full before:-z-10"
        >
          <Icon name="mdi:tag-text" class="mr-0.5" />{{ tag }}
        </NuxtLink>
      </div>
    </div>
    <LazyContentRenderer :value="post" />
    <p class="text-gray-500 mt-5 text-right">
      Last update:
      {{ new Intl.DateTimeFormat("en-ca").format(new Date(post.updatedOn)) }}
    </p>
  </div>
  <div v-else>Post not found</div>
</template>
