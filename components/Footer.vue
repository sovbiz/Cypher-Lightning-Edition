<script setup>
import data from "~/config/setup";
</script>
<template>
  <footer
    class="bg-colorBgLight dark:bg-colorBgDark"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-3 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="text-center">
          <img
            v-if="data.logo"
            :class="[data.logodark ? 'block dark:hidden' : '', 'h-12 mx-auto']"
            :src="'/project/' + data.logoimage"
            :alt="data.name"
            width="100"
            height="60"
          />
          <img
            v-if="data.logodark"
            class="hidden dark:block h-12 mx-auto"
            :src="'/project/' + data.logodarkimage"
            :alt="data.name"
            width="100"
            height="60"
          />

          <!-- <p class="text-sm leading-6 text-gray-600 dark:text-white my-3">Nostr & Bitcoin Builders</p> -->

          <SettingsSocials class="mx-auto pt-3" />

          <div class="flex flex-row justify-center my-3">
            <SettingsTheme />
            <SettingsLanguage v-if="data.multilang" />
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="text-center">
              <h3
                class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {{ data.Footernavigation.columntitels[0].column1 }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="itemlink in data.Footernavigation.FooterColums.col1"
                  :key="itemlink.name"
                >
                  <NuxtLink
                    :to="localePath(itemlink.href)"
                    class="text-sm leading-6 text-gray-600 dark:text-white hover:text-gray-900"
                    >{{ itemlink.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0 text-center">
              <h3
                class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {{ data.Footernavigation.columntitels[0].column2 }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="itemlink in data.Footernavigation.FooterColums.col2"
                  :key="itemlink.name"
                >
                  <NuxtLink
                    :to="localePath(itemlink.href)"
                    class="text-sm leading-6 text-gray-600 dark:text-white hover:text-gray-900"
                    >{{ itemlink.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div class="text-center">
              <h3
                class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {{ data.Footernavigation.columntitels[0].column3 }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="itemlink in data.Footernavigation.FooterColums.col3"
                  :key="itemlink.name"
                >
                  <NuxtLink
                    :to="localePath(itemlink.href)"
                    class="text-sm leading-6 text-gray-600 dark:text-white hover:text-gray-900"
                    >{{ itemlink.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0 text-center">
              <h3
                class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {{ data.Footernavigation.columntitels[0].column4 }}
              </h3>

              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="itemlink in data.Footernavigation.FooterColums.col4"
                  :key="itemlink.name"
                >
                  <NuxtLink
                    :to="localePath(itemlink.href)"
                    class="text-sm leading-6 text-gray-600 dark:text-white hover:text-gray-900"
                    >{{ itemlink.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex w-full justify-center space-x-6 md:order-2">
          <p
            class="text-xs leading-5 text-black dark:text-black dark:text-white mt-1"
          >
            &copy; 2023 {{ data.name }}, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
