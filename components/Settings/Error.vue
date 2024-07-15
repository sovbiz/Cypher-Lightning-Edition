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
            {{ t("notfound") }}
          </h1>
          <p class="mt-2 text-base text-colorTxtLight dark:text-colorTxtDark">
            {{ t("subtitle") }}
          </p>
          <p class="mt-2 text-base text-colorTxtLight dark:text-colorTxtDark">
            {{ t("followtitle") }}
          </p>
          <div class="mt-6">
            <NuxtLink
              :to="slugroute"
              class="text-base font-medium text-yellow-400 dark:text-yellow-400 underline"
            >
              {{ t("homeroute") }}
              <span aria-hidden="true"> &rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
const route = useRoute();

const slugroute = route.fullPath.substring(3);

const { t } = useI18n({ useScope: "local" });
</script>
<i18n lang="json">
{
  "da": {
    "notfound": "Siden blev ikke fundet.",
    "subtitle": "Beklager, vi kunne ikke finde den side, du leder efter.",
    "followtitle": "Denne side er muligvis heller ikke tilgængelig på dit sprog",
    "homeroute": "Prøv at besøge siden på standardsproget"
  },
  "de": {
    "notfound": "Seite nicht gefunden.",
    "subtitle": "Entschuldigung, wir konnten die von Ihnen gesuchte Seite nicht finden.",
    "followtitle": "Diese Seite ist möglicherweise auch nicht in Ihrer Sprache verfügbar",
    "homeroute": "Versuchen Sie, die Seite in der Standardsprache zu besuchen"
  },
  "en": {
    "notfound": "Page not found.",
    "subtitle": "Sorry, we couldn’t find the page you’re looking for.",
    "followtitle": "This page might also not be available in your language",
    "homeroute": "Try visiting the page in the default language"
  },
  "es": {
    "notfound": "Página no encontrada.",
    "subtitle": "Lo sentimos, no pudimos encontrar la página que estás buscando.",
    "followtitle": "Esta página podría no estar disponible en tu idioma",
    "homeroute": "Intenta visitar la página en el idioma predeterminado"
  },
  "fr": {
    "notfound": "Page non trouvée.",
    "subtitle": "Désolé, nous n'avons pas pu trouver la page que vous cherchez.",
    "followtitle": "Cette page pourrait également ne pas être disponible dans votre langue",
    "homeroute": "Essayez de visiter la page dans la langue par défaut"
  },
  "nl": {
    "notfound": "Pagina niet gevonden.",
    "subtitle": "Sorry, we konden de pagina die u zocht niet vinden.",
    "followtitle": "Deze pagina is mogelijk ook niet beschikbaar in uw taal",
    "homeroute": "Probeer de pagina in de standaardtaal te bezoeken"
  },
  "pt": {
    "notfound": "Página não encontrada.",
    "subtitle": "Desculpe, não conseguimos encontrar a página que você está procurando.",
    "followtitle": "Esta página também pode não estar disponível no seu idioma",
    "homeroute": "Tente visitar a página no idioma padrão"
  }
}
</i18n>
