<script setup lang="ts">
import { motion } from 'motion-v';

const route = useRoute();
const path = withoutTrailingSlashes(route.path);

const [{ data: page, error: pageError }, { data: surround, error: surroundError }] = await Promise.all([
  useAsyncData(path, () => queryCollection('articles').path(path).first()),
  useAsyncData(`${path}-surround`, () =>
    queryCollectionItemSurroundings('articles', path, {
      fields: ['description']
    })
  )
]);

if (pageError.value || !page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found'
  });
}

if (surroundError.value || !surround.value) {
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
  <motion.main
    :initial="{ opacity: 0, y: 16 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.45, ease: 'easeOut' }"
  >
    <UContainer>
      <UPage v-if="page" class="mb-12">
        <UPageBody>
          <!-- Metadata -->
          <motion.div
            class="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-muted"
            :initial="{ opacity: 0, y: 10 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.3, ease: 'easeOut', delay: 0.08 }"
          >
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
          </motion.div>

          <!-- Content -->
          <motion.div
            :initial="{ opacity: 0, y: 14 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.35, ease: 'easeOut', delay: 0.12 }"
          >
            <ContentRenderer :value="page" />
          </motion.div>

          <!-- Share button -->
          <motion.div
            class="flex justify-end items-center mt-12"
            :initial="{ opacity: 0, y: 8 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, amount: 0.8 }"
            :transition="{ duration: 0.3, ease: 'easeOut' }"
          >
            <UButton
              variant="ghost"
              icon="lucide:link"
              color="neutral"
              class="cursor-pointer"
              size="sm"
              @click="handleCopyLink"
              >Copy link</UButton
            >
          </motion.div>

          <USeparator class="my-12" />

          <!-- Surrounding articles -->
          <motion.div
            v-if="surround"
            :initial="{ opacity: 0, y: 14 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, amount: 0.3 }"
            :transition="{ duration: 0.35, ease: 'easeOut' }"
          >
            <UContentSurround :surround="surround" />
          </motion.div>
        </UPageBody>

        <!-- TOC -->
        <template v-if="page?.body?.toc?.links?.length" #right>
          <UContentToc :links="page.body.toc.links" highlight />
        </template>
      </UPage>
    </UContainer>
  </motion.main>
</template>
