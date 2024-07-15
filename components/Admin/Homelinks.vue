<template>
  <ul role="list" class="divide-y divide-gray-100 max-w-4xl mx-auto mt-24">
    <li class="flex items-center justify-between gap-x-6 py-5">
      <div class="min-w-0">
        <div class="flex items-start gap-x-3">
          <p
            class="text-md font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Completed Setup Wizard 🧙‍♂️
          </p>
          <p
            class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20"
          >
            Complete
          </p>
        </div>
        <div
          class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500"
        >
          <p class="whitespace-nowrap dark:text-white">
            Setup your project with its initial store values.
          </p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
            <circle cx="1" cy="1" r="1" />
          </svg>
        </div>
      </div>
      <div class="flex flex-none items-center gap-x-4">
        <NuxtLink
          :to="localePath('/admin/settings')"
          class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
          >Change project settings<span class="sr-only">
            Change settings</span
          ></NuxtLink
        >
      </div>
    </li>
    <li class="flex items-center justify-between gap-x-6 py-5">
      <div class="min-w-0">
        <div class="flex items-start gap-x-3">
          <p
            class="text-md font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Start writing content ✍️
          </p>
          <p
            class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-gray-600 bg-gray-50 ring-gray-500/10"
          >
            Forever In progress
          </p>
        </div>
        <div
          class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500"
        >
          <p class="whitespace-nowrap dark:text-white">
            Feeling inspired ? start writing that new post !
          </p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
            <circle cx="1" cy="1" r="1" />
          </svg>
        </div>
      </div>
      <div class="flex flex-none items-center gap-x-4">
        <NuxtLink
          :to="localePath('/admin/product/new')"
          class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
          >Create new Post<span class="sr-only">
            Create new Post</span
          ></NuxtLink
        >
      </div>
    </li>
    <li class="flex items-center justify-between gap-x-6 py-5">
      <div class="min-w-0">
        <div class="flex items-start gap-x-3">
          <p
            class="text-md font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Publish a product 🛍️
          </p>
          <p
            class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-gray-600 bg-gray-50 ring-gray-500/10"
          >
            In progress
          </p>
        </div>
        <div
          class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500"
        >
          <p class="whitespace-nowrap dark:text-white">
            Start selling products, add your product here.
          </p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
            <circle cx="1" cy="1" r="1" />
          </svg>
        </div>
      </div>
      <div class="flex flex-none items-center gap-x-4">
        <NuxtLink
          :to="localePath('/admin/note/new')"
          class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
          >Create New Product
          <span class="sr-only">Publish Product</span></NuxtLink
        >
      </div>
    </li>
  </ul>
</template>

<script setup></script>
