<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".contact-info", {
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
    },
  });
});
</script>

<template>
  <section id="contact">
    <h2 class="section-title">Contact me</h2>
    <div class="contact-info">
      <Icon icon="clarity:email-solid" />
      <a href="mailto:voquangchien.dev@proton.me">voquangchien.dev@proton.me</a>
    </div>
    <div class="contact-info">
      <Icon icon="flowbite:github-solid" />
      <a
        href="https://github.com/2giosangmitom"
        target="_blank"
        rel="noopener noreferrer"
        >2giosangmitom</a
      >
    </div>
    <div class="contact-info">
      <Icon icon="akar-icons:linkedin-box-fill" />
      <a
        href="https://www.linkedin.com/in/2giosangmitom"
        target="_blank"
        rel="noopener noreferrer"
        >2giosangmitom</a
      >
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
