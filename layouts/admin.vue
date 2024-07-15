<template>
  <div
    class="h-screen flex overflow-hidden bg-colorBgLight dark:bg-colorBgDark dark:text-white"
  >
    <AdminSetup v-if="!data.initsetup" />

    <AdminMenu />

    <div class="flex flex-col w-0 flex-1 overflow-hidden lg:mt-0">
      <main
        class="flex-1 relative z-0 overflow-y-auto max-w-full focus:outline-none"
        tabindex="0"
      >
        <div class="py-16 lg:py-6">
          <div class="max-w-7xl mx-auto px-0 sm:px-6 md:px-8">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import data from "~/config/setup";
</script>
