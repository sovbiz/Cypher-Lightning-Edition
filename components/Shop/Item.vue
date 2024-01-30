<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="flex md:gap-x-8 flex-col md:flex-row">
        <!-- Image gallery -->

        <img
          :src="product.images[0].src"
          class="h-full w-full object-cover object-center sm:rounded-lg max-w-xs mx-auto"
        />

        <!-- Product info -->
        <div
          class="mt-2 px-4 sm:pt-6 sm:px-0 lg:mt-0 w-3/4 inline text-left mx-auto"
        >
          <h1
            class="text-3xl mb-0 font-bold tracking-tight text-colorTxtLight dark:text-colorTxtDark"
          >
            {{ product.title }}
          </h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>

            <p
              v-if="filtersList == 'Bitcoin'"
              class="text-3xl text-gray-900 dark:text-white"
            >
              {{ (product.price.usd * btcprices).toFixed(8) }}
              <BitcoinIcon class="h-12 w-12 inline -mt-2" aria-hidden="true" />
            </p>

            <p
              v-if="filtersList == 'Satoshi'"
              class="text-3xl text-gray-900 dark:text-white"
            >
              {{ (product.price.usd * btcprices * 100000000).toFixed(0) }}
              <SatoshiV2Icon
                class="h-12 w-12 inline -mt-2"
                aria-hidden="true"
              />
            </p>

            <p
              v-if="filtersList == 'Dollar Fiat'"
              class="text-3xl text-gray-900 dark:text-white"
            >
              {{ product.price.usd }} $
            </p>
          </div>

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div
              class="space-y-6 text-base text-colorTxtLight dark:text-colorTxtDark"
              v-html="product.description"
            />
          </div>

          <div class="mt-6">
            <div class="sm:flex-col flex">
              <button
                class="mt-2 w-full snipcart-add-item hover:shadow-lg font-semibold py-1 px-4 rounded shadow max-h-10 text-black dark:text-white dark:hover:text-black hover:text-white bg-white hover:bg-black dark:bg-gray-700 dark:hover:bg-white"
                @click="
                  addToCart({
                    id: product.id,
                    amount: 1,
                    image: product.images[0].src,
                    title: product.title,
                    price: product.price.usd,
                  })
                "
                :disabled="product.stock == 'out'"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 fill-gray-400 inline mr-4 -mt-2"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  />
                </svg>

                {{ t("Addtocart") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/vue";
import { StarIcon } from "@heroicons/vue/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/vue/24/outline";

import { useFiltersStore } from "~/store/currency";
const filtersStore = useFiltersStore();
const { addValueToFilterList } = filtersStore;
const { filtersList } = storeToRefs(filtersStore);

import { useProjectStore } from "~/store/shopcart";

const cartStore = useProjectStore();
const { addToCart } = cartStore;

const btcprice = await $fetch(
  "https://app.yieldmonitor.io/api/v2/symbol/ym/33913"
);

const btcprices = 1 / Number(btcprice.symbols[0].price).toFixed(2);

import {
  BitcoinIcon,
  SatoshiV2Icon,
  NoDollarsIcon,
} from "@bitcoin-design/bitcoin-icons-vue/filled";

import data from "~/config/shop";

const props = defineProps({
  productid: {
    type: String,
    default: "3",
  },
});

// console.log(props.productid);

const producten = data;

// console.log(producten);

const products = producten;

const productfilter = products.filter(function (item) {
  return item.id == Number(props.productid);
});

const product = productfilter[0];

// console.log(product.title)

const { t } = useI18n({ useScope: "local" });
// console.log(products);
</script>
<i18n lang="json">
{
  "da": {
    "Addtocart": "Tilføj til kurv"
  },
  "de": {
    "Addtocart": "In den Warenkorb legen"
  },
  "en": {
    "Addtocart": "Add to cart"
  },
  "es": {
    "Addtocart": "Añadir a la cesta"
  },
  "fr": {
    "Addtocart": "Ajouter au panier"
  },
  "nl": {
    "Addtocart": "Voeg toe aan winkelkar"
  }
}
</i18n>
