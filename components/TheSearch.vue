<script setup lang="ts">
const { data: surround } = await useAsyncData("surround", () =>
  queryCollectionSearchSections("posts", {
    ignoredTags: ["pre"]
  })
);

const router = useRouter();
const input = ref<string>("");
const inputRef = useTemplateRef("input-box");
const filteredList = ref<typeof surround.value>([]);
const selectedIndex = ref<number>(-1);
const pageSize = 5;
const page = ref<number>(1);
const emit = defineEmits(["close-modal"]);

const pagedResults = computed(() => {
  return filteredList.value?.slice((page.value - 1) * pageSize, page.value * pageSize);
});
const totalPages = computed(() => {
  return Math.ceil((filteredList.value?.length || 0) / pageSize);
});

const handleInput = () => {
  filteredList.value =
    surround.value?.filter((v) => {
      return v.content.toLowerCase().includes(input.value.toLocaleLowerCase());
    }) || [];
};

const handleKeymap = (e: KeyboardEvent) => {
  if (e.ctrlKey && e.key === "h") {
    e.preventDefault();
    if (page.value > 1) {
      page.value--;
    }
  }

  if (e.ctrlKey && e.key === "l") {
    e.preventDefault();
    if (page.value < totalPages.value) {
      page.value++;
    }
  }

  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    if (selectedIndex.value > 0) {
      selectedIndex.value--;
    }
  }

  if (e.ctrlKey && e.key === "j") {
    e.preventDefault();
    if (selectedIndex.value < (pagedResults.value?.length || 0) - 1) {
      selectedIndex.value++;
    }
  }

  if (e.key === "Enter") {
    e.preventDefault();
    const item = pagedResults.value?.[selectedIndex.value];
    if (item) {
      router.push(item.id);
      emit("close-modal");
    }
  }
};

watch([input, page], () => {
  selectedIndex.value = 0;
});

onMounted(() => {
  inputRef.value?.focus();

  window.addEventListener("keydown", handleKeymap);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeymap);
});
</script>

<template>
  <div class="search-overlay" @click.self="emit('close-modal')">
    <div class="search-modal">
      <div class="search-modal__content">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <input
          ref="input-box"
          v-model="input"
          type="text"
          class="search-modal__input"
          placeholder="Search"
          @input="handleInput"
        />

        <div v-if="input.length === 0" class="tip-message">
          <span>Shortcuts:</span>
          <ul>
            <li><kbd>Ctrl</kbd> + <kbd>K</kbd> - Open modal</li>
            <li><kbd>Esc</kbd> - Close modal</li>
            <li><kbd>Ctrl</kbd> + <kbd>J</kbd> / <kbd>K</kbd> - Move down/up</li>
            <li><kbd>Ctrl</kbd> + <kbd>H</kbd> / <kbd>L</kbd> - Move prev/next page</li>
            <li><kbd>Enter</kbd> - Select item</li>
          </ul>
        </div>
        <div v-else class="search-results">
          <NuxtLink
            v-for="(item, index) of pagedResults"
            :key="`${item.id}${item.title}`"
            :to="item.id"
            class="search-item"
            :class="{ 'search-item--selecting': index === selectedIndex }"
          >
            <span class="search-item__title">{{ item.level === 1 ? item.title : item.titles[0] }}</span>
            <span class="search-item__excerpt">{{ item.content }}</span>
          </NuxtLink>
          <p v-if="totalPages > 0">{{ page }}/{{ totalPages }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-modal {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: 90%;
  min-height: 15rem;
  background-color: var(--color-mantle);
  display: flex;
  justify-content: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);

  @media (min-width: $screen-medium) {
    width: 60%;
  }

  @media (min-width: $screen-mediumpp) {
    width: 40%;
  }

  &__content {
    width: 100%;
    padding: 1rem;
  }

  &__input {
    width: 100%;
    height: 2.25rem;
    font-size: $text-lg;
    border: 2px solid var(--color-surface);
    outline: none;
    padding: 0 0.5rem;
    background: var(--color-mantle);
    color: var(--text-color);

    &:focus {
      border-color: var(--color-red);
    }
  }

  &__close-btn {
    position: absolute;
    right: 0;
  }
}

.tip-message {
  margin-top: 1rem;
  font-size: 0.875rem;

  span {
    display: block;
    font-weight: bold;
    color: var(--color-red);
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.25rem;
      display: flex;
      gap: 0.25rem;
      align-items: center;
    }
  }

  kbd {
    background: var(--color-mantle);
    border: 1px solid var(--color-surface);
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.75rem;
    font-family: $font-mono;
    color: var(--color-text);
  }
}

.search-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
  z-index: 1000;
}

.search-results {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 10px;
  overflow: auto;
}

.search-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid var(--color-surface);
  padding: 0.5rem 0.25rem;
  text-decoration: none;
  color: var(--text-color);
  max-height: 5em;
  overflow: hidden;

  &--selecting {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: var(--color-red);
  }

  &__excerpt {
    font-size: 0.875rem;
    color: var(--color-subtext);
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
  }
}

.search-item.selected {
  border-color: var(--color-red);
}
</style>
