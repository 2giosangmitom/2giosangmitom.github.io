<script setup lang="ts">
useSeoMeta({
  title: 'Contact'
});
</script>

<template>
  <main class="container">
    <form class="contact-form">
      <h1 class="contact-form__title">Let's Get in Touch!</h1>
      <p>
        Have a question, suggestion, or just want to say hello? Fill out the form below, and I'll get back to you soon.
      </p>

      <BaseInput name="Full name" placeholder="John Cena" icon="lucide:circle-user-round" required />
      <BaseInput name="Email" placeholder="your@email.com" icon="lucide:mail" required />
      <BaseInput name="Topic" placeholder="Project Inquiry" icon="lucide:tag" required />
      <BaseTextarea name="Message" placeholder="Write your message..." icon="lucide:message-square" required />
      <BaseButton type="submit" icon="lucide:send-horizontal" class="contact-form__submit-btn">Send Message</BaseButton>
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
  }
}
</style>
