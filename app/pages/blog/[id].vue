<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first();
});

if (page.value) {
  useSeoMeta({
    title: page.value.title,
    description: page.value.description
  });
}
</script>

<template>
  <main v-if="page" class="container blog-details">
    <div class="blog-details__meta">
      <div class="blog-details__meta__item">
        <BaseBadge variant="subtle">
          <Icon name="mdi:calendar-blank" size="16" />
        </BaseBadge>
        <NuxtTime :datetime="page.createdOn" />
      </div>
      <div class="blog-details__meta__item">
        <BaseBadge variant="subtle">
          <Icon name="mdi:calendar-edit" size="16" />
        </BaseBadge>
        <NuxtTime :datetime="page.updatedOn" />
      </div>
      <div class="blog-details__meta__item">
        <BaseBadge variant="subtle">
          <Icon name="mdi:tag" size="16" />
        </BaseBadge>
        <NuxtLink v-for="tag in page.tags" :key="tag" :to="{ name: 'tags-id', params: { id: tag } }" class="btn--link">
          {{ tag }}
        </NuxtLink>
      </div>
    </div>
    <ContentRenderer :value="page" class="blog-details__content" />
  </main>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.blog-details {
  &__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 0.5rem;

    &__item {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      color: variables.$color-dimmed;
      font-size: variables.$font-sm;
    }
  }

  &__content {
    h1 {
      margin-bottom: 0.5rem;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 100%;
        background-color: variables.$color-primary;
      }
    }
    h2,
    h3 {
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
    }
  }
}
</style>
