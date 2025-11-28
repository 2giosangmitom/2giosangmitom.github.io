<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.path, () => queryCollection('articles').path(route.path).first());

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
  ogTitle: data.value?.title,
  ogDescription: data.value?.description
});

const handleCopyLink = () => {
  const clipboard = useClipboard();
  const toast = useToast();

  clipboard.copy(window.location.href);

  toast.add({
    title: 'Success',
    description: 'The article link has been copied successfully.',
    color: 'success'
  });
};
</script>

<template>
  <UContainer>
    <!-- Metadata -->
    <div v-if="data">
      <div class="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-muted">
        <div class="inline-flex gap-x-2 items-center">
          <UBadge icon="mdi:calendar-blank" variant="soft" />
          <NuxtTime :datetime="data.pubDate" />
        </div>
        <div v-if="data.updatedDate" class="inline-flex gap-x-2 items-center">
          <UBadge icon="mdi:calendar-edit" variant="soft" />
          <NuxtTime :datetime="data.updatedDate" />
        </div>
        <div v-if="data.tags" class="inline-flex gap-x-2 items-center">
          <UBadge icon="mdi:tag-multiple" variant="soft" />
          <div>
            <span v-for="(tag, index) in data.tags" :key="tag">
              <ULink :to="{ name: 'tags-slug', params: { slug: tag } }">{{ tag }}</ULink>
              <span v-if="index < data.tags.length - 1">, </span>
            </span>
          </div>
        </div>
      </div>

      <!-- Content -->
      <ContentRenderer :value="data.body" />

      <!-- Share button -->
      <UButton
        variant="link"
        icon="lucide:link"
        color="neutral"
        class="float-right cursor-pointer"
        size="sm"
        @click="handleCopyLink"
        >Copy link</UButton
      >
    </div>
  </UContainer>
</template>
