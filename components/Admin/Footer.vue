
<template>
<div class="mt-12">

<!-- <SettingsSocials class="mx-auto pt-12"/> -->

<AdminRelaymonitor />


<div class="flex w-full justify-center space-x-6 md:order-2">
          <p
            class="text-xs leading-5 text-black dark:text-black dark:text-white mt-1"
          >
             Version {{ data.version }}
          </p>
        </div>




          <div
        class="mx-auto max-w-7xl px-6 pb-12 md:flex md:items-center md:justify-between lg:px-8"
      >

      


        <div class="flex w-full justify-center space-x-6 md:order-2">
          <p
            class="text-xs leading-5 text-black dark:text-black dark:text-white mt-1"
          >
            &copy; {{ currentDate.getFullYear() }} {{ data.name }}, Inc. All rights free.
          </p>
        </div>
      </div>
    </div>
</template>
<script setup>
import data from "~/config/setup";
const currentDate = new Date();
</script>