<script>
export default {
  data() {
    return {
      toggleActive: "",
    };
  },
  created: function () {
    if (this.$colorMode.preference === "light") {
      this.toggleActive = false;
    } else {
      this.toggleActive = true;
    }
  },
  methods: {
    toggleTheme() {
      if (this.$colorMode.preference === "light") {
        this.$colorMode.preference = "dark";
      } else {
        this.$colorMode.preference = "light";
      }
    },
  },
};
</script>
<template>
  <div class="w-28">
    <div class="flex mt-1">
      <svg
        class="mr-2 dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      <div
        @click="toggleTheme"
        v-on:click="toggleActive = !toggleActive"
        class="border-2 border-black dark:border-white rounded-2xl"
      >
        <div
          class="w-12 h-6 flex items-center bg-white rounded-full p-1 duration-300 ease-in-out"
          :class="{ 'dark:bg-colorTxtLight': toggleActive }"
        >
          <div
            class="bg-colorBgDark dark:bg-colorBgLight w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
            :class="{ 'translate-x-6': toggleActive }"
          />
        </div>
      </div>
      <svg
        class="ml-2 dark:text-white"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          class="heroicon-ui"
          d="M9.57 3.38a8 8 0 0 0 10.4 10.4 1 1 0 0 1 1.31 1.3 10 10 0 1 1-13-13 1 1 0 0 1 1.3 1.3zM7.1 5.04A8 8 0 1 0 18.3 16.27 10 10 0 0 1 7.08 5.04z"
        />
      </svg>
    </div>
  </div>
</template>
