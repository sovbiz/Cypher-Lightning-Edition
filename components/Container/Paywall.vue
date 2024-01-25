<script setup>
</script>
<template>
  <div>

  <div
    class="max-w-4xl dark:prose-invert prose md:prose-lg lg:prose-xl dark:md:proxe-lg-invert dark:lg:proxe-xl-invert mx-auto dark:text-white pb-16 px-5 md:px-12 mt-24"
  >
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
  <div class=" border-2 flex">
    <p>This Post requires you to pay sats to read</p>
    <FundsPaylock />

  </div>

</div>
</template>
