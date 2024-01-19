<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtLoadingIndicator color="#ffcc00" :height="5" />
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>
<script setup>

useHead({
  bodyAttrs: {
    class: "bg-colorBgLight dark:bg-colorBgDark",
  },
});
</script>