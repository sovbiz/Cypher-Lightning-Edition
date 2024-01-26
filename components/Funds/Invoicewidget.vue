<template>
    <div class="isolate bg-colorBgLight dark:bg-colorBgDark px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
        <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white ">Lightning Invoice Creator</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-white ">Stuff a invoice with a comment</p>
      </div>
      <div class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="lnurl" class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white ">Lightning Address</label>
            <div class="mt-2.5">
              <input type="text" v-model="to" name="lnurl" id="lnurl" autocomplete="lnurl" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white ">Ammount (in millisats)</label>
            <div class="mt-2.5">
              <input type="text" v-model="amount" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white ">Message</label>
            <div class="mt-2.5">
              <textarea name="message" v-model="comment" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <!-- <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
            <div class="flex h-6 items-center">
              <Switch v-model="agreed" :class="[agreed ? 'bg-indigo-600' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
                <span class="sr-only">Agree to policies</span>
                <span aria-hidden="true" :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
              </Switch>
            </div>
            <SwitchLabel class="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our
              {{ ' ' }}
              <a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
            </SwitchLabel>
          </SwitchGroup> -->
        </div>
        <div class="mt-10">
          <button type="submit" @click="handleSubmit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's Go ! ⚡️</button>
        </div>

        <img v-if="qrCodeDataUrl" :src="qrCodeDataUrl" alt="QR Code" class="w-48 mx-auto mt-12" />

      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
  import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  
  import QRCode from "qrcode";

// Define the data properties
const to = ref('')
const amount = ref('')
const comment = ref('')
const invoice = ref('')
const qrCodeDataUrl = ref('');

// Method to handle form submission
const handleSubmit = async () => {


    const response = await fetch('https://proxy.lightning.eu/generate-invoice?' + `ln=${to.value}&amount=${amount.value}&comment=${comment.value}`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
      "Content-Type": "application/json",
      },
    })

    
    invoice.value = await response.json()
    // invoice.value = invoiceurl._value.invoice.pr
    // console.log(invoice._value.invoice.pr)

    QRCode.toDataURL(invoice._value.invoice.pr, (error, dataUrl) => {
  if (error) {
    console.error("Error generating QR code:", error);
  } else {
    qrCodeDataUrl.value = dataUrl;
  }
});

}








</script>