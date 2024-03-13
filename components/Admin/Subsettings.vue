<template>
    <div class="max-w-4xl mx-auto">

      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
        <NuxtLink
        :to="localePath(item.route)"
          v-for="item in stats"
          :key="item.name"
          class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
        >
          <dt class="truncate text-sm font-medium text-gray-500">
            {{ item.name }}
          </dt>
          <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {{ item.stat }}
          </dd>
        </NuxtLink>
      </dl>
    </div>
  </template>
  
  <script setup>
  import data from "~/config/setup";
  
  const stats = [
  { name: "General Settings", stat: "", route: "/admin/settings/" },
    { name: "Design", stat: "", route: "/admin/settings/design" },
    { name: "Nostr", stat: "", route: "/admin/settings/nostr" },
    { name: "Backup", stat: "", route: "/admin/settings/backup" },
  ];
  </script>
  