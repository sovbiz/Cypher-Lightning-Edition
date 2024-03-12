<template>
  <div class="px-6">
    <div class="flex flex-row max-w-4xl mx-auto">
      <h1 class="text-black text-4xl my-6 dark:text-white flex-1">Notes</h1>
      <div class="flex-1 text-right mt-6">
        <NuxtLink
          :to="localePath('/admin/note')"
          class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6"
          >Write a new post
        </NuxtLink>
      </div>
    </div>
    <AdminNotes />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
</script>
