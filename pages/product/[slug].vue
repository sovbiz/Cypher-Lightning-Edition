<template>
  <div>
    <div v-if="product !== null">
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
        v-if="!product[0].images.src && design.productimage"
      >
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <TabGroup as="div" class="flex flex-col-reverse">
            <div
              class="mx-auto mt-6 w-full max-w-2xl block lg:max-w-none"
              v-if="!product[0].images.src && design.productimage"
            >
              <TabList
                class="grid grid-cols-4 gap-6"
                v-if="!product[0].images.src && design.productimage"
              >
                <Tab
                  v-for="image in product[0].images"
                  :key="image.id"
                  class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  v-slot="{ selected }"
                >
                  <span class="sr-only">{{ image.name }}</span>
                  <span class="absolute inset-0 overflow-hidden rounded-md">
                    <img
                      :src="image.src"
                      alt=""
                      class="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    :class="[
                      selected ? 'ring-indigo-500' : 'ring-transparent',
                      'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                    ]"
                    aria-hidden="true"
                  />
                </Tab>
              </TabList>
            </div>

            <TabPanels
              class="aspect-h-1 aspect-w-1 w-full"
              v-if="!product[0].images.src && design.productimage"
            >
              <TabPanel v-for="image in product[0].images" :key="image.id">
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="h-full w-full object-cover object-center sm:rounded-lg"
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>

          <!-- Product info -->
          <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1
              class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ product[0].title }}
            </h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>

              <p
                v-if="filtersList == 'Bitcoin'"
                class="text-3xl text-gray-900 dark:text-white"
              >
                {{ (product[0].price * btcprices).toFixed(8) }}
                <BitcoinIcon
                  class="h-12 w-12 inline -mt-2"
                  aria-hidden="true"
                />
              </p>

              <p
                v-if="filtersList == 'Sats'"
                class="text-3xl text-gray-900 dark:text-white"
              >
                {{ (product[0].price * btcprices * 100000000).toFixed(0) }}
                <SatoshiV2Icon
                  class="h-12 w-12 inline -mt-2"
                  aria-hidden="true"
                />
              </p>

              <p
                v-if="filtersList == 'Fiat' && ticker.fiat.denomination != 'BTC'"
                class="text-3xl text-gray-900 dark:text-white"
              >
                {{ product[0].price }} {{ tickersymbol }}
              </p>



              <p
                v-if="filtersList == 'Fiat' && ticker.fiat.denomination == 'BTC'"
                class="text-3xl text-gray-900 dark:text-white"
              >
                {{  (product[0].price * btcusdprices).toFixed(2) }} $
              </p>




            </div>

            <div class="w-full dark:text-white basis-full">
              <span
                v-if="product[0].stock > 5 && product[0].stock != 0"
                class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
                ><span
                  class="flex w-2.5 h-2.5 bg-green-400 rounded-full mr-1.5 flex-shrink-0"
                ></span
                >{{ t("Instock") }}</span
              >

              <span
                v-if="product[0].stock < 5 && product[0].stock > 0"
                class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
                ><span
                  class="flex w-2.5 h-2.5 bg-orange-400 rounded-full mr-1.5 flex-shrink-0"
                ></span
                >{{ t("Lastitems") }}</span
              >

              <span
                v-if="product[0].stock == 0"
                class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
                ><span
                  class="flex w-2.5 h-2.5 bg-red-400 rounded-full mr-1.5 flex-shrink-0"
                ></span
                >{{ t("Nostock") }}</span
              >
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Description</h3>

              <div
                class="space-y-6 text-base text-gray-700 dark:text-white"
                v-html="product[0].description"
              />
            </div>

            <div
              class="mt-6 rounded-md bg-yellow-50 p-4 max-w-3xl mx-auto border-2 border-black dark:border-white"
              v-if="variationwarning == true"
            >
              <div class="flex">
                <div class="ml-3">
                  <ExclamationTriangleIcon
                    class="h-5 w-5 text-yellow-400 inline mr-3"
                    aria-hidden="true"
                  />

                  <p class="text-sm font-medium text-yellow-800 inline">
                    {{ t("Warning") }}
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8" v-if="product[0].variations != ''">
              <RadioGroup v-model="selectedVariation" class="mt-2">
                <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  <RadioGroupOption
                    as="template"
                    v-for="size in product[0].variations"
                    :key="size"
                    :value="size"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        active ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                        checked
                          ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                        'flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1',
                      ]"
                    >
                      <RadioGroupLabel as="span">{{ size }}</RadioGroupLabel>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <div class="mt-6">
              <div class="mt-10 flex sm:flex-col1">
                <button
                  class="snipcart-add-item max-w-xs flex-1 bg-colorBtnLight hover:bg-colorBtnHoverLight dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white dark:text-black dark:hover:text-white sm:w-full"
                  @click="cartAddStore()"
                  :disabled="product[0].stock == 0"
                >
                  {{ t("Addtocart") }}
                </button>
              </div>
            </div>

            <section
              aria-labelledby="details-heading"
              class="mt-12"
              v-if="product[0].features != null"
            >
              <h2 id="details-heading" class="sr-only">Additional details</h2>

              <div class="border-t divide-y divide-gray-200">
                <div>
                  <h3>
                    <button
                      type="button"
                      class="group relative w-full py-6 flex justify-between items-center text-left"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      <span
                        class="text-gray-900 dark:text-white text-sm font-medium"
                      >
                        Features
                      </span>
                      <span class="ml-6 flex items-center">
                        <svg
                          class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>

                        <svg
                          class="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18 12H6"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div class="pb-6 prose prose-sm" id="disclosure-1">
                    <ul role="list dark:text-white">
                      <li
                        v-for="item in product[0].features"
                        :key="item"
                        class="dark:text-white"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="mt-0 md:mt-12">
          <div
            v-html="product[0].fulldescription"
            class="max-w-7xl dark:prose-invert prose md:prose-lg lg:prose-xl dark:md:proxe-lg-invert dark:lg:proxe-xl-invert mx-auto dark:text-white pb-16 px-4 md:px-0 mt-24"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/outline";

