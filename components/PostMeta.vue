<script setup lang="ts">
defineProps<{
  createdOn: Date;
  tags: string[];
}>();
</script>

<template>
  <div class="flex gap-x-4 items-center mb-5 text-gray-500">
    <p>
      Posted on
      <span class="underline decoration-dotted">{{
        dateFormat(new Date(createdOn), "en-CA", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
      }}</span>
    </p>
    <div class="text-accent">::</div>
    <div class="flex gap-2 items-center">
      <NuxtLink
        v-for="tag in tags"
        :key="tag"
        :to="{ name: 'tags-tag', params: { tag } }"
        class="inline-flex items-center relative before:transition-all before:absolute before:w-full before:h-0.5 before:bg-accent before:bottom-0 before:left-0 hover:before:h-full before:-z-10 hover:text-black"
      >
        <Icon name="mdi:tag-text" class="mr-0.5" />{{ tag }}
      </NuxtLink>
    </div>
  </div>
</template>
