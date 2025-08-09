<script setup lang="ts">
import { contactSchema } from '#shared/schemas/contact';

useSeoMeta({
  title: 'Contact'
});

const cards = [
  {
    icon: 'eos-icons:atom-electron',
    title: 'Customized software solutions',
    description: 'I develop custom software solutions designed to meet your unique needs.'
  },
  {
    icon: 'ph:lightbulb-filament-bold',
    title: 'Expertise in the latest technologies',
    description:
      'I leverage modern technologies to build responsive, high-performance websites and applications that deliver exceptional user experiences.'
  },
  {
    icon: 'material-symbols:support',
    title: 'Support and maintenance',
    description:
      "My work doesn't end at delivery - I provide ongoing support and maintenance to keep your solutions running smoothly."
  }
];

const state = reactive({
  fullName: '',
  email: '',
  topic: '',
  message: ''
});

const error = reactive({
  fullName: '',
  email: '',
  topic: '',
  message: ''
});

const loading = ref(false);

function validateField(field: keyof typeof state) {
  const result = contactSchema.pick({ [field]: true }).safeParse({ [field]: state[field] });

  if (!result.success && result.error.issues[0]) {
    error[field] = result.error.issues[0].message;
  } else {
    error[field] = '';
  }
}

async function handleSubmit() {
  const result = contactSchema.safeParse(state);

  if (!result.success) {
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof typeof error;
      error[field] = issue.message;
    }
    return;
  }

  try {
    loading.value = true;

    await $fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ ...state }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    Object.assign(state, { fullName: '', email: '', topic: '', message: '' });
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <main class="container contact">
    <form class="contact__form" @submit.prevent="handleSubmit">
      <h1 class="contact__form__title">Let's Get in Touch!</h1>
      <p>
        Have a question, suggestion, or just want to say hello? Fill out the form below, and I'll get back to you soon.
      </p>

      <BaseInput
        v-model="state.fullName"
        name="Full name"
        placeholder="John Cena"
        icon="lucide:circle-user-round"
        :error="error.fullName"
        required
        @blur="validateField('fullName')"
      />
      <BaseInput
        v-model="state.email"
        name="Email"
        placeholder="your@email.com"
        icon="lucide:mail"
        :error="error.email"
        required
        @blur="validateField('email')"
      />
      <BaseInput
        v-model="state.topic"
        name="Topic"
        placeholder="Project Inquiry"
        icon="lucide:tag"
        :error="error.topic"
        required
        @blur="validateField('topic')"
      />
      <BaseTextarea
        v-model="state.message"
        name="Message"
        placeholder="Write your message..."
        icon="lucide:message-square"
        :error="error.message"
        required
        @blur="validateField('message')"
      />
      <BaseButton
        type="submit"
        icon="lucide:send-horizontal"
        class="contact__form__submit-btn"
        :loading="loading"
        loading-icon="lucide:loader"
        >Send Message</BaseButton
      >

      <p class="contact__form__alternative">
        Having troubles? You can also contact me via email:
        <a href="mailto:voquangchien.dev@proton.me" target="_blank">voquangchien.dev@proton.me</a>
      </p>
    </form>

    <div class="contact__info-cards">
      <div v-for="item in cards" :key="item.title" class="contact__info-cards__item">
        <div class="contact__info-cards__item__header">
          <Icon :name="item.icon" size="50" />
          <h2 class="font-medium">{{ item.title }}</h2>
        </div>
        <p class="contact__info-cards__item__body">{{ item.description }}</p>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.contact {
  display: flex;
  flex-direction: column;
  row-gap: 4rem;

  @media screen and (min-width: variables.$screen-xl) {
    flex-direction: row;
    justify-content: space-between;
    column-gap: 4rem;
  }

  &__form {
    background-color: variables.$color-surface;
    border-radius: variables.$rounded-lg;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    flex: 1.25;

    &__title {
      color: variables.$color-primary;
    }

    &__submit-btn {
      width: fit-content;
      cursor: pointer;
    }

    &__alternative {
      a {
        color: variables.$color-primary;
      }
    }
  }

  &__info-cards {
    background-color: variables.$color-surface;
    border-radius: variables.$rounded-lg;
    padding: 1.5rem 1.5rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    flex: 1;

    &__item {
      outline: 1px solid variables.$color-dimmed;
      border-radius: variables.$rounded-md;
      padding: 1rem 1.25rem;

      &__header {
        display: flex;
        align-items: center;
        column-gap: 1rem;
        font-size: variables.$font-base;
      }
    }
  }
}
</style>
