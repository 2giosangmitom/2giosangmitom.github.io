<script setup lang="ts">
defineProps<{
  createdOn: string;
  tags: string[];
}>();
</script>

<template>
  <div class="post-info">
    <div class="post-info__date">
      {{
        dateFormat(new Date(createdOn), "en-CA", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
      }}
    </div>
    <span class="post-info-sep">::</span>
    <div class="post-info__tags">
      <NuxtLink
        v-for="tag of tags"
        :key="tag"
        :to="{ name: 'tags-tag', params: { tag } }"
        >{{ tag }}</NuxtLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-info {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: $text-md;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  &__tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    a {
      color: var(--text-color);
      text-decoration: none;
      transition: color 0.1s ease;
      position: relative;
      word-break: break-word;

      &:hover {
        color: var(--color-mantle);
      }

      &::after {
        content: "";
        background-color: var(--color-red);
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        cursor: pointer;
        z-index: -10;
        transition: height 0.1s ease;
      }

      &:hover::after {
        height: 100%;
      }
    }
  }
}

.post-info-sep {
  color: var(--color-sapphire);
}
</style>
