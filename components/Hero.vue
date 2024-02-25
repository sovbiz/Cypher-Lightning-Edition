<script setup>
const { t } = useI18n({ useScope: "local" });

import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid'

import data from "~/config/setup";

</script>

<template>
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <!-- ...other elements... -->



    <div class="rounded-md bg-yellow-50 p-4 max-w-3xl mx-auto" v-if="data.lnurl =='cypherspace@getalby.com' || data.btcadress =='bc1q5j9h5dfr6gctjc0tl9gaz02f0p0qs7ecdlcat8' || data.orderwebhook =='https://discord.com/api/webhooks/1210994387660705923/ndfQLtY2aEXIV7Cjui9Hna3_dXEN2m_IjRTLr8M-H0OQIAKZ9N8VqicoeAz-GB1kZaCG'">
    <div class="flex">
      <div class="flex-shrink-0">
        <ExclamationTriangleIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-yellow-800">{{ t('line1') }}</h3>
        <div class="mt-2 text-sm text-yellow-700">
          <p>{{ t('line2') }} <a href="https://discord.gg/2MDsHHy6Yv" target="blank" class="underline" >{{ t('line3') }}</a>  {{ t('line4') }}</p>
          <p class="mt-6">{{ t('line5') }} <NuxtLink :to="localePath('/checklist')" class="underline"> {{ t('line6') }} </NuxtLink> {{ t('line7') }}</p>
        </div>
      </div>
    </div>
  </div>



    <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-24">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">{{data.name}}</h1>
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl my-4">{{ t('proofOfWorkPudding') }} <span class="text-4xl">🍮</span></h1>
        <!-- <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white">{{ t('buildBitcoinNostrDescription') }}</p> -->
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink :to="localePath('/shop')" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ t('viewProjectsButton') }}</NuxtLink>
            <NuxtLink :to="localePath('/blog')" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{{ t('getStartedLink') }} <span aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
    </div>
    <!-- ...other elements... -->
  </div>
</template>

