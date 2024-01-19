<template>
  <div
    class="container relative max-w-4xl p-3 mx-auto mt-12 bg-gray-800 dark:bg-gray-400 text-left rounded-lg text-white"
  >
    <slot id="#code" />
    <button
      ref="copy"
      class="copy absolute text-white dark:text-white text-sm bottom-1.5 right-1.5 ring-1 dark:ring-black ring-white bg-colorHeaderBgLight p-2 rounded-lg mt-1"
      data-clipboard-target="#code"
    >
      <!-- <IconClipboardCheck v-if="state === 'copied'" class="w-5 h-5" />
      <IconClipboardCopy v-else class="w-5 h-5" /> -->

      <span v-if="state === 'copied'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 inline stroke-colorHighLight -mt-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </span>

      <span v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 inline stroke-colorHighLight -mt-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          />
        </svg>
      </span>
    </button>
  </div>
</template>
<script>
import Clipboard from "clipboard";
export default {
  data() {
    return {
      state: "init",
    };
  },
  mounted() {
    const copyCode = new Clipboard(this.$refs.copy, {
      target(trigger) {
        return trigger.previousElementSibling;
      },
    });
    copyCode.on("success", (event) => {
      event.clearSelection();
      this.state = "copied";
      window.setTimeout(() => {
        this.state = "init";
      }, 2000);
    });
  },
};
</script>
