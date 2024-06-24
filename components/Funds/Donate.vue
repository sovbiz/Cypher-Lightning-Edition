<template>
  <div>
    <Script async src="/BTCart-Donate.js"></Script>
    <div class="mt-12"></div>
    <div class="">
      <lightning-donate
        name=""
        accent="#"
        :to="data.lightningaddress"
        image="https://imgproxy.snort.social/2FreqBTxidEv-TqLfKLlE0YwMvnSJup_aA2pQv61r-k//aHR0cHM6Ly9wZnAubm9zdHIuYnVpbGQvNjM3MjIxYjQxZjIxZTZkNTEyNmNiNDRlNjE3MmNmODYwMGNiMWZjMTk1MzQ2MWRlMDNkODBjZTk4Mzg0NTk1My5naWY"
      />
    </div>
  </div>
</template>
<script setup>
import data from "~/config/setup";
</script>
