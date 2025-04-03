<script setup lang="ts">
defineProps<{
  date: Date;
  title: string;
  path: string;
  tags: string[];
}>();
</script>

<template>
  <div
    class="flex items-start gap-4 py-2 border-b dark:border-zinc-800 border-zinc-200"
  >
    <div class="text-gray-500 min-w-[90px]">
      {{
        dateFormat(date, "en-CA", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
      }}
    </div>

    <div class="text-accent font-bold w-5">#</div>

    <div class="flex flex-wrap justify-between items-center w-full">
      <ULink
        raw
        class="relative text-text-0 hover:text-accent transition-colors inline-block border-b-2 border-transparent hover:border-accent"
        :to="path"
      >
        {{ title }}
      </ULink>

      <div class="text-gray-500 text-sm">
        <span v-for="(tag, index) in tags" :key="index" class="mr-2">
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
