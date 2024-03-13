<template>
  <div class="px-6">
    <h1 class="text-black text-4xl max-w-4xl mx-auto my-6 dark:text-white">
      Design
    </h1>


    <AdminSubsettings />


    <form class="max-w-4xl mx-auto mt-12">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white"
          >
            Logo & Darkmode Settings
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            Set your own logo, if none is provided the text logo (settings name)
            gets displayed
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-full">
              <label
                for="photo"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Logo</label
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
                  Change
                </button>
              </div>
            </div>

            <div class="col-span-4">
              <label
                for="location"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Default Theme</label
              >
              <select
                id="location"
                name="location"
                class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option selected="">System</option>
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white"
          >
            Socials
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            What even is dribble 😂? maybe TG,discord,Nostr,'X', ?.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div
              v-for="(link, platform) in data.socialnavigation"
              :key="platform"
              class="sm:col-span-4"
            >
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >{{ platform }}</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="link"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white"
          >
            Menu Setup
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            Header menu
          </p>

          <div
            v-for="item in data.Headernavigation.basicmenu"
            :key="item"
            class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Menu Item</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="item.name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Route</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="item.href"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white"
          >
            Footer Setup
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            Footer section
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Column 1</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="data.Footernavigation.columntitels[0].column1"
                  class="dark:text-gray-900 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                  :placehold="data.Footernavigation.columntitels"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Column 2</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="data.Footernavigation.columntitels[0].column2"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Column 3</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="data.Footernavigation.columntitels[0].column3"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Column 4</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="data.Footernavigation.columntitels[0].column4"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>
          </div>

          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white mt-24"
          >
            Column 1
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            Menu section
          </p>

          <div
            v-for="itemlink in data.Footernavigation.FooterColums.col1"
            :key="itemlink.name"
            class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Menu Item</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="itemlink.name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Route</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="itemlink.href"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>
          </div>

          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white mt-24"
          >
            Column 2
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            Menu section
          </p>

          <div
            v-for="itemlink in data.Footernavigation.FooterColums.col2"
            :key="itemlink.name"
            class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Menu Item</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="itemlink.name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Route</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="itemlink.href"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>
          </div>

          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white mt-24"
          >
            Column 3
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            Menu section
          </p>

          <div
            v-for="itemlink in data.Footernavigation.FooterColums.col3"
            :key="itemlink.name"
            class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Menu Item</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="itemlink.name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Route</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="itemlink.href"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>
          </div>

          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white mt-24"
          >
            Column 4
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            Menu section
          </p>

          <div
            v-for="itemlink in data.Footernavigation.FooterColums.col4"
            :key="itemlink.name"
            class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
          >
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Menu Item</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="itemlink.name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Route</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  :placeholder="itemlink.href"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900"
                />
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
  </div>
</template>

<script setup>
import data from "~/config/setup";

definePageMeta({
  layout: "admin",
});
</script>
