<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

import {
  BitcoinIcon,
  SatoshiV2Icon,
  NoDollarsIcon,
} from "@bitcoin-design/bitcoin-icons-vue/filled";

import { useFiltersStore } from "~/store/currency";
import { storeToRefs } from "pinia";

const inputVal = ref("");

const filtersStore = useFiltersStore();
const { addValueToFilterList } = filtersStore;
const { filtersList } = storeToRefs(filtersStore);

const setCurrency = [{ name: "Bitcoin" }, { name: "Sats" }, { name: "Fiat" }];
</script>
<template>
  <div class="ml-6 flex items-center">
    <!-- Profile dropdown -->
    <Menu as="div" class="relative ml-3 mr-2">
      <div>
        <MenuButton
          class="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <BitcoinIcon
            v-if="filtersList == 'Bitcoin'"
            class="h-6 w-6"
            aria-hidden="true"
          />
          <SatoshiV2Icon
            v-if="filtersList == 'Sats'"
            class="h-6 w-6"
            aria-hidden="true"
          />
          <NoDollarsIcon
            v-if="filtersList == 'Fiat'"
            class="h-6 w-6"
            aria-hidden="true"
          />
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <MenuItem
            v-for="item in setCurrency"
            :key="item.name"
            v-slot="{ active }"
          >
            <button
              :class="[
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700 w-full',
              ]"
              @click="addValueToFilterList(item.name)"
            >
              {{ item.name }}
            </button>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
