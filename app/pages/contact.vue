<script setup lang="ts">
import { contactSchema } from '#shared/schemas/contact';

useSeoMeta({
  title: 'Contact'
});

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
  <main class="container">
    <form class="contact-form" @submit.prevent="handleSubmit">
      <h1 class="contact-form__title">Let's Get in Touch!</h1>
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
        class="contact-form__submit-btn"
        :loading="loading"
        loading-icon="lucide:loader"
        >Send Message</BaseButton
      >
    </form>
  </main>
</template>

<style lang="scss">
@use '~/assets/scss/variables';

.contact-form {
  background-color: variables.$color-secondary;
  border-radius: variables.$rounded-lg;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  &__title {
    color: variables.$color-primary;
  }

  &__submit-btn {
    width: fit-content;
    cursor: pointer;
  }
}
</style>
