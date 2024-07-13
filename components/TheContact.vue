<template>
  <section class="contact">
    <h3 class="section-title">Contact Me</h3>
    <a
      class="contact__link"
      href="mailto:voquangchien.dev@proton.me"
      target="_blank"
      rel="noopener noreferrer"
    >
      <iconify-icon icon="clarity:email-solid" class="iconify" />
      voquangchien.dev@proton.me
    </a>
  </section>
</template>

<style lang="scss" scoped>
.iconify {
  transition: all 0.2s ease-in;
}

.contact {
  margin-top: 1rem;

  .contact__link {
    color: var(--foreground);
    text-decoration: none;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      color: var(--accent);
      .iconify {
        color: var(--accent);
      }
    }
  }
}
</style>
