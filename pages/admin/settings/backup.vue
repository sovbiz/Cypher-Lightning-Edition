<template>
  <div class="px-6">
    <h1 class="text-black text-4xl max-w-4xl mx-auto my-6 dark:text-white">
      Backup
    </h1>

    <AdminSubsettings />

    <form class="max-w-4xl mx-auto mt-12">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white"
          >
            Backup or restore your content en products
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            Simple Zip of the Public, Content & Config folders
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-full">
              <label
                for="backup"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Create Backup</label
              >
              <div class="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  class="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Create Backup
                </button>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="restore"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Restore Backup</label
              >
              <div class="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  class="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Restore Backup
                </button>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="restore"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Broadcast to Nostr relay
              </label>

              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white"
                      >Notes</label
                    >
                    <!-- <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p> -->
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white"
                      >Products</label
                    >
                    <!-- <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p> -->
                  </div>
                </div>
              </div>

              <div class="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  class="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Broadcast
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>

    <AdminFooter />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
</script>
