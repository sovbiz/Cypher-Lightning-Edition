<template>
  <div>
    <div v-if="qrCodeDataUrl" class="">
      <img :src="qrCodeDataUrl" alt="QR Code" class="w-24 mx-auto" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  greetingMessage: String,
});

import QRCode from "qrcode";
const qrCodeDataUrl = ref(null);

onMounted(() => {
  QRCode.toDataURL(props.greetingMessage, (error, dataUrl) => {
    if (error) {
      console.error("Error generating QR code:", error);
    } else {
      qrCodeDataUrl.value = dataUrl;
    }
  });
});
</script>
