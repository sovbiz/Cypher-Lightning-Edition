<script setup>
import { ref, onBeforeMount, defineProps } from "vue";
import data from "~/config/products";
import ticker from "~/config/setup";
import design from "~/config/design";
import { useFiltersStore } from "~/store/currency";
import { storeToRefs } from "pinia";
import { useProjectStore } from "~/store/shopcart";

// Define the prop
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const tickersymbol = ticker.fiat.symbol;

const products = ref([]);

onBeforeMount(() => {
  // Use the prop value to filter the products
  products.value = data
    .filter((product) => product.category.includes(props.category))
    .slice(0, 3);
});

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

<template>
  <div class="border-t-4 pt-12" v-if="ticker.shop">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
        >
          {{ t("title") }}
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-900 dark:text-gray-100">
          {{ t("subtitle") }}
        </p>
      </div>
      <div
        class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
        <div v-for="product in products" :key="product.id">
          <NuxtLink :to="localePath('/product/' + product.id)">
            <div class="relative">
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
                  v-if="filtersList.value == 'Bitcoin'"
                  class="float-left dark:text-white font-semibold text-black"
                >
                  {{ (product.price * btcprices).toFixed(8) }}
                  <BitcoinIcon class="h-6 w-6 inline" aria-hidden="true" />
                </p>
                <p
                  v-if="filtersList.value == 'Sats'"
                  class="float-left dark:text-white font-semibold text-black"
                >
                  {{ (product.price * btcprices * 100000000).toFixed(0) }}
                  <SatoshiV2Icon class="h-6 w-6 inline" aria-hidden="true" />
                </p>
                <p
                  v-if="filtersList.value == 'Fiat'"
                  class="float-left dark:text-white font-semibold text-black"
                >
                  {{ product.price }} {{ tickersymbol }}
                </p>
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
        </div>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "da": {
    "Addtocart": "Tilføj til kurv",
    "Nostock": "Udsolgt",
    "Lastitems": "Få på lager",
    "Instock": "På lager",
    "title": "Nyt lager",
    "subtitle": "De nyeste drops fra din butiksfront"
  },
  "de": {
    "Addtocart": "In den Warenkorb legen",
    "Nostock": "Ausverkauft",
    "Lastitems": "Letzte Stücke",
    "Instock": "Auf Lager",
    "title": "Neuer Lagerbestand",
    "subtitle": "Die frischesten Drops aus deinem Storefront"
  },
  "en": {
    "Addtocart": "Add to cart",
    "Nostock": "Out of stock",
    "title": "New Stock",
    "subtitle": "Freshest Drops from your storefront",
    "Lastitems": "Last items",
    "Instock": "In stock"
  },
  "es": {
    "Addtocart": "Añadir a la cesta",
    "Nostock": "Agotado",
    "Lastitems": "Últimas piezas",
    "Instock": "En stock",
    "title": "Nuevo stock",
    "subtitle": "Las novedades más frescas de tu tienda"
  },
  "fr": {
    "Addtocart": "Ajouter au panier",
    "Nostock": "Rupture de stock",
    "Lastitems": "Dernières pièces",
    "Instock": "Disponible",
    "title": "Nouveau stock",
    "subtitle": "Les dernières nouveautés de votre magasin"
  },
  "nl": {
    "Addtocart": "Voeg toe aan winkelkar",
    "Nostock": "Uitverkocht",
    "Lastitems": "Laatste stuks",
    "Instock": "In voorraad",
    "title": "Nieuwe voorraad",
    "subtitle": "De nieuwste drops van je winkel"
  },
  "pt": {
    "Addtocart": "Adicionar ao carrinho",
    "Nostock": "Fora de estoque",
    "Lastitems": "Últimos itens",
    "Instock": "Em estoque",
    "title": "Novo Estoque",
    "subtitle": "As novidades mais frescas da sua loja"
  }
}
</i18n>