import { useFiltersStore } from "~/store/currency";
import { storeToRefs } from "pinia";

import { useProjectStore } from "~/store/shopcart";

const cartStore = useProjectStore();
const { addToCart } = cartStore;
const { cartItems } = storeToRefs(cartStore);

const inputVal = ref("");

const filtersStore = useFiltersStore();
const { addValueToFilterList } = filtersStore;
const { filtersList } = storeToRefs(filtersStore);

const variationwarning = ref(false);

function cartAddStore() {
  if (selectedVariation.value !== "" || product[0].variations == "") {
    addToCart({
      id: product[0].id,
      amount: 1,
      image: product[0].images[0].src,
      title: product[0].title,
      variation: selectedVariation.value,
      price: product[0].price,
      shipprice: product[0].shipprice,
    });

    variationwarning.value = false;
  } else {
    variationwarning.value = true;
  }
}

const btcprice = await $fetch(
  "https://api.coinbase.com/v2/exchange-rates?currency=" +
    ticker.fiat.denomination
);

const btcusdprice = await $fetch(
  "https://api.coinbase.com/v2/exchange-rates?currency=BTC"
);

const btcprices = Number(btcprice.data.rates.BTC).toFixed(8);

const btcusdprices = Number(btcusdprice.data.rates.USD).toFixed(2);


import {
  BitcoinIcon,
  SatoshiV2Icon,
  NoDollarsIcon,
} from "@bitcoin-design/bitcoin-icons-vue/filled";

import data from "~/config/products";

import ticker from "~/config/setup";

import design from "~/config/design";

const tickersymbol = ticker.fiat.symbol;

const products = data;

const route = useRoute();

const slugroute = route.params.slug;

// console.log(route);

const product = products.filter((item) => item.id == slugroute);

const selectedVariation = ref("");

const { t } = useI18n({ useScope: "local" });
</script>
<i18n lang="json">
{
  "da": {
    "Addtocart": "Tilføj til kurv",
    "Nostock": "Udsolgt",
    "Lastitems": "Få på lager",
    "Instock": "På lager",
    "Warning": "Ups, det ser ud til, at du ikke har valgt en produktvariation"
  },
  "de": {
    "Addtocart": "In den Warenkorb legen",
    "Nostock": "Ausverkauft",
    "Lastitems": "Letzte Stücke",
    "Instock": "Auf Lager",
    "Warning": "Hoppla, sieht so aus, als hättest du keine Produktvariante ausgewählt"
  },
  "en": {
    "Addtocart": "Add to cart",
    "Nostock": "Out of stock",
    "Lastitems": "Last items",
    "Instock": "In stock",
    "Warning": "Woops looks like you didn't select a product variation"
  },
  "es": {
    "Addtocart": "Añadir a la cesta",
    "Nostock": "Agotado",
    "Lastitems": "Últimas piezas",
    "Instock": "En stock",
    "Warning": "Ups, parece que no seleccionaste una variación del producto"
  },
  "fr": {
    "Addtocart": "Ajouter au panier",
    "Nostock": "Rupture de stock",
    "Lastitems": "Dernières pièces",
    "Instock": "Disponible",
    "Warning": "Oups, on dirait que vous n'avez pas sélectionné une variation de produit"
  },
  "nl": {
    "Addtocart": "Voeg toe aan winkelkar",
    "Nostock": "Uitverkocht",
    "Lastitems": "Laatste stuks",
    "Instock": "In voorraad",
    "Warning": "Oeps, het lijkt erop dat je geen productvariatie hebt geselecteerd"
  },
  "pt": {
    "Addtocart": "Adicionar ao carrinho",
    "Nostock": "Fora de estoque",
    "Lastitems": "Últimos itens",
    "Instock": "Em estoque",
    "Warning": "Ops, parece que você não selecionou uma variação do produto"
  }
}
</i18n>
