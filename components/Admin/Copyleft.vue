
<template>
          <div
        class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex w-full justify-center space-x-6 md:order-2">
          <p
            class="text-xs leading-5 text-black dark:text-black dark:text-white mt-1"
          >
            &copy; 2023 {{ data.name }}, Inc. All rights reserved.
          </p>
        </div>
      </div>
</template>
<script setup>
import data from "~/config/setup";
</script>