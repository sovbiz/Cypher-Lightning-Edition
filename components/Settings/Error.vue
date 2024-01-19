<template>
  <div
    class="flex min-h-full flex-col bg-colorBgLight dark:bg-colorBgDark pt-40 pb-12"
  >
    <main
      class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"
    >
      <div class="pt-6 pb-16">
        <div class="text-center">
          <p
            class="text-4xl font-semibold dark:text-yellow-400 dark:text-black"
          >
            404
          </p>
          <h1
            class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-yellow-400 dark:text-yellow-400"
          >
            Page not found.
          </h1>
          <p class="mt-2 text-base text-colorTxtLight dark:text-colorTxtDark">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-6">
            <NuxtLink
              :to="localePath('/')"
              class="text-base font-medium text-yellow-400 dark:text-yellow-400"
            >
              Go back home
              <span aria-hidden="true"> &rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
</script>
