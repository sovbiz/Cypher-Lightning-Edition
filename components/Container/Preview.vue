<template>
  <div class="max-h-screen">
    <ContainerPaywall class="z-10 absolute top-1/4 md:top-1/2 px-6" />

    <div
      class="max-h-screen p-4 mx-auto overflow-hidden relative after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-full after:bg-gradient-to-b after:from-transparent after:to-colorBgLight dark:after:to-colorBgDark"
    >
      <div
        class="max-w-4xl dark:prose-invert prose md:prose-lg lg:prose-xl dark:md:proxe-lg-invert dark:lg:proxe-xl-invert mx-auto dark:text-white pb-16 px-5 md:px-12 mt-24"
      >
        <ContentSlot :use="$slots.default" unwrap="p" class="fadeout" />
      </div>
    </div>
  </div>
</template>
<script setup></script>
