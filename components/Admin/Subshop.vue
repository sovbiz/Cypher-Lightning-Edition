<template>
  <div class="max-w-4xl mx-auto">
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
      <NuxtLink
        :to="localePath(item.route)"
        v-for="item in stats"
        :key="item.name"
        class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
      >
        <dt class="truncate text-sm font-medium text-gray-500">
          {{ item.name }}

          <span
            v-if="item.name == 'Local Cart'"
            id="numbered"
            class="text-center font-semibold text-xs align-text-top px-1 text-white dark:text-gray-900 dark:bg-white bg-gray-900 rounded-xl h-4"
          >
            {{ totalItems }}</span
          >
        </dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          {{ item.stat }}
        </dd>
      </NuxtLink>
    </dl>
  </div>
</template>

<script setup>
import data from "~/config/setup";

const stats = [
  { name: "Shop Products", stat: "", route: "/admin/shop/" },
  { name: "Checkout", stat: "", route: "/admin/shop/checkout" },
  { name: "Local Cart", stat: "", route: "/cart" },
  { name: "Point of Sale", stat: "", route: "/admin/shop/pos" },
];

import { useProjectStore } from "~/store/shopcart";

const store = useProjectStore();
const totalItems = ref(store.getTotalItems());

// Watch for changes in the cartItems array
watch(
  () => store.cartItems,
  () => {
    totalItems.value = store.getTotalItems();
  },
  { deep: true }
);

onMounted(() => {
  totalItems.value = store.getTotalItems();
});
</script>
