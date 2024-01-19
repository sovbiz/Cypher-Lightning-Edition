<template>
  <div>
    <div
      class="bg-colorBgLight dark:bg-colorBgDark mt-6 w-full md:w-1/2 inline-block"
    >
      <p
        class="text-2xl font-medium text-center text-black text-center dark:text-white pt-4"
      >
        BITCOIN WALLET
      </p>

      <div class="mx-auto max-w-7xl">
        <div
          class="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-2 text-center"
        >
          <div
            class="bg-colorBgLight dark:bg-colorBgDark px-4 pt-4 sm:px-6 lg:px-8 text-center"
          >
            <p
              class="text-sm font-medium leading-6 text-black text-center dark:text-white text-center"
            >
              Current Balance
            </p>
            <p
              class="text-4xl font-semibold tracking-tight text-black text-center dark:text-white mt-2"
            >
              {{ totalbtc }}
              <span
                class="text-sm text-black text-center dark:text-white text-center"
                >BTC</span
              >
            </p>

            <p
              class="text-4xl font-semibold tracking-tight text-white text-center"
            >
              <span class="text-sm text-gray-400 text-center">± </span>
              <span class="text-sm text-black text-center dark:text-white">{{
                btcfiat
              }}</span>
              <span class="text-sm text-gray-400 text-center"> $</span>
            </p>
          </div>

          <div
            class="bg-colorBgLight dark:bg-colorBgDark px-4 py-6 sm:px-6 lg:px-8 text-center"
          >
            <p
              class="text-sm font-medium leading-6 text-black text-center dark:text-white text-center"
            >
              XPUB QR
            </p>

            <a
              :href="'https://blockstream.info/api/address/' + data.btcadress"
              target="blank"
            >
              <FundsQrcode :greeting-message="data.btcadress" />
            </a>

            <!-- <img
            class="h-24 mx-auto mt-1"
            src="/bitcoin.png"
            alt=""
          /> -->
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-colorBgLight dark:bg-colorBgDark mt-6 w-full md:w-1/2 inline-block"
    >
      <p
        class="text-2xl font-medium text-center text-black text-center dark:text-white pt-4"
      >
        LIGHTNING WALLET
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
              Current Balance
            </p>
            <p
              class="text-4xl font-semibold tracking-tight text-black text-center dark:text-white text-center mt-2"
            >
              {{ btclightning }}
              <span class="text-sm text-black text-center dark:text-white"
                >BTC</span
              >
            </p>

            <p
              class="text-4xl font-semibold tracking-tight text-white text-center"
            >
              <span class="text-sm text-gray-400 text-center">± </span>
              <span class="text-sm text-black text-center dark:text-white">{{
                lightningfiat
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
              Fundinq QR
            </p>
            <a href="https://getalby.com/p/cypherspace" target="blank">
              <FundsQrcode :greeting-message="data.lnurl" />
            </a>
            <!-- <img
            class="h-24 mx-auto mt-1"
            src="/lightning.png"
            alt=""
          /> -->
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

const totalbtc = (users.chain_stats.funded_txo_sum * 0.00000001).toFixed(8);

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

const btclightning = (0.00000001 * Number(balance.balance)).toFixed(8);

// const invoices = [{}]

const invoices = await $fetch("https://api.getalby.com/invoices", {
  method: "GET",
  headers: myHeaders,
}).catch((error) => {
  // Your error is here!
  console.log(error);
});

const btcprice = await $fetch(
  "https://app.yieldmonitor.io/api/v2/symbol/ym/33913"
);

const btcprices = Number(btcprice.symbols[0].price).toFixed(2);

const lightningfiat = (btcprices * btclightning).toFixed(2);
const btcfiat = (btcprices * totalbtc).toFixed(2);
</script>
