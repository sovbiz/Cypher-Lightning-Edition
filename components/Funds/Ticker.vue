<script setup>
import { storeToRefs } from "pinia";

import { ticker } from "~/btcprice/ticker";

const btcprices = ticker();


import {
  BitcoinIcon,
  SatoshiV2Icon,
  NoDollarsIcon,
} from "@bitcoin-design/bitcoin-icons-vue/filled";

const stats = [


  { id: 1, description: 'Current +- Bitcoin Fiat Dollar Price', stat: btcprices.btcprice, icon: BitcoinIcon, denominator: ' $ ', changeType: 'increase' },
  { id: 2, description: 'Current +- Amount of Sats per Dollar', stat: btcprices.onedollarsatprice, icon: SatoshiV2Icon, denominator: ' Sats ', changeType: 'increase' },
  { id: 3, description: 'Current +- Amount of Btc per Dollar', stat: btcprices.onedollarbtcprice, icon: NoDollarsIcon, denominator: ' Btc ', changeType: 'decrease' },
]

</script>

<template>
  <div class="max-w-7xl mx-auto px-12">

    <div>
    <h3 class="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-3">
      <div v-for="item in stats" :key="item.id" class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
        <dt>
          <div class="absolute rounded-md bg-colorBgDark p-3">
            <component :is="item.icon" class="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <p class="ml-16 truncate text-sm font-medium text-gray-500">{{ item.name }}</p>
        </dt>
        <dd class="ml-16 flex items-baseline pb-6 sm:pb-7">
          <p class="text-2xl font-semibold text-gray-900">{{ item.stat.value}} {{ item.denominator }}</p>
          <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <p  class="font-medium text-colorBgDark hover:text-colorBgDark text-center"
                > {{ item.description }} </p
              >
            </div>
          </div>

        </dd>
      </div>
    </dl>
  </div>









  </div>
</template>
