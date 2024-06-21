<script setup lang="ts">
import { Icon } from "@iconify/vue";

const contactDetails = [
  {
    icon: "clarity:email-solid",
    label: "Email",
    link: "mailto:voquangchien.dev@proton.me",
    text: "voquangchien.dev@proton.me",
  },
  {
    icon: "flowbite:github-solid",
    label: "GitHub",
    link: "https://github.com/2giosangmitom",
    text: "2giosangmitom",
  },
  {
    icon: "akar-icons:linkedin-box-fill",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/2giosangmitom",
    text: "2giosangmitom",
  },
];
</script>

<template>
  <section id="contact">
    <h2 class="section-title">Contact me</h2>
    <div
      v-for="(contact, index) in contactDetails"
      :key="index"
      class="contact-info"
    >
      <Icon :icon="contact.icon" :aria-label="contact.label" />
      <a :href="contact.link" target="_blank" rel="noopener">{{
        contact.text
      }}</a>
    </div>
  </section>
</template>

<style scoped>
.contact-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.contact-info a {
  color: #f9e8c9;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.contact-info a:hover {
  color: #ffa3fd;
}
</style>
