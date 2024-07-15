<script setup>
const { data } = await useAsyncData("home", () =>
  queryContent("articles")
    .where({ featured: true, _draft: false })
    .sort({ datetime: -1 })
    .limit(3)
    .find()
);

import ticker from "~/config/setup";

const posts = data;

const { t } = useI18n({ useScope: "local" });
// console.log(products);
</script>
<i18n lang="json">
{
  "da": {
    "title": "Fremhævede Artikler",
    "subtitle": "Sandsynligvis de ting, vi finder vigtigst at dele."
  },
  "de": {
    "title": "Ausgewählte Artikel",
    "subtitle": "Wahrscheinlich die Dinge, die wir am wichtigsten finden, zu teilen."
  },
  "en": {
    "title": "Featured Articles",
    "subtitle": "Probably the things we find the most important to share."
  },
  "es": {
    "title": "Artículos Destacados",
    "subtitle": "Probablemente las cosas que consideramos más importantes para compartir."
  },
  "fr": {
    "title": "Articles en Vedette",
    "subtitle": "Probablement les choses que nous trouvons les plus importantes à partager."
  },
  "nl": {
    "title": "Aanbevolen Artikelen",
    "subtitle": "Waarschijnlijk de dingen die we het belangrijkst vinden om te delen."
  },
  "pt": {
    "title": "Artigos em Destaque",
    "subtitle": "Provavelmente as coisas que achamos mais importantes para compartilhar."
  }
}
</i18n>

<template>
  <div
    class="bg-colorBgLight dark:bg-colorBgDark sm:pt-0 my-24"
    v-if="ticker.blog"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
        >
          {{ t("title") }}
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-900 dark:text-gray-100">
          {{ t("subtitle") }}
        </p>
      </div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 mt-12"
      >
        <article
          v-for="post in posts"
          :key="post.id"
          class="flex flex-col items-start"
        >
          <NuxtLink v-if="post._draft == false" :to="localePath(post.href)">
            <div class="relative w-full">
              <img
                :src="post.imagelink"
                alt=""
                class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div
                class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
              />
            </div>
          </NuxtLink>
          <div v-if="post._draft == false" class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time
                :datetime="post.datetime"
                class="text-gray-500 dark:text-white"
                >{{ post.date }}</time
              >
              <NuxtLink
                v-if="post.categorytitle"
                :to="localePath('post.href')"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-100"
                >{{ post.categorytitle }}</NuxtLink
              >
            </div>
            <div class="group relative">
              <h3
                class="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white dark:text-gray-100"
              >
                <NuxtLink :to="localePath(post.href)">
                  <span class="absolute inset-0" />
                  {{ post.article }}
                </NuxtLink>
              </h3>
              <p
                class="mt-5 line-clamp-3 text-sm leading-6 text-gray-900 dark:text-gray-100"
              >
                {{ post.description }}
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                v-if="post.authorimageUrl"
                :src="post.authorimageUrl"
                alt=""
                class="h-10 w-10 rounded-full bg-gray-100"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900 dark:text-white">
                  <a :href="post.authorhref" target="_blank">
                    <span class="absolute inset-0" />
                    {{ post.authorname }}
                  </a>
                </p>
                <p class="text-gray-900 dark:text-gray-100">
                  {{ post.authorrole }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
