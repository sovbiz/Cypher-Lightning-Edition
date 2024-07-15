<script setup>
import ticker from "~/config/setup";

const btcprice = await $fetch(
  "https://api.coinbase.com/v2/exchange-rates?currency=" +
    ticker.fiat.denomination
);

const btcprices = Number(btcprice.data.rates.BTC).toFixed(8);
</script>
<template>
  <div>
    <p
      class="text-xs leading-5 text-black dark:text-black dark:text-white mt-12 block text-center"
    >
      Bitcoin Ticker: {{ btcprices }} {{ ticker.fiat.symbol }}
    </p>
  </div>
</template>
