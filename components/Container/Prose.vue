<script setup></script>
<template>
  <div
    class="max-w-4xl dark:prose-invert prose md:prose-lg lg:prose-xl dark:md:proxe-lg-invert dark:lg:proxe-xl-invert mx-auto dark:text-white pb-16 px-5 md:px-12 mt-24"
  >
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
