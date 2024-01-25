<script setup>
</script>
<template>
  <div>

    <p class="text-white pt-24">This Posdst requires you to pay sats to read</p>

  <div
    class="max-w-4xl dark:prose-invert prose md:prose-lg lg:prose-xl dark:md:proxe-lg-invert dark:lg:proxe-xl-invert mx-auto dark:text-transparent pb-16 px-5 md:px-12 mt-24"
  >

    <ContentSlot :use="$slots.default" unwrap="p" class="text-transparent"/>
  </div>
  <div class=" border-2 flex ">
    <p>This Post requires you to pay sats to read</p>
    <FundsPaylock />

  </div>

</div>
</template>
