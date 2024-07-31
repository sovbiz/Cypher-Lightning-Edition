<script setup>
const { t } = useI18n({ useScope: "local" });

import { ExclamationTriangleIcon } from "@heroicons/vue/20/solid";

import data from "~/config/setup";

import design from "~/config/design";
</script>

<template>
  <div class="inline-block relative w-full">
    <!-- IMAGE BACKGROUND -->

    <div
      v-if="design.hero == 'image'"
      :class="[
        'min-h-screen isolate px-6 pt-14 lg:px-8 bg-hero bg-no-repeat md:bg-cover bg-center bg-fixed',
        `bg-[url('${design.herobackgroundimagepathlight}')] dark:bg-[url('${design.herobackgroundimagepathdark}')]`,
      ]"
    ></div>

    <!-- YOUTUBE BACKGROUND -->

    <div v-if="design.hero == 'youtube'" class="min-h-screen">
      <iframe
        class="w-full h-screen"
        :src="design.herobackgroundyoutubelink"
      ></iframe>
    </div>

    <!-- LOCAL BACKGROUND -->

    <div v-if="design.hero == 'video'" class="md:min-h-screen h-lvh">
      <video
        class="w-full h-screen object-cover hidden md:block"
        autoplay
        muted
        loop
      >
        <source :src="design.herobackgroundlocalvideopath" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    </div>

    <div class="absolute top-0 left-0 w-full mt-12 px-6">
      <div
        class="rounded-md bg-yellow-50 p-4 max-w-3xl mx-auto border-2 border-black dark:border-white"
        v-if="
          data.lightningaddress == 'cypher@npub.cash' ||
          data.btcadress == '' ||
          data.orderwebhook ==
            ''
        "
      >
        <div class="flex">
          <div class="flex-shrink-0">
            <ExclamationTriangleIcon
              class="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-yellow-800">
              {{ t("line1") }}
            </h3>
            <div class="mt-2 text-sm text-yellow-700">
              <p>
                {{ t("line2") }}
                <NuxtLink :to="localePath('/admin')" class="underline">
                  {{ t("adminPanel") }}</NuxtLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-4xl py-0 sm:py-12 lg:py-12">
        <div class="text-center">
          <img
            class="block mt-6 mx-auto h-48 md:h-72"
            :src="design.herologopath"
            :alt="data.name"
          />

          <h1
            v-if="!data.logo"
            class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-8xl"
          >
            {{ data.textlogo }}
          </h1>

          <h1
            class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl my-4"
          >
            {{ data.tagline }} <span class="text-4xl"></span>
          </h1>
          <!-- <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white">{{ t('buildBitcoinNostrDescription') }}</p> -->
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink
              :to="localePath('/shop')"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >{{ t("viewProjectsButton") }}</NuxtLink
            >



            <NuxtLink
              :to="localePath('/blog')"
              class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >{{ t("getStartedLink") }}
              <span aria-hidden="true">→</span></NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "da": {
    "line1": "Demo-legitimationsoplysninger opdaget!",
    "line2": "Skift LNaddress, btcaddress og orderwebhook i ",
    "line3": "en åben Discord-kanal",
    "line4": "og midler sendes til en Prism-tegnebog for bidragsydere.",
    "line5": "Du kan også tage et kig på",
    "line6": "tjeklisten",
    "line7": "dette er ting, du stadig bør mærke / tilpasse før du sætter i produktion.",
    "line8": "du kan se det aktuelle WIP lokale admin UI",
    "adminPanel": "config/setup.json",
    "bitcoinWebstackTitle": "Sovereign Space",
    "proofOfWorkPudding": "Velkommen til vores digitale hjørne udforsk indhold og produkter",
    "buildBitcoinNostrDescription": "Byg Bitcoin & Nostr Ecosystem virksomheder og udnyt den bedste måde at farme bitcoin og stable sats! Leverer varer, tjenester og løsninger til bitcoin adoption og integration.",
    "viewProjectsButton": "Se Butik",
    "getStartedLink": "Begynd at læse"
  },
  "de": {
    "line1": "Demo-Zugangsdaten erkannt!",
    "line2": "Ändern Sie LNaddress, btcaddress und orderwebhook in der ",
    "line3": "einen offenen Discord-Kanal",
    "line4": "und Gelder werden an eine Prism-Wallet für Mitwirkende gesendet.",
    "line5": "Sie können auch einen Blick werfen auf",
    "line6": "die Checkliste",
    "line7": "das sind Dinge, die Sie noch kennzeichnen / anpassen sollten, bevor Sie in Produktion gehen.",
    "line8": "Sie können die aktuelle WIP lokale Admin-Oberfläche einsehen",
    "adminPanel": "config/setup.json",
    "bitcoinWebstackTitle": "Sovereign Space",
    "proofOfWorkPudding": "Willkommen in unserer digitalen Ecke erkunden Sie Inhalte und Produkte",
    "buildBitcoinNostrDescription": "Bauen Sie Bitcoin & Nostr Ökosystem-Unternehmen und nutzen Sie den besten Weg, um Bitcoin zu farmen und Sats zu stapeln! Bereitstellung von Waren, Dienstleistungen und Lösungen für die Bitcoin-Adoption und Integration.",
    "viewProjectsButton": "Shop ansehen",
    "getStartedLink": "Beginnen Sie mit dem Lesen"
  },
  "es": {
    "line1": "¡Credenciales de demostración detectadas!",
    "line2": "Cambia LNaddress, btcaddress y orderwebhook en el archivo ",
    "line3": "un canal abierto de Discord",
    "line4": "y los fondos se envían a una billetera Prism para colaboradores.",
    "line5": "También puedes echar un vistazo a",
    "line6": "la lista de verificación",
    "line7": "estas son cosas que todavía deberías personalizar antes de poner en producción.",
    "line8": "puedes ver la UI de administración local WIP actual",
    "adminPanel": "config/setup.json",
    "bitcoinWebstackTitle": "Espacio Soberano",
    "proofOfWorkPudding": "Bienvenido a nuestro rincón digital, explora contenido y productos",
    "buildBitcoinNostrDescription": "Construye negocios del ecosistema Bitcoin & Nostr y utiliza la mejor manera de farmear bitcoin y apilar sats! Ofreciendo bienes, servicios y soluciones para la adopción e integración de bitcoin.",
    "viewProjectsButton": "Ver Tienda",
    "getStartedLink": "Comenzar a leer"
  },
  "en": {
    "line1": "Demo Crendentials Detected!",
    "line2": "Change the LNaddress, btcaddress and orderwebhook in the ",
    "line3": "an open discord chanel",
    "line4": "and funds are send to a prism wallet for contributors.",
    "line5": "You can also have a look at",
    "line6": "the checklist ",
    "line7": "these are things you should still brand / customise before putting in production.",
    "line8": "you can view the current WIP local admin UI ",
    "adminPanel": "config/setup.json",
    "bitcoinWebstackTitle": "Sovereign Space",
    "proofOfWorkPudding": "Welcome to our digital corner explore content and products",
    "buildBitcoinNostrDescription": "Build Bitcoin & Nostr Ecosystem Businesses and utilise the best way to farm bitcoin and stack sats! Providing goods, services and solutions for bitcoin adoption and integrations.",
    "viewProjectsButton": "View Shop",
    "getStartedLink": "Start Reading "
  },
  "fr": {
    "line1": "Identifiants de démo détectés !",
    "line2": "Changez LNaddress, btcaddress et orderwebhook dans le fichier ",
    "line3": "un canal Discord ouvert",
    "line4": "et les fonds sont envoyés à un portefeuille Prism pour les contributeurs.",
    "line5": "Vous pouvez également jeter un œil à",
    "line6": "la liste de contrôle",
    "line7": "ce sont des choses que vous devriez encore personnaliser avant de mettre en production.",
    "line8": "vous pouvez consulter l'interface administrateur locale WIP actuelle",
    "adminPanel": "config/setup.json",
    "bitcoinWebstackTitle": "Espace Souverain",
    "proofOfWorkPudding": "Bienvenue dans notre coin numérique, explorez le contenu et les produits",
    "buildBitcoinNostrDescription": "Construisez des entreprises de l'écosystème Bitcoin & Nostr et utilisez la meilleure façon de farmer des bitcoins et d'empiler des sats! Fournissant des biens, des services et des solutions pour l'adoption et l'intégration du bitcoin.",
    "viewProjectsButton": "Voir la Boutique",
    "getStartedLink": "Commencer à lire"
  },
  "nl": {
    "line1": "Demo-credentials gedetecteerd!",
    "line2": "Wijzig LNaddress, btcaddress en orderwebhook in het ",
    "line3": "een open Discord-kanaal",
    "line4": "en fondsen worden verzonden naar een Prism-portemonnee voor bijdragers.",
    "line5": "Je kunt ook kijken naar",
    "line6": "de checklist",
    "line7": "dit zijn dingen die je nog moet brandmerken / aanpassen voordat je in productie gaat.",
    "line8": "u kunt de huidige WIP lokale admin UI bekijken",
    "adminPanel": "config/setup.json",
    "bitcoinWebstackTitle": "Soevereine Ruimte",
    "proofOfWorkPudding": "Welkom in onze digitale hoek, verken inhoud en producten",
    "buildBitcoinNostrDescription": "Bouw Bitcoin & Nostr Ecosysteem Bedrijven en gebruik de beste manier om bitcoin te farmen en sats te stapelen! Het leveren van goederen, diensten en oplossingen voor bitcoin adoptie en integratie.",
    "viewProjectsButton": "Bekijk Winkel",
    "getStartedLink": "Begin met lezen"
  },
  "pt": {
    "line1": "Credenciais de demonstração detectadas!",
    "line2": "Altere o LNaddress, btcaddress e orderwebhook no ",
    "line3": "um canal aberto do Discord",
    "line4": "e os fundos são enviados para uma carteira Prism para colaboradores.",
    "line5": "Você também pode dar uma olhada na",
    "line6": "lista de verificação",
    "line7": "estas são coisas que você ainda deve personalizar antes de colocar em produção.",
    "line8": "você pode ver a interface de administração local WIP atual",
    "adminPanel": "config/setup.json",
    "bitcoinWebstackTitle": "Espaço Soberano",
    "proofOfWorkPudding": "Bem-vindo ao nosso canto digital, explore conteúdo e produtos",
    "buildBitcoinNostrDescription": "Construa negócios do ecossistema Bitcoin & Nostr e utilize a melhor maneira de minerar bitcoin e acumular sats! Fornecendo bens, serviços e soluções para a adoção e integração do bitcoin.",
    "viewProjectsButton": "Ver Loja",
    "getStartedLink": "Comece a Ler"
  }
}
</i18n>
