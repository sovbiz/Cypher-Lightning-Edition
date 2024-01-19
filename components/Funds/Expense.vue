<template>
  <div>
    <div class="bg-colorBgLight dark:bg-colorBgDark mt-6">
      <p
        class="text-2xl font-medium text-center text-black text-center dark:text-white pt-4"
      >
        FINANCE SUMMARY
      </p>

      <div class="mx-auto max-w-7xl">
        <div
          class="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-2"
        >
          <div
            class="bg-colorBgLight dark:bg-colorBgDark px-4 py-6 sm:px-6 lg:px-8"
          >
            <p
              class="text-sm font-medium leading-6 text-black text-center dark:text-white text-center"
            >
              TOTAL FUND AMOUNT
            </p>
            <p
              class="text-4xl font-semibold tracking-tight text-black text-center dark:text-white text-center"
            >
              {{ totalfund }}
              <span class="text-sm text-black text-center dark:text-white"
                >BTC</span
              >
            </p>

            <p
              class="text-4xl font-semibold tracking-tight text-white text-center"
            >
              <span class="text-sm text-gray-400 text-center">± </span>
              <span class="text-sm text-black text-center dark:text-white">{{
                totalfundfiat
              }}</span>
              <span class="text-sm text-gray-400 text-center"> $</span>
            </p>
          </div>
          <div
            class="bg-colorBgLight dark:bg-colorBgDark px-4 py-6 sm:px-6 lg:px-8"
          >
            <p
              class="text-sm font-medium leading-6 text-black text-center dark:text-white text-center"
            >
              MONTHLY BURN RATE
            </p>
            <p
              class="text-4xl font-semibold tracking-tight text-black text-center dark:text-white text-center"
            >
              {{ burnratebtc }}
              <span class="text-sm text-black text-center dark:text-white"
                >BTC</span
              >
            </p>

            <p
              class="text-4xl font-semibold tracking-tight text-white text-center"
            >
              <span class="text-sm text-gray-400 text-center">± </span>
              <span class="text-sm text-black text-center dark:text-white">{{
                burnfiat
              }}</span>
              <span class="text-sm text-gray-400 text-center"> $</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "~/config/setup";

const users = await $fetch(
  "https://blockstream.info/api/address/" + data.btcadress
).catch((error) => error.data);

const totalbtc = users.chain_stats.funded_txo_sum * 0.00000001;

// console.log(users.chain_stats.funded_txo_sum)

// console.log(totalbtc)

const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", data.albytoken);

//const balance = [{}]

const balance = await $fetch("https://api.getalby.com/balance", {
  method: "GET",
  headers: myHeaders,
}).catch((error) => {
  // Your error is here!
  console.log(error);
});

// console.log(balance.value)

const btclightning = 0.00000001 * Number(balance.balance);

//const invoices = [{}]
const invoices = await $fetch("https://api.getalby.com/invoices", {
  method: "GET",
  headers: myHeaders,
}).catch((error) => {
  // Your error is here!
  console.log(error);
});

// console.log(invoices)

const totalfund = (Number(btclightning) + Number(totalbtc)).toFixed(8);

const btcprice = await $fetch(
  "https://app.yieldmonitor.io/api/v2/symbol/ym/33913"
);

const btcprices = Number(btcprice.symbols[0].price).toFixed(2);

// console.log(btcprices)

const totalfundfiat = (btcprices * totalfund).toFixed(2);
const lightningfiat = btcprices;
const btcfiat = btcprices;
const burnratebtc = 0.00014528;
const burnfiat = (btcprices * burnratebtc).toFixed(2);
</script>
