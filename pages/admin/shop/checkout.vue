<template>
  <div class="px-6">
    <h1 class="text-black text-4xl max-w-4xl mx-auto my-6 dark:text-white">
      Checkout
    </h1>

    <!-- <p>Set your type of cart implementation ( Simple, bitcoin connect, btc pay, LNBits)</p>
<p> Set the counties you want to ship to </p>
<p> Shipping rates </p>
         -->


         <AdminSubshop class="mt-12"/>




    <form class="max-w-4xl mx-auto">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <!-- <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-white">Shopping cart</h2> -->

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-4">
              <label
                for="location"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Select Cart</label
              >
              <select
                id="location"
                name="location"
                class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option selected="">Simple</option>
                <option>Bitcoin Connect</option>
                <option>LNBits</option>
                <option>BTCPay</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2
          class="text-base font-semibold leading-7 text-gray-900 dark:text-white"
        >
          Fiat Ticker
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
          One day this will be renamed BTC Ticker & a stable trusted API
          integration. <br />
          solution suggested from uncle jim (-> super test net) in btcprice
          folder (still needs integration)
        </p>

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend
              class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Select Exchanges to add to the median pool (more is better 🤷‍♂️)
            </legend>

            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    checked
                  />
                </div>
                <div class="text-sm leading-6">
                  <label class="font-medium text-gray-900 dark:text-white"
                    >Coinbase</label
                  >
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    checked
                  />
                </div>
                <div class="text-sm leading-6">
                  <label class="font-medium text-gray-900 dark:text-white"
                    >Kraken</label
                  >
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    checked
                  />
                </div>
                <div class="text-sm leading-6">
                  <label
                    for="candidates"
                    class="font-medium text-gray-900 dark:text-white"
                    >Coindesk</label
                  >
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    checked
                  />
                </div>
                <div class="text-sm leading-6">
                  <label class="font-medium text-gray-900 dark:text-white"
                    >Gemini</label
                  >
                </div>
              </div>

              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    checked
                  />
                </div>
                <div class="text-sm leading-6">
                  <label class="font-medium text-gray-900 dark:text-white"
                    >Coingecko</label
                  >
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
</script>
