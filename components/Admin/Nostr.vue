<template>
  <div class="max-w-4xl mx-auto mt-12">
    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
      Nostr Admin :
    </h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
      <div
        v-for="item in nostr"
        :key="item.name"
        class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
      >
        <dt class="truncate text-sm font-medium text-gray-500">
          {{ item.name }}
        </dt>
        <dd class="mt-1 text-md font-semibold tracking-tight text-gray-900">
          {{ item.stat }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import data from "~/config/setup";

const stats = [{ name: "Version", stat: data.version }];

const nostr = [
  { name: "Posts", stat: "6" },
  { name: "Products", stat: "4" },
  { name: "Followers", stat: "0" },
  { name: "Relay Connection", stat: data.nostrrelay },
];
</script>
