<script setup>
</script>
<template>
  <div class="flex max-w-7xl mx-auto">
  <div
    class=" dark:prose-invert prose md:prose-lg lg:prose-lg dark:md:proxe-lg-invert dark:lg:proxe-xl-invert mx-auto dark:text-white pb-16 px-5 md:px-12 mt-24"
  >
    <ContentSlot :use="$slots.default" unwrap="p" />
  
  </div>
  <div class="w-1/4 mt-12">


    <FundsDonate />


  </div>
</div>
</template>
