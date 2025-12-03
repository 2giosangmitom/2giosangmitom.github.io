<script setup lang="ts">
const route = useRoute();

const [{ data: page, error: pageError }, { data: surround, error: surroundError }] = await Promise.all([
  useAsyncData(route.path, () => queryCollection('articles').path(route.path).first()),
  useAsyncData(`${route.path}-surround`, () =>
    queryCollectionItemSurroundings('articles', route.path, {
      fields: ['description']
    })
  )
]);

if (pageError.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found'
  });
}

if (surroundError.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Surrounding articles not found'
  });
}

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description
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
    <UPage v-if="page" class="mb-12">
      <!-- Metadata -->
      <div class="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-muted">
        <div class="inline-flex gap-x-2 items-center">
          <UBadge icon="mdi:calendar-blank" variant="soft" />
          <NuxtTime :datetime="page.pubDate" />
        </div>
        <div v-if="page.updatedDate" class="inline-flex gap-x-2 items-center">
          <UBadge icon="mdi:calendar-edit" variant="soft" />
          <NuxtTime :datetime="page.updatedDate" />
        </div>
        <div v-if="page.tags" class="inline-flex gap-x-2 items-center">
          <UBadge icon="mdi:tag-multiple" variant="soft" />
          <div>
            <span v-for="(tag, index) in page.tags" :key="tag">
              <ULink :to="{ name: 'tags-slug', params: { slug: tag } }">{{ tag }}</ULink>
              <span v-if="index < page.tags.length - 1">, </span>
            </span>
          </div>
        </div>
      </div>

      <!-- Content -->
      <ContentRenderer :value="page.body" />

      <!-- Share button -->
      <div class="flex justify-end items-center mt-12">
        <UButton
          variant="ghost"
          icon="lucide:link"
          color="neutral"
          class="cursor-pointer"
          size="sm"
          @click="handleCopyLink"
          >Copy link</UButton
        >
      </div>

      <USeparator class="my-12" />

      <!-- Surrounding articles -->
      <div v-if="surround">
        <UContentSurround :surround="surround" />
      </div>

      <!-- TOC -->
      <template v-if="page?.body?.toc?.links?.length" #right>
        <UContentToc :links="page.body.toc.links" highlight />
      </template>
    </UPage>
  </UContainer>
</template>
