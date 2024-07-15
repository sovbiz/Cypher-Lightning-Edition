<script setup></script>
<template>
  <div class="h-80 rounded-3xl w-full">
    <div
      class="flex md:h-80 md:flex-row flex-col bg-slate-200 dark:bg-colorBgDark dark:border-colorBgLight border-colorBgDark border-2 mx-auto max-w-7xl rounded-3xl px-4"
    >
      <div class="mt-12 flex-1">
        <h1 class="text-4xl text-center">402</h1>
        <h2 class="text-2xl text-center">This Post is pay to read</h2>

        <p class="mt-2 text-center">
          👋 Hey thanks for visiting this article, we don't run add's or track
          on our site but we could use a sats donation to keep the 💡 on and the
          🌈 flowing. Any satoshi amount is appreciated and unlocks the article,
          enless you are a code wizard 🪄.
        </p>
      </div>
      <div class="my-auto flex-1">
        <FundsPaylock />
      </div>
    </div>
  </div>
</template>
