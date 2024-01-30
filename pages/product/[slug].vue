<template>
  <div>

    <div v-if="product !== null">
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <TabGroup as="div" class="flex flex-col-reverse">
            <div
              class="mx-auto mt-6 w-full max-w-2xl block lg:max-w-none"
            >
              <TabList class="grid grid-cols-4 gap-6">
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

            <TabPanels class="aspect-h-1 aspect-w-1 w-full">
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
                {{ (product[0].price.usd * btcprices).toFixed(8) }}
                <BitcoinIcon
                  class="h-12 w-12 inline -mt-2"
                  aria-hidden="true"
                />
              </p>

              <p
                v-if="filtersList == 'Satoshi'"
                class="text-3xl text-gray-900 dark:text-white"
              >
                {{ (product[0].price.usd * btcprices * 100000000).toFixed(0) }}
                <SatoshiV2Icon
                  class="h-12 w-12 inline -mt-2"
                  aria-hidden="true"
                />
              </p>

              <p
                v-if="filtersList == 'Dollar Fiat'"
                class="text-3xl text-gray-900 dark:text-white"
              >
                {{ product[0].price.usd }} $
              </p>
            </div>

            <div class="w-full dark:text-white basis-full">
              <span
                v-if="product[0].stock == 'low'"
                class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
                ><span
                  class="flex w-2.5 h-2.5 bg-orange-400 rounded-full mr-1.5 flex-shrink-0"
                ></span
                >{{ t("Lastitems") }}</span
              >

              <span
                v-else-if="product[0].stock == 'out'"
                class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
                ><span
                  class="flex w-2.5 h-2.5 bg-red-400 rounded-full mr-1.5 flex-shrink-0"
                ></span
                >{{ t("Nostock") }}</span
              >

              <span
                v-else
                class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
                ><span
                  class="flex w-2.5 h-2.5 bg-green-400 rounded-full mr-1.5 flex-shrink-0"
                ></span
                >{{ t("Instock") }}</span
              >
            </div>

            <!-- Reviews -->
            <div class="mt-3">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <StarIcon
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :class="[
                      product.rating > rating
                        ? 'text-indigo-500'
                        : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0',
                    ]"
                    aria-hidden="true"
                  />
                </div>
                <p class="sr-only">{{ product.rating }} out of 5 stars</p>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Description</h3>

              <div
                class="space-y-6 text-base text-gray-700 dark:text-white"
                v-html="product[0].description"
              />
            </div>

            <div class="mt-6">
              <div class="mt-10 flex sm:flex-col1">
                <button
                  class="snipcart-add-item max-w-xs flex-1 bg-colorBtnLight hover:bg-colorBtnHoverLight dark:bg-colorBtnDark dark:hover:bg-colorBtnHoverDark border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white dark:text-black dark:hover:text-white sm:w-full"
                  @click="
                    addToCart({
                      id: product[0].id,
                      amount: 1,
                      image: product[0].images[0].src,
                      title: product[0].title,
                      price: product[0].price.usd,
                    })
                  "
                  :disabled="product[0].stock == 'out'"
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
          <div v-html="product[0].fulldescription" class="max-w-7xl dark:prose-invert prose md:prose-lg lg:prose-xl dark:md:proxe-lg-invert dark:lg:proxe-xl-invert mx-auto dark:text-white pb-16 px-4 md:px-0  mt-24"></div>
        
        
        
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
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/vue/24/outline";

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

const products = data;

const route = useRoute();

const slugroute = route.params.slug;

// console.log(route);

const product = products.filter((item) => item.id == slugroute);

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
    "Addtocart": "In den Warenkorb legen",
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
    "Lastitems": "Ultimas piezas",
    "Instock": "En stock"
  },
  "fr": {
    "Addtocart": "Ajouter au panier",
    "Nostock": "Rupture de stock",
    "Lastitems": "Dernières pièces",
    "Instock": "Disponible"
  },
  "nl": {
    "Addtocart": "Voeg toe aan winkelkar",
    "Nostock": "Uitverkocht",
    "Lastitems": "Laatste stuks",
    "Instock": "In voorraad"
  }
}
</i18n>
