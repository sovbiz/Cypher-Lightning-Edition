<template>
  <div class="px-6">
    <!-- <h1 class="text-black text-4xl max-w-4xl mx-auto my-6 dark:text-white text-center">
      Good Morning, Anon ☀️
    </h1> -->

    <AdminMetrics />

    <!-- 
    <AdminNostr /> -->

    <!-- <AdminCodeprop :target=data.nostradmin /> -->

    <!-- <div class="max-w-4xl mx-auto mt-12">
    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
      Bitcoin Ticker :
    </h3>
    <FundsTicker />
    </div> -->

    <AdminHomelinks />

    <AdminFooter />
  </div>
</template>

<script setup>
import data from "~/config/setup";

definePageMeta({
  layout: "admin",
});
</script>
