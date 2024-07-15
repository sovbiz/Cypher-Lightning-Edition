<template>
  <div>
    <div>
      <h1 class="text-black text-4xl max-w-2xl mx-auto my-6 dark:text-white">
        Add/Edit Product
      </h1>

      <form class="max-w-2xl mx-auto">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="border-b border-gray-900/10 pb-12">
              <h2
                class="text-base font-semibold leading-7 text-gray-900 dark:text-white"
              >
                Create or edit existing products out of the json object
              </h2>

              <div class="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  Delete
                </button>
                <button
                  type="submit"
                  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
                <button
                  type="submit"
                  class="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  Publish to Nostr
                </button>
              </div>

              <div
                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
              >
                <div class="sm:col-span-6">
                  <label
                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                    >Title</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                    >Fiat price (dollars)</label
                  >
                  <div class="mt-2">
                    <input
                      type="number"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                    >Stock
                  </label>
                  <div class="mt-2">
                    <select
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs text-gray-900 dark:text-gray-900"
                    >
                      <option>In stock</option>
                      <option>Low stock</option>
                      <option>No stock</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                    >Shipping regions</label
                  >
                  <div class="mt-2">
                    <select
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs text-gray-900 dark:text-gray-900"
                    >
                      <option>EU</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                    >Excerpt description (max 350 char)</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-full">
                <label
                  for="about"
                  class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >Product Description</label
                >
                <div class="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                  />
                </div>
                <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-white">
                  Write a few sentences about the product
                </p>
              </div>

              <div class="col-span-full">
                <label
                  for="cover-photo"
                  class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >Upload Product photos</label
                >
                <div
                  class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-white px-6 py-10"
                >
                  <div class="text-center">
                    <PhotoIcon
                      class="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div
                      class="mt-4 flex text-sm leading-6 text-gray-600 dark:text-white"
                    >
                      <label
                        for="file-upload"
                        class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600 dark:text-white">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <AdminFooter />
  </div>
</template>
<script setup>
import data from "~/config/setup";

definePageMeta({
  layout: "admin",
});
</script>
