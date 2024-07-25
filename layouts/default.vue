<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark min-h-screen">
    <AdminMaintenance v-if="!data.maintenancemode" />
    <AdminSetup v-if="!data.initsetup" />
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
import Maintenance from "~/components/Admin/Maintenance.vue";
import data from "~/config/setup";
</script>
