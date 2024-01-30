<script setup></script>
<template>
  <div class="flex flex-col lg:flex-row max-w-7xl mx-auto">
    <div
      class="dark:prose-invert prose md:prose-lg lg:prose-lg dark:md:proxe-lg-invert dark:lg:proxe-xl-invert mx-auto dark:text-white pb-16 px-5 md:px-12 mt-24"
    >
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
    <div class="w-full xl:w-1/3 mb-6 lg:mt-24 mr-6">
      <div
        class="rounded-3xl dark:border-colorBgLight border-colorBgDark border-2 mx-12"
      >
        <div class="mt-6 lg:mt-12 mx-12">
          <h2 class="text-2xl text-center">👋 Hey thanks for visiting</h2>

          <p class="mt-2 text-center">
            We don't run add's or track you on our site but we could use a sats
            donation to keep the 💡 on and the 🌈 flowing. Any satoshi amount is
            appreciated .
          </p>
        </div>

        <FundsDonate />
      </div>
    </div>
  </div>
</template>
