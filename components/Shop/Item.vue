<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div
        class="rounded-md bg-yellow-50 p-4 max-w-3xl mx-auto border-2 border-black dark:border-white"
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

      <div class="flex md:gap-x-6 flex-col md:flex-row">
        <!-- Image gallery -->

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

        <!-- Product info -->
        <div class="mt-2 px-4 sm:px-0 lg:mt-0 w-3/4 inline text-left mx-auto">
          <p
            class="text-xl pt-4 font-bold tracking-tight text-colorTxtLight dark:text-colorTxtDark"
          >
            {{ product.title }}
          </p>

          <div>
            <h2 class="sr-only">Product information</h2>

            <p
              v-if="filtersList == 'Bitcoin'"
              class="text-xl text-gray-900 dark:text-white"
            >
              {{ (product.price * btcprices).toFixed(8) }}
              <BitcoinIcon class="h-6 w-6 inline -mt-1" aria-hidden="true" />
            </p>

            <p
              v-if="filtersList == 'Sats'"
              class="text-xl text-gray-900 dark:text-white"
            >
              {{ (product.price * btcprices * 100000000).toFixed(0) }}
              <SatoshiV2Icon class="h-6 w-6 inline -mt-1" aria-hidden="true" />
            </p>



            <p
                            v-if="filtersList == 'Fiat' && ticker.fiat.denomination != 'BTC'"
                            class="text-xl text-gray-900 dark:text-white"
                          >
                            {{ product.price }} {{ tickersymbol }}
                          </p>

                          <p
                            v-if="filtersList == 'Fiat' && ticker.fiat.denomination == 'BTC'"
                           class="text-xl text-gray-900 dark:text-white"
                          >
                          {{ (product.price * btcusdprices).toFixed(2) }} $
                          </p>







          </div>

          <div class="w-full dark:text-white basis-full">
            <span
              v-if="product.stock > 5 && product.stock != 0"
              class="flex items-center text-sm font-medium text-gray-900 dark:text-white"
              ><span
                class="flex w-2.5 h-2.5 bg-green-400 rounded-full mr-1.5 flex-shrink-0"
              ></span
              >{{ t("Instock") }}</span
            >

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
          </div>

          <div class="mt-2">
            <h3 class="sr-only">Description</h3>

            <div
              class="space-y-6 text-base text-colorTxtLight dark:text-colorTxtDark"
              v-html="product.description"
            />
          </div>

          <div class="mt-6" v-if="product.variations != ''">
            <RadioGroup v-model="selectedVariation" class="mt-2">
              <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
              <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                <RadioGroupOption
                  as="template"
                  v-for="size in product.variations"
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
            <div class="sm:flex-col flex">
              <button
                class="mt-2 w-full snipcart-add-item hover:shadow-lg font-semibold py-1 px-4 rounded shadow max-h-10 text-black dark:text-white dark:hover:text-black hover:text-white bg-white hover:bg-black dark:bg-gray-700 dark:hover:bg-white"
                @click="cartAddStore()"
                :disabled="product.stock == 0"
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
import {
  ExclamationTriangleIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/20/solid";

import { useFiltersStore } from "~/store/currency";
const filtersStore = useFiltersStore();
const { addValueToFilterList } = filtersStore;
const { filtersList } = storeToRefs(filtersStore);

import { useProjectStore } from "~/store/shopcart";

import ticker from "~/config/setup";

import design from "~/config/design";

const tickersymbol = ticker.fiat.symbol;

const cartStore = useProjectStore();
const { addToCart } = cartStore;

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

const props = defineProps({
  productid: {
    type: String,
    default: "3",
  },
});

// console.log(props.productid);

const producten = data;

const selectedVariation = ref("");

const variationwarning = ref(false);

watch(selectedVariation, (newValue) => {
  console.log("Checkbox state is now:", selectedVariation.value);
});

function cartAddStore() {
  if (selectedVariation.value !== "" || product.variations == "") {
    addToCart({
      id: product.id,
      amount: 1,
      image: product.images[0].src,
      title: product.title,
      variation: selectedVariation.value,
      price: product.price,
      shipprice: product.shipprice,
    });

    variationwarning.value = false;
  } else {
    variationwarning.value = true;
  }
}

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
