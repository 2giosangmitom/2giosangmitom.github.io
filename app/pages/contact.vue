<script setup lang="ts">
useSeoMeta({
  title: 'Contact Me'
});

const state = reactive({
  fullName: '',
  email: '',
  topic: '',
  message: ''
});
</script>

<template>
  <div class="flex justify-between items-center gap-20 flex-col lg:flex-row">
    <div class="max-w-2xl space-y-4">
      <h1 class="text-primary font-bold text-4xl">Let's Get in Touch!</h1>
      <p class="text-dimmed">
        Have a question, suggestion, or just want to say hello? Fill out the form below, and I'll get back to you soon.
      </p>

      <UForm :state="state" class="flex flex-col gap-4">
        <UFormField label="Full Name" name="fullName" required>
          <UInput v-model="state.fullName" placeholder="Full name" class="w-full" />
        </UFormField>

        <UFormField label="Email" name="email" required>
          <UInput v-model="state.email" type="email" placeholder="Email address" class="w-full" />
        </UFormField>

        <UFormField label="Topic" name="topic" required>
          <UInput v-model="state.topic" placeholder="Topic" class="w-full" />
        </UFormField>

        <UFormField label="Message" name="message" required>
          <UTextarea v-model="state.message" :rows="12" placeholder="Your message" class="w-full" />
        </UFormField>

        <UButton type="submit" color="primary" size="lg" class="w-fit" icon="lucide:send-horizontal">
          Send Message
        </UButton>
      </UForm>
    </div>

    <div
      class="flex flex-col gap-y-4 max-w-xl p-4 bg-primary-200/30 dark:bg-primary-200/10 rounded-lg outline-1 outline-primary-300 dark:outline-primary-900"
    >
      <UCard variant="subtle">
        <template #header>
          <h2 class="flex items-center font-bold gap-x-4 lg:text-2xl">
            <UIcon name="eos-icons:atom-electron" size="50" />Customized software solutions
          </h2>
          <p>I develop custom software solutions designed to meet your unique needs.</p>
        </template>
      </UCard>
      <UCard variant="subtle">
        <template #header>
          <h2 class="flex items-center font-bold gap-x-4 lg:text-2xl">
            <UIcon name="ph:lightbulb-filament-bold" size="50" />Expertise in the latest technologies
          </h2>
          <p>
            I leverage modern technologies to build responsive, high-performance websites and applications that deliver
            exceptional user experiences.
          </p>
        </template>
      </UCard>
      <UCard variant="subtle">
        <template #header>
          <h2 class="flex items-center font-bold gap-x-4 lg:text-2xl">
            <UIcon name="material-symbols:support" size="50" />Support and maintenance
          </h2>
          <p>
            My work doesn't end at delivery - I provide ongoing support and maintenance to keep your solutions running
            smoothly.
          </p>
        </template>
      </UCard>
    </div>
  </div>
</template>
