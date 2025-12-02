<script setup lang="ts">
import z from 'zod';

useSeoMeta({
  title: 'Contact - Vo Quang Chien',
  description: 'Get in touch with Vo Quang Chien for collaborations, inquiries, or feedback.',
  ogTitle: 'Contact - Vo Quang Chien',
  ogDescription: 'Get in touch with Vo Quang Chien for collaborations, inquiries, or feedback.'
});

const runtimeConfig = useRuntimeConfig();
const discordWebhookUrl = runtimeConfig.public.DISCORD_WEBHOOK_URL;

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.email('Invalid email address'),
  topic: z.string().min(5, 'Topic must be at least 5 characters long'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message cannot exceed 1000 characters')
});

type Schema = z.infer<typeof schema>;

const state = shallowReactive<Schema>({
  name: '',
  email: '',
  topic: '',
  message: ''
});

const loading = shallowRef(false);

const handleSubmit = async () => {
  const toast = useToast();

  const payload = {
    embeds: [
      {
        title: 'New Contact Form Submission',
        fields: [
          { name: 'Name', value: state.name, inline: true },
          { name: 'Email', value: state.email, inline: true },
          { name: 'Topic', value: state.topic, inline: false },
          { name: 'Message', value: state.message, inline: false }
        ],
        timestamp: new Date().toISOString()
      }
    ]
  };

  try {
    loading.value = true;
    await $fetch(discordWebhookUrl, {
      timeout: 3000,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    toast.add({
      title: 'Success',
      description: 'Your message has been sent successfully!',
      color: 'success'
    });
  } catch (error) {
    console.error('Error sending contact form submission:', error);
    toast.add({
      title: 'Error',
      description: 'There was an error sending your message. Please try again later.',
      color: 'error'
    });
  } finally {
    loading.value = false;
    Object.assign(state, {
      name: '',
      email: '',
      topic: '',
      message: ''
    });
  }
};
</script>

<template>
  <UContainer class="flex justify-between flex-col md:flex-row gap-8 md:gap-16 py-12">
    <div>
      <h1 class="text-4xl font-bold mb-4">Contact Me</h1>
      <p>
        Have a question, suggestion, or just want to say hello? Feel free to reach out using the email, form, or connect
        with me on social media!
      </p>
      <div class="flex flex-col mt-6 gap-2">
        <UButton to="mailto:voquangchien.dev@proton.me" icon="lucide:mail" variant="ghost" class="max-w-fit"
          >voquangchien.dev@proton.me</UButton
        >
        <UButton
          icon="lucide:linkedin"
          to="https://www.linkedin.com/in/2giosangmitom/"
          variant="ghost"
          class="max-w-fit"
          >2giosangmitom</UButton
        >
      </div>
    </div>

    <UForm
      :schema="schema"
      :state="state"
      class="flex flex-col gap-y-4 w-full bg-primary/5 dark:bg-primary/5 border-primary border p-8 rounded-lg shadow-lg"
      @submit="handleSubmit"
    >
      <div class="mb-4">
        <h1 class="text-4xl font-bold mb-1">Get in Touch</h1>
        <p>Fill out the form below to send me a message. I'll get back to you as soon as possible!</p>
      </div>

      <UFormField label="Name" name="name">
        <UInput v-model="state.name" icon="lucide:circle-user-round" placeholder="Your Name" class="w-full" />
      </UFormField>

      <UFormField label="Email" name="email">
        <UInput v-model="state.email" icon="lucide:mail" placeholder="your@email.com" class="w-full" />
      </UFormField>

      <UFormField label="Topic" name="topic">
        <UInput v-model="state.topic" icon="lucide:tag" placeholder="Subject of your message" class="w-full" />
      </UFormField>

      <UFormField label="Message" name="message">
        <UTextarea
          v-model="state.message"
          icon="lucide:message-square"
          placeholder="Your message..."
          class="w-full"
          :rows="12"
        />
      </UFormField>

      <UButton
        type="submit"
        color="primary"
        class="mt-4 self-start"
        icon="lucide:send-horizontal"
        :loading="loading"
        loading-icon="lucide:loader"
        >Send Message</UButton
      >
    </UForm>
  </UContainer>
</template>
