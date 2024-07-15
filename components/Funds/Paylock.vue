<template>
  <div>
    <Script async src="/BTCart-Alby-Trigger.js"></Script>
    <div class="">
      <lightning-fixed-alby-trigger
        name=""
        accent="#"
        :to="data.lightningaddress"
        image="/project/alby.png"
        button-text="Unlock with Alby"
        amounts="10,105,1000"
        orderid="#42069"
        :wizard="wizardkey"
        freeamount="true"
      />
    </div>
  </div>
</template>
<script setup>
import data from "~/config/setup";

const wizardkey = ref(false);

watch(wizardkey, (newValue, oldValue) => {
  console.log("myData changed from", oldValue, "to", newValue);
});
</script>
