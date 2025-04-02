<script setup lang="ts">
const route = useRoute();
const postId = route.params.id as string;
const { data: post } = await useAsyncData(postId, () =>
  queryCollection("posts").path(route.path).first()
);

if (post.value) {
  useSeoMeta(post.value.seo);
} else {
  useSeoMeta({
    title: "404 Not Found",
  });
}
</script>

<template>
  <div v-if="post">
    <TheTitle :text="post.title" class="mb-2" />
    <div class="flex gap-x-4 items-center mb-5 text-gray-500">
      <p>
        Posted on
        <span class="underline decoration-dotted">{{
          dateFormat(new Date(post.createdOn), "en-CA", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })
        }}</span>
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
    <ContentRenderer :value="post" :prose="true" />
    <p class="text-gray-500 mt-5 text-right">
      Last update:
      {{ new Intl.DateTimeFormat("en-ca").format(new Date(post.updatedOn)) }}
    </p>
  </div>
  <div v-else>
    <div class="text-center">
      <h1 class="text-3xl mb-4">Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <UButton to="/" class="mt-2 bg-accent hover:bg-red-400"
        >Go back home</UButton
      >
    </div>
  </div>
</template>
