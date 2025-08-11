<script setup lang="ts">
import Fuse from 'fuse.js';

const query = ref('');

const { data } = await useAsyncData('search', () => {
  return queryCollectionSearchSections('blog');
});

const fuse = new Fuse(data.value ?? [], {
  keys: ['title', 'description']
});
const result = computed(() => fuse.search(toValue(query)));
const total = computed(() => {
  return result.value.length;
});

const currentIndex = ref(-1);
const emit = defineEmits(['close']);

const router = useRouter();

const resultItem = useTemplateRef('search-result');
const searchInput = useTemplateRef('search-input');

watch(currentIndex, (value) => {
  resultItem.value?.children[value]?.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
});

useEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key.toLowerCase() == 'j') {
    e.preventDefault();

    if (total.value) {
      currentIndex.value = (currentIndex.value + 1) % total.value;
    }
  }

  if (e.ctrlKey && e.key.toLowerCase() == 'k') {
    e.preventDefault();

    if (total.value) {
      currentIndex.value = (total.value + currentIndex.value - 1) % total.value;
    }
  }

  if (e.key === 'Enter') {
    const path = result.value[currentIndex.value]?.item.id;
    if (path) {
      router.push(path);
      emit('close');
    }
  }

  if (e.key === 'Escape') {
    query.value = '';
  }
});

onMounted(() => {
  // Auto-focus input when modal opens
  searchInput.value?.focus();
});
</script>

<template>
  <div class="search-overlay" @click.self="emit('close')">
    <div class="search-modal">
      <input ref="search-input" v-model="query" placeholder="Search" class="search-modal__search-box" />

      <div v-if="result.length" ref="search-result" class="search-modal__result">
        <NuxtLink
          v-for="(item, index) in result"
          :key="item.item.id"
          :to="item.item.id"
          class="search-modal__result__item"
          :class="{ 'search-modal__result__item--current': currentIndex === index }"
          @click="emit('close')"
        >
          <h3 class="search-modal__result__item__title">{{ item.item.title }}</h3>
          <p class="search-modal__result__item__description">{{ item.item.content.slice(0, 100) }}...</p>
        </NuxtLink>
      </div>
      <div v-else class="search-modal__keymaps">
        <p class="search-modal__keymaps__title text-primary font-medium">Keymaps:</p>
        <ul class="search-modal__keymaps__list">
          <li><kbd>Ctrl</kbd> + <kbd>/</kbd> - Toggle modal</li>
          <li><kbd>Ctrl</kbd> + <kbd>J</kbd> / <kbd>K</kbd> - Move down/up</li>
          <li><kbd>Enter</kbd> - Select item</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.search-overlay {
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 0.3);
  backdrop-filter: blur(6px);
  z-index: 9;
}

.search-modal {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: variables.$color-surface;
  padding: 1rem 2rem;
  width: 90%;
  height: 30rem;
  z-index: 10;
  outline: 2px solid variables.$color-dimmed;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-gutter: stable;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: variables.$screen-md) {
    width: 50rem;
  }

  &__search-box {
    background-color: variables.$color-background;
    border: none;
    outline: 2px solid variables.$color-dimmed;
    padding: 0.5rem 1rem;
    color: variables.$color-foreground;
    width: 100%;
    font-size: variables.$font-base;

    &::placeholder {
      font-size: variables.$font-base;
    }

    &:focus {
      outline: 2px solid variables.$color-primary;
    }
  }

  &__result {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    &__item {
      outline: 2px solid variables.$color-dimmed;
      padding: 0.5rem 1rem;
      text-decoration: none;

      &__title {
        font-size: variables.$font-base;
        color: variables.$color-primary;
      }

      &__description {
        font-size: variables.$font-sm;
        color: variables.$color-foreground;
      }

      &--current,
      &:hover {
        outline-color: variables.$color-primary;
      }
    }
  }

  &__keymaps {
    margin-top: 1rem;
    font-size: variables.$font-sm;

    &__list {
      list-style: none;

      kbd {
        background: variables.$color-surface;
        outline: 1px solid variables.$color-dimmed;
        border-radius: 4px;
        padding: 1px 4px;
        font-family: 'JetBrainsMono', monospace;
      }

      li {
        margin-top: 0.25rem;
      }
    }
  }
}
</style>
