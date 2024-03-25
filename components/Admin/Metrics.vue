<template>
  <div class="max-w-4xl mx-auto mt-16">
    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
      Build Stats:
    </h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div
        v-for="item in stats"
        :key="item.name"
        class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
      >

      <div class="flex flex-row">

      <div class="flex-1">
        <dt class="truncate text-sm font-medium text-gray-500">
          {{ item.name }}
        </dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          {{ item.stat }}
        </dd>
      </div>

      <div class="flex-1">
        <dt class="truncate text-sm font-medium text-gray-500">
          {{ item.namenostr }}
        </dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          {{ item.nostr }}
        </dd>
      </div>

    </div>


      </div>
    </dl>
  </div>
</template>

<script setup>
import data from "~/config/setup";

const stats = [
  { name: "Local Posts", stat: "6", namenostr: "Nostr Posts", nostr: "0" },
  { name: "Local Products", stat: "4", namenostr: "Nostr Products", nostr: "0" },
];
</script>
