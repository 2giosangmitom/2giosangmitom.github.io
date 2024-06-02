<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="contact">
    <h2>Contact me</h2>
    <div class="contact-info">
      <Icon icon="clarity:email-solid" />
      <a href="mailto:voquangchien.dev@proton.me">voquangchien.dev@proton.me</a>
    </div>
    <div class="contact-info">
      <Icon icon="flowbite:github-solid" />
      <a href="https://github.com/2giosangmitom" target="_blank" rel="noopener noreferrer"
        >2giosangmitom</a
      >
    </div>
    <div class="contact-info">
      <Icon icon="akar-icons:linkedin-box-fill" />
      <a href="https://www.linkedin.com/in/2giosangmitom" target="_blank" rel="noopener noreferrer"
        >2giosangmitom</a
      >
    </div>
  </section>
</template>

<style scoped>
h2 {
  color: #ffffff;
}
.contact-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}
.contact-info a {
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}
.contact-info a:hover {
  color: #0073e6;
}
</style>
