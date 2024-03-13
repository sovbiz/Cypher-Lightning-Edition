<template>
  <div class="px-6">
    <div class="flex flex-row max-w-4xl mx-auto">
      <h1 class="text-black text-4xl my-6 dark:text-white flex-1">Local Point Of Sale</h1>

    </div>

    <AdminSubshop />



    <AdminPos />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
</script>
