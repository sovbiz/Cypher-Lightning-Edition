<script setup>
import data from "~/config/setup";

import menu from "~/config/menu";

const currentDate = new Date();
</script>
<template>
  <footer
    class="bg-colorBgLight dark:bg-colorBgDark border-t-4"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-3 pb-8 pt-12 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="text-center">
          <img
            v-if="data.logo"
            :class="[data.logodark ? 'block dark:hidden' : '', 'h-12 mx-auto']"
            :src="'/project/' + data.logoimage"
            :alt="data.name"
          />
          <img
            v-if="data.logodark"
            class="hidden dark:block h-12 mx-auto"
            :src="'/project/' + data.logodarkimage"
            :alt="data.name"
          />

          <span
            v-if="!data.logo"
            class="mt-1.5 ml-4 text-2xl font-bold dark:text-white"
            >{{ data.textlogo }}</span
          >

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
                {{ menu.Footernavigation.columntitels[0].column1 }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="itemlink in menu.Footernavigation.FooterColums.col1"
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
                {{ menu.Footernavigation.columntitels[0].column4 }}
              </h3>

              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="itemlink in menu.Footernavigation.FooterColums.col4"
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
            <div class="text-center" v-if="data.blog">
              <h3
                class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {{ menu.Footernavigation.columntitels[0].column3 }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="itemlink in menu.Footernavigation.FooterColums.col3"
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

            <div class="mt-10 md:mt-0 text-center" v-if="data.shop">
              <h3
                class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {{ menu.Footernavigation.columntitels[0].column2 }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  v-for="itemlink in menu.Footernavigation.FooterColums.col2"
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

      <FundsTicker />

      <div
        class="mx-auto max-w-7xl px-6 py-2 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex w-full justify-center space-x-6 md:order-2">
          <p
            class="text-xs leading-5 text-black dark:text-black dark:text-white mt-1"
          >
            &copy; {{ currentDate.getFullYear() }} {{ data.name }}, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
