<template>
  <div>
    <Script async src="/BTCart-Donate.js"></Script>
    <div class="mt-12"></div>
    <div class="">
      <lightning-donate
        name=""
        accent="#000"
        :to="data.lnurl"
        image="https://imgproxy.snort.social/2FreqBTxidEv-TqLfKLlE0YwMvnSJup_aA2pQv61r-k//aHR0cHM6Ly9wZnAubm9zdHIuYnVpbGQvNjM3MjIxYjQxZjIxZTZkNTEyNmNiNDRlNjE3MmNmODYwMGNiMWZjMTk1MzQ2MWRlMDNkODBjZTk4Mzg0NTk1My5naWY"
        shippingpay="0.0000,"
        payamount="1000,"
        setpayamount="0.00001,"
        products="Pass a product List or Item"
        orderid="#42069"
      />
    </div>
  </div>
</template>
<script setup>
import data from "~/config/setup";
</script>
