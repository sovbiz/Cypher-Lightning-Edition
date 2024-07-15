<script setup>
const { data } = await useAsyncData("", () =>
  queryContent("/articles")
    .where({ _draft: false })
    .sort({ datetime: -1 })
    .find()
);

const posts = data;

const { t } = useI18n({ useScope: "local" });
// console.log(products);
</script>
<i18n lang="json">
{
  "da": {
    "title": "Seneste Nyheder",
    "subtitle": "Alt hvad vi nogensinde har skrevet i en simpel feed."
  },
  "de": {
    "title": "Neueste Nachrichten",
    "subtitle": "Alles, was wir jemals geschrieben haben, in einem einfachen Feed."
  },
  "en": {
    "title": "Latest News Feed",
    "subtitle": "Everything we've ever written in one simple feed."
  },
  "es": {
    "title": "Últimas Noticias",
    "subtitle": "Todo lo que hemos escrito en un feed sencillo."
  },
  "fr": {
    "title": "Dernières Nouvelles",
    "subtitle": "Tout ce que nous avons jamais écrit dans un flux simple."
  },
  "nl": {
    "title": "Laatste Nieuws",
    "subtitle": "Alles wat we ooit hebben geschreven in één eenvoudige feed."
  },
  "pt": {
    "title": "Últimas Notícias",
    "subtitle": "Tudo o que já escrevemos em um feed simples."
  }
}
</i18n>

<template>
  <div class="bg-colorBgLight dark:bg-colorBgDark pb-6 sm:pb-0 mt-12">
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
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-7xl">
        <div class="space-y-20 lg:mt-20 lg:space-y-20">
          <article
            v-for="post in posts"
            :key="post.id"
            class="relative isolate flex flex-col gap-8 lg:flex-row"
          >
            <div
              v-if="post._draft == false"
              class="relative aspect-[16/9] sm:aspect-[4/3] lg:w-1/3 lg:shrink-0"
            >
              <NuxtLink :to="localePath(post.href)">
                <img
                  :src="post.imagelink"
                  alt=""
                  class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div
                  class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
                />
              </NuxtLink>
            </div>
            <div v-if="post._draft == false">
              <div class="flex items-center gap-x-4 text-xs">
                <time
                  :datetime="post.date"
                  class="text-gray-500 dark:text-white"
                  >{{ post.date }}</time
                >
                <div
                  v-if="post.categorytitle"
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-100"
                >
                  {{ post.categorytitle }}
                </div>
              </div>

              <div class="group relative">
                <h3
                  class="mt-3 text-3xl font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-gray-300 dark:text-gray-100"
                >
                  <NuxtLink :to="localePath(post.href)">
                    <span class="absolute inset-0" />
                    {{ post.article }}
                  </NuxtLink>
                </h3>
                <p
                  class="mt-5 text-sm leading-6 text-gray-900 dark:text-gray-100"
                >
                  {{ post.description }}
                </p>
              </div>
              <div class="mt-6 flex border-t border-gray-900/5 pt-6">
                <div class="relative flex items-center gap-x-4">
                  <img
                    v-if="post.authorimageUrl"
                    :src="post.authorimageUrl"
                    alt=""
                    class="h-16 w-16 rounded-full bg-gray-50"
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
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
