<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <div class="w-12">
    <button type="button" @click="openModal" class="mt-1.5">
      <img
        :src="'/flags/flag_' + locale + '.svg'"
        alt="flag"
        class="w-8 h-5 mx-6"
      />
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
      as="div"
      @close="closeModal"
      class="relative"
      style="z-index: 9999999"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-50" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-colorBgLight dark:bg-colorBgDark p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 dark:text-white text-black"
              >
                Select Your Language
              </DialogTitle>
              <div class="mt-2">
                <div
                  class="relative rounded-md grid gap-6 bg-colorSwitchBgLight dark:bg-colorSwitchBgDark px-1 py-1 sm:gap-1 lg:grid-cols-1"
                >
                  <nuxt-link
                    v-for="locale in availableLocales"
                    :key="locale.code"
                    :to="switchLocalePath(locale.code)"
                    class="flex py-1 hover:bg-colorBgDark dark:hover:bg-colorBgLight hover:text-white dark:hover:text-black dark:text-white text-black px-4 rounded inline-block w-full"
                    @click="closeModal"
                  >
                    <img
                      :src="'/flags/flag_' + locale.code + '.svg'"
                      alt="flag"
                      class="w-8 h-5 my-2 inline"
                    />
                    <span class="inline ml-4 mt-1.5" :style="styleObject">{{
                      locale.name
                    }}</span>
                  </nuxt-link>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
