<template>
  <div class="px-6">
    <div class="flex flex-row max-w-4xl mx-auto">
      <h1 class="text-black text-4xl my-6 dark:text-white flex-1">Products</h1>
      <div class="flex-1 text-right flex justify-end">
        <SettingsCurrency class="inline w-24 dark:text-black" />
        <NuxtLink
          :to="localePath('/admin/product')"
          class="h-12 rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6 inline"
          >Add a new product
        </NuxtLink>
      </div>
    </div>


    <AdminSubshop />


    <AdminProducts />

    <AdminFooter />


  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
</script>
