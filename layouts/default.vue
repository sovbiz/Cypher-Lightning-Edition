<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark min-h-screen">
    <Header />

    <main
      class="min-h-screen py-6 bg-colorBgLight dark:bg-colorBgDark pt-18 dark:text-white"
    >
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup>
</script>
