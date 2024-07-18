<script setup>
import data from "~/config/products";

import design from "~/config/design";

const products = data;

import ticker from "~/config/setup";

const tickersymbol = ticker.fiat.symbol;

import { useFiltersStore } from "~/store/currency";
import { storeToRefs } from "pinia";

import { useProjectStore } from "~/store/shopcart";

const cartStore = useProjectStore();
const { addToCart } = cartStore;

const inputVal = ref("");

const filtersStore = useFiltersStore();
const { addValueToFilterList } = filtersStore;
const { filtersList } = storeToRefs(filtersStore);

const btcprice = await $fetch(
  "https://api.coinbase.com/v2/exchange-rates?currency=" +
    ticker.fiat.denomination
);

const btcprices = Number(btcprice.data.rates.BTC).toFixed(8);

import {
  BitcoinIcon,
  SatoshiV2Icon,
  NoDollarsIcon,
} from "@bitcoin-design/bitcoin-icons-vue/filled";

const { t } = useI18n({ useScope: "local" });
</script>
<i18n lang="json">
{
  "da": {
    "Addtocart": "Tilføj til kurv",
    "Nostock": "Udsolgt",
    "Lastitems": "Få på lager",
    "Instock": "På lager"
  },
  "de": {
    "Addtocart": "In den Warenkorb",
    "Nostock": "Ausverkauft",
    "Lastitems": "Letzte Stücke",
    "Instock": "Auf Lager"
  },
  "en": {
    "Addtocart": "Add to cart",
    "Nostock": "Out of stock",
    "Lastitems": "Last items",
    "Instock": "In stock"
  },
  "es": {
    "Addtocart": "Añadir a la cesta",
    "Nostock": "Agotado",
    "Lastitems": "Últimas piezas",
    "Instock": "En stock"
  },
  "fr": {
    "Addtocart": "Ajouter au panier",
    "Nostock": "Rupture de stock",
    "Lastitems": "Dernières pièces",
    "Instock": "Disponible"
  },
  "nl": {
    "Addtocart": "winkelkar toevoegen",
    "Nostock": "Uitverkocht",
    "Lastitems": "Laatste stuks",
    "Instock": "In voorraad"
  },
  "pt": {
    "Addtocart": "Adicionar ao carrinho",
    "Nostock": "Fora de estoque",
    "Lastitems": "Últimos itens",
    "Instock": "Em estoque"
  }
}
</i18n>

<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-2"
    >
      <div
        class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        <div v-for="product in products" :key="product.id">
          <NuxtLink :to="localePath('/product/' + product.id)">
            <div class="relative">
              <div class="relative h-72 w-full overflow-hidden rounded-lg">
                <div
                  v-if="product.images[0].src && design.productimage"
                  class="relative h-72 w-full overflow-hidden rounded-lg"
                >
                  <img
                    :src="product.images[0].src"
                    :alt="product.images[0].alt"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <div
                  v-if="!product.images[0].src && design.productimage"
                  class="relative h-72 w-full overflow-hidden rounded-lg"
                >
                  <img
                    src="/project/No-Image.png"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div class="relative mt-4">
                <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                  {{ product.name }}
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
            </div>

            <div class="mt-4 flex justify-between">
              <div>
                <h3
                  class="text-lg font-extrabold text-gray-700 dark:text-white"
                >
                  {{ product.title }}
                </h3>
                <p
                  class="mt-1 text-sm text-gray-500 dark:text-white line-clamp-2 h-10"
                >
                  {{ product.description }}
                </p>
              </div>
            </div>

            <div class="basis-full flex flex-col">
              <div
                class="text-lg font-medium text-gray-900 dark:text-white w-full basis-full"
              >
                <p
                  v-if="filtersList == 'Bitcoin'"
                  class="float-left dark:text-white font-semibold text-black"
                >
                  {{ (product.price * btcprices).toFixed(8) }}
                  <BitcoinIcon class="h-6 w-6 inline" aria-hidden="true" />
                </p>

                <p
                  v-if="filtersList == 'Sats'"
                  class="float-left dark:text-white font-semibold text-black"
                >
                  {{ (product.price * btcprices * 100000000).toFixed(0) }}
                  <SatoshiV2Icon class="h-6 w-6 inline" aria-hidden="true" />
                </p>

                <p
                  v-if="filtersList == 'Fiat'"
                  class="float-left dark:text-white font-semibold text-black"
                >
                  {{ product.price }} {{ tickersymbol }}
                </p>

                <!-- <span class="text-right float-right dark:text-white" v-if="$store.state.currency.currency == 'eur' " > {{ p.price.eur }} €</span>

              <span class="text-right float-right dark:text-white" v-if="$store.state.currency.currency == 'usd' "> {{ p.fiat }} $</span> -->
              </div>

              <div class="w-full dark:text-white basis-full">
                <span
                  v-if="product.stock < 5 && product.stock > 0"
                  class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
                  ><span
                    class="flex w-2.5 h-2.5 bg-orange-400 rounded-full mr-1.5 flex-shrink-0"
                  ></span
                  >{{ t("Lastitems") }}</span
                >

                <span
                  v-if="product.stock == 0"
                  class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
                  ><span
                    class="flex w-2.5 h-2.5 bg-red-400 rounded-full mr-1.5 flex-shrink-0"
                  ></span
                  >{{ t("Nostock") }}</span
                >

                <span
                  v-if="product.stock > 5 && product.stock != 0"
                  class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
                  ><span
                    class="flex w-2.5 h-2.5 bg-green-400 rounded-full mr-1.5 flex-shrink-0"
                  ></span
                  >{{ t("Instock") }}</span
                >
              </div>
            </div>
          </NuxtLink>

          <button
            class="mt-2 w-full snipcart-add-item hover:shadow-lg font-semibold py-2 px-4 rounded shadow max-h-10 text-black dark:text-white dark:hover:text-black hover:text-white bg-white hover:bg-black dark:bg-gray-700 dark:hover:bg-white"
            @click="
              addToCart({
                id: product.id,
                amount: 1,
                image: product.images[0].src,
                title: product.title,
                price: product.price,
                shipprice: product.shipprice,
              })
            "
            :disabled="product.stock == 0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6 fill-gray-400 inline mr-4"
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
</template>
