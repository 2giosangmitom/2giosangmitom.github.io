<script setup lang="ts">
import { contactSchema } from '#shared/schemas/contact';
import { useToast } from '#imports';

useSeoMeta({ title: 'Contact Me' });

const state = reactive({
  fullName: '',
  email: '',
  topic: '',
  message: ''
});

const loading = ref(false);

async function handleSubmit() {
  try {
    loading.value = true;
    await $fetch('/api/send_email', { method: 'POST', body: { ...state } });
    useToast().add({ title: 'Success', description: 'Your message has been sent successfully!', color: 'success' });
    Object.assign(state, { fullName: '', email: '', topic: '', message: '' });
  } catch (error) {
    useToast().add({ title: 'Error', description: 'Failed to send message. Please try again later.', color: 'error' });
    console.error('Error sending email:', error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section class="py-16">
    <div class="flex flex-col lg:flex-row gap-20 items-start">
      <!-- Contact Form -->
      <div class="flex-1">
        <div class="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6">
          <h1 class="text-3xl lg:text-4xl font-bold text-primary mb-2">Let's Get in Touch!</h1>
          <p class="text-dimmed mb-6">
            Have a question, suggestion, or just want to say hello? Fill out the form below, and I'll get back to you
            soon.
          </p>

          <UForm :state="state" :schema="contactSchema" class="space-y-5" @submit="handleSubmit">
            <UFormField label="Full Name" name="fullName" required>
              <UInput v-model="state.fullName" icon="carbon:user-avatar" placeholder="John Doe" class="w-full" />
            </UFormField>

            <UFormField label="Email" name="email" required>
              <UInput
                v-model="state.email"
                icon="carbon:email"
                type="email"
                placeholder="your@email.com"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Topic" name="topic" required>
              <UInput v-model="state.topic" icon="carbon:tag" placeholder="Project Inquiry" class="w-full" />
            </UFormField>

            <UFormField label="Message" name="message" required>
              <UTextarea
                v-model="state.message"
                icon="lucide:message-square"
                :rows="8"
                placeholder="Write your message..."
                class="w-full"
              />
            </UFormField>

            <UButton
              type="submit"
              color="primary"
              size="lg"
              class="w-full lg:w-fit"
              icon="lucide:send-horizontal"
              loading-icon="i-lucide-loader"
              :loading="loading"
            >
              Send Message
            </UButton>
          </UForm>
        </div>

        <p class="text-sm text-dimmed mt-4">
          Having trouble? You can also email me directly at
          <a href="mailto:voquangchien.dev@proton.me" class="text-primary font-medium">voquangchien.dev@proton.me</a>.
        </p>
      </div>

      <!-- Info Cards -->
      <div class="flex-1 grid gap-6">
        <UCard variant="subtle" class="p-6">
          <template #header>
            <h2 class="flex items-center font-bold gap-x-4 lg:text-2xl">
              <UIcon name="eos-icons:atom-electron" size="50" /> Customized software solutions
            </h2>
            <p class="text-sm text-dimmed">I develop custom software solutions designed to meet your unique needs.</p>
          </template>
        </UCard>

        <UCard variant="subtle" class="p-6">
          <template #header>
            <h2 class="flex items-center font-bold gap-x-4 lg:text-2xl">
              <UIcon name="ph:lightbulb-filament-bold" size="50" /> Expertise in the latest technologies
            </h2>
            <p class="text-sm text-dimmed">
              I leverage modern technologies to build responsive, high-performance websites and applications that
              deliver exceptional user experiences.
            </p>
          </template>
        </UCard>

        <UCard variant="subtle" class="p-6">
          <template #header>
            <h2 class="flex items-center font-bold gap-x-4 lg:text-2xl">
              <UIcon name="material-symbols:support" size="50" /> Support and maintenance
            </h2>
            <p class="text-sm text-dimmed">
              My work doesn't end at delivery - I provide ongoing support and maintenance to keep your solutions running
              smoothly.
            </p>
          </template>
        </UCard>
      </div>
    </div>
  </section>
</template>
