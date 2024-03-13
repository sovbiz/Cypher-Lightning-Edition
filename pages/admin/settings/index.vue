<template>
  <div class="px-6">
    <h1 class="text-black text-4xl max-w-4xl mx-auto my-6 dark:text-white">
      Settings
    </h1>



<AdminSubsettings />



    <form class="max-w-4xl mx-auto mt-12">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white"
          >
          General Settings 🫡
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            This information will be displayed publicly ,always think about what
            you share.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Project Name</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.textlogo"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Tagline</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.tagline"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Lightning Address</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.lnurl"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >BTC Recieve Address</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.btcadress"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Email Address</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.contactmail"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Alby Read only API token:</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.albytoken"
                  />
                </div>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Order Recieve Webhook</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.orderwebhook"
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
            Extended Functionality
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            Enable new parts of your web build.
          </p>

          <div class="mt-10 space-y-10">
            <fieldset>
              <!-- <legend class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Enable Blog</legend> -->
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
                      >Enable TestNet</label
                    >
                    <p class="text-gray-500">
                      Enable testnet adress for lightning ( for btc just replace
                      the BTC recieve address)
                    </p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      :checked="data.blog"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white"
                      >Enable Blog</label
                    >
                    <p class="text-gray-500">
                      Turn on blog functionality for your build
                    </p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      :checked="data.shop"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white"
                      >Enable Shop</label
                    >
                    <p class="text-gray-500">
                      Turn on shop functionality for your build
                    </p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      :checked="data.openfinance"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label
                      for="candidates"
                      class="font-medium text-gray-900 dark:text-white"
                      >Enable Open Finance</label
                    >
                    <p class="text-gray-500">
                      Experimental alby api transaction list.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white"
          >
            Language
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            Select your default language & Languages you would like to support.
          </p>

          <div class="mt-10 space-y-10">
            <div>
              <label
                for="location"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Default Language</label
              >
              <select
                id="location"
                name="location"
                class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option selected="">English</option>
                <option>German</option>
                <option>Spanish</option>

                <option>Dutch</option>

                <option>Danish</option>

                <option>French</option>
              </select>
            </div>

            <fieldset>
              <legend
                class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Select Additional Languages to support
              </legend>

              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white"
                      >English</label
                    >
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white"
                      >French</label
                    >
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label
                      for="candidates"
                      class="font-medium text-gray-900 dark:text-white"
                      >German</label
                    >
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white"
                      >Spanish</label
                    >
                  </div>
                </div>

                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white"
                      >Danish</label
                    >
                  </div>
                </div>

                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white"
                      >Dutch</label
                    >
                  </div>
                </div>
              </div>
            </fieldset>
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

import { PhotoIcon, UserCircleIcon } from "@heroicons/vue/24/solid";

definePageMeta({
  layout: "admin",
});
</script>
