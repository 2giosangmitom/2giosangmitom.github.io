<template>
  <div class="flex flex-col gap-y-32 min-h-screen">
    <OrganismsAppHeader />
    <UContainer class="flex-1">
      <slot />
    </UContainer>
    <OrganismsAppFooter />
  </div>
</template>
