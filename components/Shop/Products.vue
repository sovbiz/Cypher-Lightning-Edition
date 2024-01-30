<script setup>

import data from '~/config/shop'

  const products = data



  import { useFiltersStore } from '~/store/currency'
import { storeToRefs } from 'pinia'


import { useProjectStore } from '~/store/shopcart'


const cartStore = useProjectStore()
const { addToCart } = cartStore





const inputVal = ref('')

const filtersStore = useFiltersStore()
const { addValueToFilterList } = filtersStore
const { filtersList } = storeToRefs(filtersStore)




const btcprice = await $fetch('https://app.yieldmonitor.io/api/v2/symbol/ym/33913')

    const btcprices = 1 / (Number(btcprice.symbols[0].price)).toFixed(2) 

    import { BitcoinIcon, SatoshiV2Icon, NoDollarsIcon } from '@bitcoin-design/bitcoin-icons-vue/filled'


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
<template>
    <div class="bg-colorBgLight dark:bg-colorBgDark">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  
        <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in products" :key="product.id">
            <NuxtLink :to="localePath('/product/' + product.id )">

            <div class="relative">
              <div class="relative h-72 w-full overflow-hidden rounded-lg">
                <img :src="product.images[0].src" :alt="product.images[0].src" class="h-full w-full object-cover object-center" />
              </div>
              <div class="relative mt-4">
                <h3 class="text-sm font-medium text-gray-900 dark:text-white">{{ product.name }}</h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <!-- 
              <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />

                <p v-if="filtersList == 'Bitcoin'" class="relative text-lg font-semibold text-white">{{ (product.price.usd * btcprices).toFixed(8) }} <BitcoinIcon  class="h-6 w-6 inline" aria-hidden="true" /></p>

                <p v-if="filtersList == 'Satoshi'" class="relative text-lg font-semibold text-white">{{ (product.price.usd * btcprices * 100000000).toFixed(0) }} <SatoshiV2Icon class="h-6 w-6 inline" aria-hidden="true" /></p>

                <p v-if="filtersList == 'Dollar Fiat'" class="relative text-lg font-semibold text-white">{{ product.price.usd  }} $</p>


              </div>
              -->
            </div>

            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-lg font-extrabold text-gray-700 dark:text-white">
                  {{ product.title }}
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-white line-clamp-2  h-10">
                  {{ product.description }}
                </p>
              </div>

            </div>








            <div class="basis-full flex flex-col ">
              
              <div class="text-lg font-medium text-gray-900 dark:text-white w-full basis-full">



                <p v-if="filtersList == 'Bitcoin'" class="float-left dark:text-white font-semibold text-black">{{ (product.price.usd * btcprices).toFixed(8) }} <BitcoinIcon  class="h-6 w-6 inline" aria-hidden="true" /></p>

                <p v-if="filtersList == 'Satoshi'" class="float-left dark:text-white font-semibold text-black">{{ (product.price.usd * btcprices * 100000000).toFixed(0) }} <SatoshiV2Icon class="h-6 w-6 inline" aria-hidden="true" /></p>

                <p v-if="filtersList == 'Dollar Fiat'" class="float-left dark:text-white font-semibold text-black">{{ product.price.usd  }} $</p>








                <!-- <span class="text-right float-right dark:text-white" v-if="$store.state.currency.currency == 'eur' " > {{ p.price.eur }} €</span>

              <span class="text-right float-right dark:text-white" v-if="$store.state.currency.currency == 'usd' "> {{ p.price.usd }} $</span> -->
              </div>




          <div class="w-full dark:text-white basis-full"> 
            
            
            <span v-if="product.stock == 'low'" class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-orange-400 rounded-full mr-1.5 flex-shrink-0"></span>{{ t("Lastitems") }}</span>

            <span v-else-if="product.stock == 'out'"  class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-red-400 rounded-full mr-1.5 flex-shrink-0"></span>{{ t("Nostock") }}</span>

            <span v-else class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span class="flex w-2.5 h-2.5 bg-green-400 rounded-full mr-1.5 flex-shrink-0"></span>{{ t("Instock") }}</span>

          </div>


        </div>
















          </NuxtLink>

          <button
            class="mt-2 w-full snipcart-add-item hover:shadow-lg font-semibold py-2 px-4 rounded shadow max-h-10 text-black dark:text-white dark:hover:text-black hover:text-white
            
                            bg-white hover:bg-black
                dark:bg-gray-700 dark:hover:bg-white
            "
            @click="addToCart({ id: product.id, amount: 1, image: product.images[0].src, title: product.title, price: product.price.usd })"
            :disabled="product.stock == 'out'"
            >
          
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6 fill-gray-400 inline mr-4 mt-2"
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
  
