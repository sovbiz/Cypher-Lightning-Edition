<template>
  <div>
<CartSimple v-if="data.cart == 'simple'" />
  </div>
</template>
<script setup>
import data from "~/config/setup";

</script>