<i18n lang="json">
  {
    "da": {
      "line1": "Opmærksomhed nødvendig",
      "line2": "I øjeblikket er demo-legitimationsoplysninger indstillet, du skal ændre LNUrl, btcaddress og orderwebhook i config/setup.json-filen. hvis du bare vil demonstrere skabelonen, bør alt fungere, ordrer fra butikken sendes til",
      "line3": "en åben discord-kanal",
      "line4": "og midler sendes til en prism tegnebog for bidragydere.",
      "line5": "Du kan også kigge på",
      "line6": "tjeklisten",
      "line7": "dette er ting, du stadig bør brande / tilpasse før du sætter i produktion.",
      "bitcoinWebstackTitle": "Sovereign Space",
      "proofOfWorkPudding": "Velkommen til vores digitale hjørne udforsk indhold og produkter",
      "buildBitcoinNostrDescription": "Byg Bitcoin & Nostr Ecosystem virksomheder og udnyt den bedste måde at farme bitcoin og stable sats! Leverer varer, tjenester og løsninger til bitcoin adoption og integration.",
      "viewProjectsButton": "Se Butik",
      "getStartedLink": "Begynd at læse"
    },
    "de": {
      "line1": "Aufmerksamkeit benötigt",
      "line2": "Derzeit sind Demozugangsdaten eingestellt, Sie sollten LNUrl, btcaddress und orderwebhook in der Datei config/setup.json ändern. Wenn Sie nur die Vorlage demonstrieren möchten, sollte alles funktionieren, Bestellungen des Shops werden gesendet an",
      "line3": "einen offenen Discord-Kanal",
      "line4": "und Gelder werden an eine Prism-Wallet für Mitwirkende gesendet.",
      "line5": "Sie können auch einen Blick werfen auf",
      "line6": "die Checkliste",
      "line7": "das sind Dinge, die Sie noch markieren / anpassen sollten, bevor Sie in Produktion gehen.",
      "bitcoinWebstackTitle": "Sovereign Space",
      "proofOfWorkPudding": "Willkommen in unserer digitalen Ecke erkunden Sie Inhalte und Produkte",
      "buildBitcoinNostrDescription": "Bauen Sie Bitcoin & Nostr Ökosystem-Unternehmen und nutzen Sie den besten Weg, um Bitcoin zu farmen und Sats zu stapeln! Bereitstellung von Waren, Dienstleistungen und Lösungen für die Bitcoin-Adoption und Integration.",
      "viewProjectsButton": "Shop ansehen",
      "getStartedLink": "Beginnen Sie mit dem Lesen"
    },
    "es": {
      "line1": "Atención necesaria",
      "line2": "Actualmente se han configurado credenciales de demostración, debe cambiar el LNUrl, btcaddress y orderwebhook en el archivo config/setup.json. si solo desea demostrar la plantilla, todo debería funcionar, los pedidos de la tienda se envían a",
      "line3": "un canal abierto de discord",
      "line4": "y los fondos se envían a una billetera prism para los colaboradores.",
      "line5": "También puedes echar un vistazo a",
      "line6": "la lista de verificación",
      "line7": "estas son cosas que aún deberías personalizar antes de poner en producción.",
      "bitcoinWebstackTitle": "Espacio Soberano",
      "proofOfWorkPudding": "Bienvenido a nuestro rincón digital, explora contenido y productos",
      "buildBitcoinNostrDescription": "Construye negocios del ecosistema Bitcoin & Nostr y utiliza la mejor manera de farmear bitcoin y apilar sats! Ofreciendo bienes, servicios y soluciones para la adopción e integración de bitcoin.",
      "viewProjectsButton": "Ver Tienda",
      "getStartedLink": "Comenzar a leer"
    },
    "en": {
    "line1": "Attention needed",
    "line2": "Currently demo credentials are set, you should change the LNUrl, btcaddress and orderwebhook in the config/setup.json file. if you just want to demo the template everything should work orders of the shop are send to",
    "line3": "an open discord chanel",
    "line4": "and funds are send to a prism wallet for contributors.",
    "line5": "You can also have a look at",
    "line6": "the checklist ",
    "line7": "these are things you should still brand / customise before putting in production.",
    "bitcoinWebstackTitle": "Sovereign Space",
    "proofOfWorkPudding": "Welcome to our digital corner explore content and products",
    "buildBitcoinNostrDescription": "Build Bitcoin & Nostr Ecosystem Businesses and utilise the best way to farm bitcoin and stack sats! Providing goods, services and solutions for bitcoin adoption and integrations.",
    "viewProjectsButton": "View Shop",
    "getStartedLink": "Start Reading "
  },
    "fr": {
      "line1": "Attention nécessaire",
      "line2": "Actuellement, les identifiants de démo sont définis, vous devriez changer le LNUrl, btcaddress et orderwebhook dans le fichier config/setup.json. si vous voulez juste démontrer le modèle, tout devrait fonctionner, les commandes du magasin sont envoyées à",
      "line3": "un canal discord ouvert",
      "line4": "et les fonds sont envoyés à un portefeuille prism pour les contributeurs.",
      "line5": "Vous pouvez également jeter un œil à",
      "line6": "la liste de contrôle",
      "line7": "ce sont des choses que vous devriez encore personnaliser avant de mettre en production.",
      "bitcoinWebstackTitle": "Espace Souverain",
      "proofOfWorkPudding": "Bienvenue dans notre coin numérique explorez le contenu et les produits",
      "buildBitcoinNostrDescription": "Construisez des entreprises de l'écosystème Bitcoin & Nostr et utilisez la meilleure façon de farmer des bitcoins et d'empiler des sats ! Fournissant des biens, des services et des solutions pour l'adoption et l'intégration du bitcoin.",
      "viewProjectsButton": "Voir la Boutique",
      "getStartedLink": "Commencer à lire"
    },
    "nl": {
      "line1": "Aandacht nodig",
      "line2": "Op dit moment zijn demo-gegevens ingesteld, u moet de LNUrl, btcaddress en orderwebhook wijzigen in het config/setup.json-bestand. als u alleen de sjabloon wilt demonstreren, zou alles moeten werken, bestellingen van de winkel worden verzonden naar",
      "line3": "een open discord-kanaal",
      "line4": "en fondsen worden verzonden naar een prism portemonnee voor bijdragers.",
      "line5": "Je kunt ook kijken naar",
      "line6": "de checklist",
      "line7": "dit zijn dingen die je nog moet merken / aanpassen voordat je in productie gaat.",
      "bitcoinWebstackTitle": "Soevereine Ruimte",
      "proofOfWorkPudding": "Welkom in onze digitale hoek, verken inhoud en producten",
      "buildBitcoinNostrDescription": "Bouw Bitcoin & Nostr Ecosysteem Bedrijven en gebruik de beste manier om bitcoin te farmen en sats te stapelen! Het leveren van goederen, diensten en oplossingen voor bitcoin adoptie en integratie.",
      "viewProjectsButton": "Bekijk Winkel",
      "getStartedLink": "Begin met lezen"
    }
  }
  
  </i18n>