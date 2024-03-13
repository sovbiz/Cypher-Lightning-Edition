<template>
  <div class="">
    <div class="mx-auto max-w-7xl px-6 py-12">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">Frequently asked questions</h2>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600  dark:text-white">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const faqs = [
  {
    question: "Where do I Start ?",
    answer:
      "First Stay Humble & keep stacking ! Next Download and install the latest Nodejs LTS  from nodejs.org and run the following command in a terminal npx create-cypher",
  },
  {
    question: "How to change settings ?",
    answer:
      "All configurable information is set in the config.json your products are in shop.json, Admin section to help you set and validate products is in the works. ",
  },
  {
    question: "How do i post a new article",
    answer:
      "Drop your markdown file in the articles folder, thats it.",
  },
  {
    question: "How to add products ?",
    answer:
      "All your products are stored in the shop.json file in the config folder, an Admin section to help you set and validate products is in the works.",
  },
  {
    question: "How to deploy ? ",
    answer:
      "One of the easiest ways is to provide your repo over github to cloudflare, vercel,.. to deploy run npm run build",
  },
  {
    question: "How to backup ? ",
    answer:
      "Your project enless components are modified only carries 3 folders that are needed for the build process (config, content & public), copy these to have a backup of your data.",
  },
  {
    question: "How to upgrade to a new versions ",
    answer:
      "Copy (config, content & public) folders from the old repo in the new version",
  }
  // More questions...
]
</script>