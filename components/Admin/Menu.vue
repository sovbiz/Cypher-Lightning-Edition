<template>
  <div>
    <div class="lg:hidden" v-show="!showMobileMenu">
      <div class="fixed inset-0 flex z-40">
        <div class="fixed inset-0">
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>

        <div
          class="relative flex-1 flex flex-col max-w-xs w-full bg-colorBgLight dark:bg-colorBgDark"
        >
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              @click="togglemenu"
              class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Close sidebar</span>
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div>
              <NuxtLink :to="localePath('/')" class="flex ml-4">
                <span class="sr-only">{{ data.name }}</span>

                <img
                  v-if="data.logo"
                  :class="[data.logodark ? 'block dark:hidden' : '', '']"
                  :src="'/project/' + data.logoimage"
                  :alt="data.name"
                  width="40"
                  height="40"
                />
                <img
                  v-if="data.logodark"
                  class="hidden dark:block"
                  :src="'/project/' + data.logodarkimage"
                  :alt="data.name"
                  width="40"
                  height="40"
                />

                <span
                  v-if="data.textlogo"
                  class="mt-1.5 ml-4 text-xl font-bold dark:text-white"
                  >{{ data.textlogo }}
                </span>
              </NuxtLink>
            </div>

            <nav class="mt-5 px-2 space-y-1 responsive">
              <NuxtLink
                :to="localePath(item.href)"
                v-for="item in menu.Headernavigation.basicmenu"
                :key="item.name"
                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full"
              >
                <component
                  :is="item.heroicon"
                  class="h-6 w-6 shrink-0"
                  aria-hidden="true"
                />

                {{ item.name }}</NuxtLink
              >

              <NuxtLink
                v-if="data.shop"
                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full"
                :to="localePath('/cart')"
                >Cart

                <span
                  id="numbered"
                  class="text-center font-semibold text-xs align-text-top px-1 text-white dark:text-gray-900 dark:bg-white bg-gray-900 rounded-xl h-4"
                >
                  {{ totalItems }}</span
                >
              </NuxtLink>
            </nav>
          </div>
          <div class="flex-shrink-0 flex bg-gray-400 dark:bg-gray-700 p-4">
            <div class="flex-shrink-0 w-full group block">
              <div class="flex items-center justify-around mx-auto max-w-sm">
                <SettingsLanguage v-if="data.footerlanguage" />
                <SettingsTheme v-if="data.footertheme" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 w-14"></div>
      </div>
    </div>

    <div class="hidden lg:flex md:flex-shrink-0 min-h-screen shadow-2xl">
      <div class="flex flex-col w-64">
        <div
          class="flex flex-col h-0 flex-1 bg-colorBgLight dark:bg-colorBgDark"
        >
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div>
              <!-- <NuxtLink :to="localePath('/')" class="flex w-full text-center">
  
  
              <p
                v-if="data.textlogo"
                class="mt-1.5 ml-4 text-xl font-bold dark:text-white text-center"
                >{{ data.textlogo }}</p
              >
            </NuxtLink> -->

              <NuxtLink :to="localePath('/')" class="flex ml-4">
                <span class="sr-only">{{ data.name }}</span>

                <img
                  class="block dark:hidden -rotate-90"
                  src="/Logo-Holder-Light.gif"
                  :alt="data.name"
                  width="180"
                />
                <img
                  class="hidden dark:block "
                  src="/Logo-Holder-Dark.gif"
                  :alt="data.name"
                  width="180"
                />
              </NuxtLink>
            </div>
            <nav
              class="mt-5 flex-1 px-2 bg-colorBgLight dark:bg-colorBgDark shodow-2xl space-y-1"
            >
              <!--       <video width="200"  autoplay loop>
  <source src="/logo.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> -->

              <div class="my-6">
                <NuxtLink
                  :to="localePath('/')"
                  class="my-12 rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6"
                  >Visit your Frontend
                </NuxtLink>
              </div>

              <NuxtLink
                :to="localePath(item.href)"
                v-for="item in menu.Headernavigation.basicmenu"
                :key="item.name"
                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full"
              >
                <component
                  :is="item.heroicon"
                  class="h-6 w-6 shrink-0"
                  aria-hidden="true"
                />

                {{ item.name }}</NuxtLink
              >

              <NuxtLink
                v-if="data.shop"
                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full"
                :to="localePath('/cart')"
                >Cart

                <span
                  id="numbered"
                  class="text-center font-semibold text-xs align-text-top px-1 text-white dark:text-gray-900 dark:bg-white bg-gray-900 rounded-xl h-4"
                >
                  {{ totalItems }}</span
                >
              </NuxtLink>
            </nav>
          </div>

          <div class="flex-shrink-0 flex bg-gray-400 dark:bg-gray-700 p-4">
            <div class="flex-shrink-0 w-full group block">
              <div class="flex items-center justify-around mx-auto max-w-sm">
                <SettingsLanguage v-if="data.footerlanguage" />
                <SettingsTheme v-if="data.footertheme" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="fixed bg-colorHeaderBgLight dark:bg-colorHeaderBgDark w-full z-30 flex shadow-lg dark:shadow-gray-100/10"
    >
      <div
        class="basis-1/2 flex items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10"
      >
        <div>
          <NuxtLink :to="localePath('/')" class="flex">
            <span class="sr-only">{{ data.name }}</span>

            <!-- <img
                :class="[data.logodark ? 'block dark:hidden' : '', '']"
                :src="'/project/' + data.logoimage"
                :alt="data.name"
                width="40"
                height="40"
              />
              <img
                v-if="data.logodark"
                class="hidden dark:block"
                :src="'/project/' + data.logodarkimage"
                :alt="data.name"
                width="40"
                height="40"
              /> -->

            <span
              v-if="data.textlogo"
              class="mt-1.5 ml-4 text-xl font-bold dark:text-white"
              >{{ data.textlogo }}</span
            >
          </NuxtLink>
        </div>
      </div>

      <div class="flex my-2 mr-2 lg:hidden basis-1/2 flex-row-reverse">
        <button
          @click="togglemenu"
          class="dark:bg-colorBgLight bg-colorBgDark rounded w-12 h-10 mt-3 mr-3"
        >
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: menu -->
          <svg
            class="h-6 w-6 mx-auto text-white dark:text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import data from "~/config/setup";
import menu from "~/config/admin";

let showMobileMenu = ref(true);

function togglemenu() {
  showMobileMenu.value = !showMobileMenu.value;
}

import { useProjectStore } from "~/store/shopcart";

const store = useProjectStore();
const totalItems = ref(store.getTotalItems());

// Watch for changes in the cartItems array
watch(
  () => store.cartItems,
  () => {
    totalItems.value = store.getTotalItems();
  },
  { deep: true }
);

onMounted(() => {
  totalItems.value = store.getTotalItems();
});
</script>
