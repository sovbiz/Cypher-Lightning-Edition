<template>
  <div>
    <Script async src="/BTCart-Alby-Trigger.js"></Script>
    <div class="">
      <lightning-fixed-alby-trigger
        name=""
        accent="#"
        :to="data.lnurl"
        image=""
        button-text="Pay with Alby"
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
