<template>
  <div>
    <Script async src="/BTCart-Alby-Trigger.js"></Script>
    <div class="">
      <lightning-fixed-alby-trigger
        name=""
        accent="#"
        :to="data.lnurl"
        image="https://yt3.googleusercontent.com/Bzg7FZWqeAqJJd8_4nGvQ6I36WJMYLdznrNMg970S5e_7fOetIyeSPYt3bUGZ1pLCNdB_iwPWF4=s900-c-k-c0x00ffffff-no-rj"
        button-text="Unlock with Alby"
        amounts="10,105,1000"
        orderid="#42069"
        :wizard=wizardkey
        freeamount=true
      />
    </div>
  </div>
</template>
<script setup>
import data from "~/config/setup";


const wizardkey = ref(false)


watch(wizardkey, (newValue, oldValue) => {
  console.log('myData changed from', oldValue, 'to', newValue);
});



</script>
