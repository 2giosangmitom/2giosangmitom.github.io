<script setup lang="ts">
type ContactDetail = {
  icon: string;
  label: string;
  link: string;
  text: string;
};

const contactDetails: ContactDetail[] = [
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
  <div id="contact">
    <h3 class="section-title">Contact Me</h3>
    <div
      v-for="(contact, index) in contactDetails"
      :key="index"
      class="contact__info"
    >
      <iconify-icon :icon="contact.icon" :aria-label="contact.label" />
      <a :href="contact.link" target="_blank" rel="noopener">{{
        contact.text
      }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact__info {
  display: flex;
  align-items: center;
  gap: 0.25rem;

  a {
    color: var(--foreground);
    text-decoration: none;
    transition: color 0.2s ease-in;

    &:hover {
      color: var(--accent);
    }
  }
}

#contact {
  margin-top: 1rem;
}
</style>
