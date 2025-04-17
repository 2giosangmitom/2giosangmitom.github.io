<script setup lang="ts">
defineProps<{
  date: Date;
  title: string;
  path: string;
  tags: string[];
}>();
</script>

<template>
  <NuxtLink :to="path" class="post">
    <span class="post__date">
      {{
        dateFormat(date, "en-CA", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
      }}
    </span>
    <div class="post__header">
      <h2 class="post__title">{{ title }}</h2>
      <div class="post__tags">
        <span v-for="tag in tags" :key="tag" class="post__tag">{{ tag }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--text-color);
  padding: 1rem 1.25rem;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  border-radius: 8px;
  gap: 5px;

  &:hover {
    background-color: rgb(var(--color-mauve), 0.05);
  }

  &__date {
    color: var(--text-color);
    font-size: $text-sm;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (min-width: $screen-wide) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__title {
    font-size: $text-md;
    color: rgb(var(--color-pink));
    transition: color 0.3s ease;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;

    @media (min-width: $screen-wide) {
      margin-top: 0;
    }
  }

  &__tag {
    background-color: rgba(var(--color-pink), 0.15);
    color: rgb(var(--color-pink));
    font-size: 0.75rem;
    font-family: $font-mono;
    padding: 0.2rem 0.6rem;
    border-radius: 9999px;
  }
}
</style>
