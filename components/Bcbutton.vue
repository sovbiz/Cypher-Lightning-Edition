<script setup>
import { onMounted, ref } from 'vue';

// Load the Bitcoin Connect API and launch the modal
const loadBitcoinConnect = async () => {
  const { launchModal } = await import('https://esm.sh/@getalby/bitcoin-connect@3.5.3');
    // launchModal()
};

onMounted(() => {
  loadBitcoinConnect();
});

// Define the props for the button
const invoice = ref('your-invoice-string');
const title = ref('Pay with Bitcoin');
</script>

<template>
  <!-- Bitcoin Connect components are now available -->
  <bc-pay-button :invoice="invoice" :title="title"></bc-pay-button>
</template>
