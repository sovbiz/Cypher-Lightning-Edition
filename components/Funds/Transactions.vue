<template>
  <div class="max-w-5xl mx-auto px-6">
    <h1 class="text-2xl sm:text-4xl text-center dark:text-white my-12">
      Lightning Transactions
    </h1>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2
        class="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 dark:text-white lg:mx-0 lg:max-w-none"
      >
        Recent activity
      </h2>
    </div>
    <div
      class="mt-6 overflow-hidden border-t border-gray-800 dark:border-gray-100"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <table class="w-full text-left">
            <thead class="sr-only">
              <tr>
                <th>Amount</th>
                <th class="hidden sm:table-cell">Client</th>
                <th>More details</th>
                <th>More details</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaction in invoices" :key="transaction.created_at">
                <td class="hidden py-5 pr-6 sm:table-cell">
                  <div class="text-sm leading-6 text-gray-900 dark:text-white">
                    {{ formatDate(transaction.created_at) }}
                  </div>
                  <div
                    class="mt-1 text-xs leading-5 text-gray-500 dark:text-white"
                  >
                    {{ formatTime(transaction.created_at) }}
                  </div>
                </td>
                <td class="relative py-5 pr-6">
                  <div class="flex gap-x-6">
                    <div v-if="transaction.type == 'incoming'">
                      <svg
                        class="hidden h-6 w-5 flex-none text-green-400 sm:block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>

                    <div v-if="transaction.type == 'outgoing'">
                      <svg
                        class="hidden h-6 w-5 flex-none text-red-400 sm:block rotate-180"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>

                    <div class="flex-auto">
                      <div class="flex items-start gap-x-3">
                        <div
                          class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                        >
                          {{ transaction.amount }} Sats
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="absolute bottom-0 right-full h-px w-screen bg-gray-700 dark:bg-gray-100"
                  />
                  <div
                    class="absolute bottom-0 left-0 h-px w-screen bg-gray-700 dark:bg-gray-100"
                  />
                </td>

                <td class="hidden py-5 pr-6 sm:table-cell w-1/4">
                  <div class="text-sm leading-6 text-gray-900 dark:text-white">
                    {{ transaction.comment }}
                  </div>
                </td>
                <td class="py-5 text-right">
                  <div class="flex justify-end">

                    <p class="text-gray-900 dark:text-white">
                      {{ transaction.payer_name }}
                    </p>
                  </div>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import data from "~/config/setup";

import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
} from "@heroicons/vue/20/solid";

const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", data.albytoken);


const invoices = await $fetch("https://api.getalby.com/invoices", {
  method: "GET",
  headers: myHeaders,
}).catch((error) => {
  // Your error is here!
  console.log(error);
});

console.log(invoices)
// const date = new Date(timestamp);
// const options = { year: 'numeric', month: 'long', day: 'numeric' };
// const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
// console.log(formattedDate); // prints "March 24, 2021"

function formatDate(time) {
  const date = new Date(time);

  // Get year, month, and day part from the date
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });

  return `${day}/${month}/${year}`;
}

function formatTime(time) {
  const date = new Date(time);

  // Get year, month, and day part from the date
  const hour = date.toLocaleString("default", { hour: "numeric" });
  const minutes = date.toLocaleString("default", { minute: "2-digit" });
  const seconds = date.toLocaleString("default", { second: "2-digit" });

  return `${hour}:${minutes}:${seconds}`;
}

</script>
