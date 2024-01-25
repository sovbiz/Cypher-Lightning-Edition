<template>
  <div>
    <Script async src="/BTCart-Alby-Trigger.js"></Script>
    <div class="mt-12"></div>
    <div class="">
      <lightning-fixed-alby-trigger
        name=""
        accent="#"
        :to="data.lnurl"
        image="https://imgproxy.snort.social/2FreqBTxidEv-TqLfKLlE0YwMvnSJup_aA2pQv61r-k//aHR0cHM6Ly9wZnAubm9zdHIuYnVpbGQvNjM3MjIxYjQxZjIxZTZkNTEyNmNiNDRlNjE3MmNmODYwMGNiMWZjMTk1MzQ2MWRlMDNkODBjZTk4Mzg0NTk1My5naWY"
        button-text="UNLOCK CONTENT ALBY"
        amounts="10,105,1000"
        orderid="#42069"
        wizard=false
        freeamount=true
      />
    </div>
  </div>
</template>
<script setup>
import data from "~/config/setup";
</script>
