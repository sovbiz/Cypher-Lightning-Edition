<template>
  <div>
<CartSimple v-if="data.cart == 'simple'" />
<CartNew v-if="data.cart == 'latest'" />

  </div>
</template>
<script setup>
import data from "~/config/setup";

</script>