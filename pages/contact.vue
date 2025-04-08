<template>
  <div>
    <TheTitle class="mb-4">Contact Me</TheTitle>
    <p>Feel free to reach out via email or LinkedIn.</p>

    <ul class="mt-4 space-y-2">
      <li class="flex items-center gap-2">
        <Icon name="mdi:email-outline" class="text-accent" />
        <NuxtLink
          href="mailto:voquangchien.dev@proton.me"
          class="transition-all hover:underline decoration-accent decoration-2 underline-offset-2 decoration-dotted"
        >
          voquangchien.dev@proton.me
        </NuxtLink>
      </li>
      <li class="flex items-center gap-2">
        <Icon name="mdi:linkedin" class="text-accent" />
        <NuxtLink
          href="https://www.linkedin.com/in/2giosangmitom/"
          target="_blank"
          class="transition-all hover:underline decoration-accent decoration-2 underline-offset-2 decoration-dotted"
        >
          linkedin.com/in/2giosangmitom/
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
