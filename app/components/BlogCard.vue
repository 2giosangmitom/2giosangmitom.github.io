<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  createdOn: string;
  tags: string[];
  path: string;
}>();
</script>

<template>
  <div class="blog-card">
    <NuxtTime class="blog-card__time" :datetime="createdOn" year="numeric" month="long" day="numeric" />
    <h3 class="blog-card__title">{{ title }}</h3>
    <p class="blog-card__desc">{{ description }}</p>
    <div class="blog-card__footer">
      <NuxtLink :to="path" class="blog-card__footer__read-btn btn--link">
        Read more
      </NuxtLink>
      <div class="blog-card__footer__tags">
        <NuxtLink v-for="tag in tags" :key="tag" :to="{ name: 'tags-id', params: { id: tag } }">
          <BaseBadge variant="outline">#{{ tag }}</BaseBadge>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.blog-card {
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;

  &__time {
    font-size: variables.$font-sm;
  }

  &__title {
    color: variables.$color-primary;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__read-btn {
      button {
        cursor: pointer;
      }
    }

    &__tags {
      display: flex;
      column-gap: 0.5rem;

      a {
        text-decoration: none;
        color: variables.$color-primary;
      }
    }
  }
}
</style>
