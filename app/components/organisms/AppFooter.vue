<template>
  <footer class="py-8 border-t-zinc-300 dark:border-t-zinc-800 border-t">
    <UContainer class="flex justify-between items-center">
      <div class="space-y-2">
        <h3 class="font-semibold text-2xl">Vo Quang Chien</h3>
        <h4 class="font-semibold text-base text-dimmed">🇻🇳 Based in Vietnam</h4>
        <p class="font-medium text-sm">&copy; 2025 Vo Quang Chien. All rights are reserved.</p>
      </div>
      <div class="flex flex-col items-end gap-y-2">
        <p class="text-dimmed">Built with Nuxt.js, TypeScript, and TailwindCSS.</p>
        <p class="text-dimmed">Made with 🍜 and ❤️ at 2AM.</p>
        <div class="space-x-4">
          <UButton icon="lucide:github" to="https://github.com/2giosangmitom" variant="link" target="_blank" />
          <UButton
            icon="lucide:linkedin"
            to="https://www.linkedin.com/in/2giosangmitom/"
            variant="link"
            target="_blank"
          />
          <UButton icon="lucide:youtube" to="https://www.youtube.com/@2giosangmitom/" variant="link" target="_blank" />
        </div>
      </div>
    </UContainer>
  </footer>
</template>
