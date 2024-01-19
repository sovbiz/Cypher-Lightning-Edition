<script setup>
const { t } = useI18n({ useScope: "local" });
</script>
<i18n lang="json">
{
  "da": {
    "announcementOpenFinance": "Bekendtgørelse af vores åbne finansiering",
    "fundsLink": "Fonde",
    "bitcoinWebstackTitle": "Sovereign Webstack",
    "proofOfWorkPudding": "Vi sætter beviset for arbejde i budding",
    "buildBitcoinNostrDescription": "Opbyg Bitcoin & Nostr Økosystem Virksomheder og brug den bedste måde at farme bitcoin og stable sats!",
    "viewProjectsButton": "Se Projekter",
    "getStartedLink": "Kom i gang "
  },
  "de": {
    "announcementOpenFinance": "Ankündigung unserer offenen Finanzierung",
    "fundsLink": "Fonds",
    "bitcoinWebstackTitle": "Souveräner Webstack",
    "proofOfWorkPudding": "Wir setzen den Beweis der Arbeit in den Pudding",
    "buildBitcoinNostrDescription": "Bauen Sie Bitcoin & Nostr Ökosystem Geschäfte auf und nutzen Sie den besten Weg, um Bitcoin zu farmen und Sats zu stapeln!",
    "viewProjectsButton": "Projekte anzeigen",
    "getStartedLink": "Loslegen "
  },
  "en": {
    "announcementOpenFinance": "Announcing our open finance funding.",
    "fundsLink": "Funds",
    "bitcoinWebstackTitle": "Sovereign Webstack",
    "proofOfWorkPudding": "We put the proof of work in the pudding",
    "buildBitcoinNostrDescription": "Build Bitcoin & Nostr Ecosystem Businesses and utilise the best way to farm bitcoin and stack sats! Providing goods, services and solutions for bitcoin adoption and integrations.",
    "viewProjectsButton": "View Projects",
    "getStartedLink": "Get started "
  },
  "es": {
    "announcementOpenFinance": "Anunciando nuestra financiación de finanzas abiertas.",
    "fundsLink": "Fondos",
    "bitcoinWebstackTitle": "Pila web soberana",
    "proofOfWorkPudding": "Ponemos la prueba de trabajo en el pudín",
    "buildBitcoinNostrDescription": "Construye negocios del ecosistema de Bitcoin y Nostr y utiliza la mejor manera de cultivar bitcoin y acumular sats! Ofreciendo bienes, servicios y soluciones para la adopción e integración de bitcoin.",
    "viewProjectsButton": "Ver Proyectos",
    "getStartedLink": "Empezar "
  },
  "fr": {
    "announcementOpenFinance": "Annonce de notre financement de la finance ouverte.",
    "fundsLink": "Fonds",
    "bitcoinWebstackTitle": "Pile Web souveraine",
    "proofOfWorkPudding": "Nous mettons la preuve de travail dans le pudding",
    "buildBitcoinNostrDescription": "Construisez des entreprises de l'écosystème Bitcoin & Nostr et utilisez la meilleure façon de cultiver des bitcoins et d'empiler des sats! Fournissant des biens, des services et des solutions pour l'adoption et l'intégration du bitcoin.",
    "viewProjectsButton": "Voir les Projets",
    "getStartedLink": "Commencer "
  },
  "nl": {
    "announcementOpenFinance": "Aankondiging van onze open financiering.",
    "fundsLink": "Fondsen",
    "bitcoinWebstackTitle": "Soevereine webstack",
    "proofOfWorkPudding": "We steken de proof of work in de pudding",
    "buildBitcoinNostrDescription": "Bouw Bitcoin & Nostr Ecosysteem Bedrijven en gebruik de beste manier om bitcoin te verbouwen en sats te stapelen! Het leveren van goederen, diensten en oplossingen voor de adoptie en integratie van bitcoin.",
    "viewProjectsButton": "Bekijk Projecten",
    "getStartedLink": "Beginnen "
  }

}
</i18n>
<template>
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <!-- ...other elements... -->
    <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-24">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white/80 dark:hover:ring-white-100/20 dark:text-white">
          {{ t('announcementOpenFinance') }}
          <NuxtLink :to="localePath('/funds')" class="font-semibold text-indigo-600">{{ t('fundsLink') }} <span aria-hidden="true">&rarr;</span></NuxtLink>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">{{ t('bitcoinWebstackTitle') }}</h1>
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl my-4">{{ t('proofOfWorkPudding') }} <span class="text-4xl">🍮</span></h1>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white">{{ t('buildBitcoinNostrDescription') }}</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink :to="localePath('/projects')" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ t('viewProjectsButton') }}</NuxtLink>
            <NuxtLink :to="localePath('/setup')" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{{ t('getStartedLink') }} <span aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
    </div>
    <!-- ...other elements... -->
  </div>
</template>

