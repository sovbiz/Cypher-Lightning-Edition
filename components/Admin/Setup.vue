<template>
    <!-- <div class="h-full w-full  " style="z-index: 9999999;"> -->
      <div style="z-index: 99;" class="h-full w-full fixed bg-colorBgLight dark:bg-colorBgDark overflow-scroll isolate px-6 pt-14 lg:px-8 bg-[url('/stock/nogood/NG_Cypher_Header_Light.png')] dark:bg-[url('/stock/nogood/NG_Cypher_Header_Dark.png')] bg-hero bg-no-repeat md:bg-cover bg-center bg-fixed" 
   >


      <img
                class="block dark:hidden h-28 pt-6 mx-auto"
                src="/project/NG_Logo_CypherSpace.gif"
                :alt="data.name"

              />
              <img
                class="hidden dark:block h-28 pt-6 mx-auto"
                src="/project/NG_Logo_CypherSpace_Dark.gif"
                :alt="data.name"

              />

              <div class="flex flex-row justify-center my-3">
            <SettingsTheme />
            <SettingsLanguage v-if="data.multilang" />
          </div>




      <div class="max-w-4xl mx-auto mt-6">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12 text-center">
          <h2
            class="text-2xl font-semibold leading-7 text-gray-900 dark:text-white"
          >
          {{ t("title") }}
          </h2>
          <!-- <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            Start by using your existing public keys or creating a new pair (Bitcoin & Nostr) to get you fully setup to start posting & selling for bitcoin. In our setup documentation we also touch shortly on key generation and safe storage. You can click save or cancel and change these later in the admin panel. <br> ⚠️ No Secret keys are being saved & this project is in early development. 
          </p> -->

          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            {{ t("warning") }}
          </p>

          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            {{ t("demoui") }}
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mx-auto">
            <div class="sm:col-span-6 mx-auto">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >{{ t("project") }}</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.textlogo"
                  />
                </div>
              </div>
            </div>





            <div class="sm:col-span-6 mx-auto">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >{{ t("bitcoinaddress") }} <a href="https://cypher.space/docs/setup#bitcoin-wallet" class="underline" target="_blank">📖 {{ t("readmore") }}</a></label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="w-96 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.btcadress"
                  />
                </div>
              </div>
            </div>



            <div class="sm:col-span-6 mx-auto" v-if="bitcoinwallet">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >{{ t("seedphrase") }}</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <textarea 
                    class="w-96 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    placeholder="witch collapse practice feed shame open despair creek road again ice least"
                  />
                </div>
              </div>
            </div>


            <button
            v-if="bitcoinwallet"
          class="sm:col-span-6 mx-auto rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
        
          {{ t("newseed") }}
          </button>






            <button
            v-if="!bitcoinwallet"
            @click="btcwallet"
          class="sm:col-span-6 mx-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
        {{ t("nowallet") }}
        </button>



        <div class="sm:col-span-6 mx-auto">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >{{ t("pubkey") }} <a href="https://cypher.space/docs/setup#nostr" class="underline" target="_blank">📖 {{ t("readmore") }}</a></label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="w-96 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.nostradmin"
                  />
                </div>
              </div>
            </div>



            <div class="sm:col-span-6 mx-auto" v-if="nostrkey">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >{{ t("nsec") }}</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="password"
                    class="w-96 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    placeholder="nsec1zaj96r057atmtagzyf79hqt4skf3u9e0j4srh2w8klcncp45h0csxv6f6j"
                  />
                </div>
              </div>
            </div>



            <fieldset class="sm:col-span-6 mx-auto" v-if="nostrkey">
              <!-- <legend class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Enable Blog</legend> -->
              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white inline"
                      >{{ t("publish") }} </label
                    >
                    <!-- <p class="text-gray-500 inline">
                      Publishes your profile note to default relay.
                    </p> -->
                  </div>
                </div>



              </div>
            </fieldset>




            <button
            v-if="nostrkey"
          class="sm:col-span-6 mx-auto rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
        
          {{ t("newseed") }}
          </button>




            <button
            v-if="!nostrkey"
            @click="nostrkeygen"
          class="sm:col-span-6 mx-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
        
          {{ t("nonostr") }}
          </button>


        <div class="sm:col-span-6 mx-auto">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >{{ t("lnaddress") }} <a href="https://cypher.space/docs/setup#lightning-address" class="underline" target="_blank">📖 {{ t("readmore") }}</a></label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="w-96 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.lnurl"
                  />
                </div>
              </div>
            </div>


            <div class="sm:col-span-6 mx-auto">
              <label
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >{{ t("webhook") }} <a href="https://cypher.space/docs/setup#webhook" class="underline" target="_blank">📖 {{ t("readmore") }}</a></label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="w-96 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.orderwebhook"
                  />
                </div>
              </div>
            </div>
          </div>


          <button
          type="submit"
          class="mt-6 mx-3 sm:col-span-6  rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
        {{ t("setupinit") }} 🚀
        </button>

        <button
          type="submit"
          class="mt-6 mx-3 sm:col-span-6  rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
        {{ t("cancel") }}
        </button>




        </div>




      </div>

    </div>














    </div>
  </template>
  
  <script setup>
import data from "~/config/setup";


const bitcoinwallet = ref(false)
const nostrkey = ref(false)

function btcwallet() {
  bitcoinwallet.value = !bitcoinwallet.value
}

function nostrkeygen() {
  nostrkey.value = !nostrkey.value
}

const { t } = useI18n({ useScope: "local" });


  </script>
  
  <i18n lang="json">
    {
      "da": {
        "title": "Indledende applikationsopsætning",
        "warning": "Ingen hemmelige nøgler bliver gemt, og dette projekt er i en tidlig udviklingsfase.",
        "demoui": "⚠️ Denne opsætningsmenu er en del af Admin UI og er i øjeblikket kun UI & UX ⚠️",
        "readmore": "Læs mere",
        "project": "Projektnavn",
        "bitcoinaddress": "BTC Modtageadresse",
        "seedphrase": "Bip 39 Seed-frase",
        "newseed": "Generer ny seed-frase",
        "nowallet": "Har du ikke en Bitcoin-tegnebog?",
        "nonostr": "Har du ikke en Nostr-nøgle?",
        "newkey": "Generer nyt nøglepar",
        "pubkey": "Nostr Pubkey",
        "nsec": "Hemmelig nøgle",
        "publish": "Offentliggør profil",
        "lnaddress": "Lightning-adresse",
        "webhook": "Webhook til modtagelse af ordre",
        "setupinit": "Opsæt din applikation",
        "cancel": "Annuller"
      },
      "de": {
        "title": "Erstkonfiguration der Anwendung",
        "warning": "Es werden keine geheimen Schlüssel gespeichert & dieses Projekt befindet sich in einer frühen Entwicklungsphase.",
        "demoui": "⚠️ Dieses Einrichtungsmenü ist Teil der Admin-UI und derzeit nur UI & UX ⚠️",
        "readmore": "Weiterlesen",
        "project": "Projektname",
        "bitcoinaddress": "BTC Empfangsadresse",
        "seedphrase": "Bip 39 Seedphrase",
        "nowallet": "Haben Sie keine Bitcoin-Wallet?",
        "nonostr": "Haben Sie keinen Nostr-Schlüssel?",
        "newseed": "Neue Seedphrase generieren",
        "newkey": "Neues Schlüsselpaar generieren",
        "pubkey": "Nostr Pubkey",
        "nsec": "Geheimer Schlüssel",
        "publish": "Profil veröffentlichen",
        "lnaddress": "Lightning-Adresse",
        "webhook": "Webhook für Bestellungseingang",
        "setupinit": "Richte deine Anwendung ein",
        "cancel": "Abbrechen"
      },
      "es": {
        "title": "Configuración inicial de la aplicación",
        "warning": "No se guardan claves secretas y este proyecto está en desarrollo temprano.",
        "demoui": "⚠️ Este menú de configuración es parte de la UI de Administración y actualmente es solo UI & UX ⚠️",
        "readmore": "Leer más",
        "project": "Nombre del proyecto",
        "bitcoinaddress": "Dirección de recepción BTC",
        "seedphrase": "Frase semilla Bip 39",
        "nowallet": "¿No tienes una billetera de Bitcoin?",
        "nonostr": "¿No tienes una clave de Nostr?",
        "newseed": "Generar nueva frase semilla",
        "newkey": "Generar nuevo par de claves",
        "pubkey": "Clave pública Nostr",
        "nsec": "Clave secreta",
        "publish": "Publicar perfil",
        "lnaddress": "Dirección Lightning",
        "webhook": "Webhook de recepción de pedidos",
        "setupinit": "Configura tu aplicación",
        "cancel": "Cancelar"
      },
      "en": {
        "title": "Initial Application Setup",
        "warning": "No Secret keys are being saved & this project is in early development.",
        "demoui": "⚠️ This setup menu is part of the Admin UI and is currently UI & UX Only ⚠️",
        "readmore": "Read More",
        "project": "Project Name",
        "bitcoinaddress": "BTC Receive Address",
        "seedphrase": "Bip 39 Seedphrase",
        "newseed": "Generate new Seedphrase",
        "nowallet": "Don't have a bitcoin wallet?",
        "nonostr": "Don't have a Nostr Key?",
        "newkey": "Generate new Keypair",
        "pubkey": "Nostr Pubkey",
        "nsec": "Secret key",
        "publish": "Publish Profile",
        "lnaddress": "Lightning Address",
        "webhook": "Order Receive Webhook",
        "setupinit": "Setup your application",
        "cancel": "Cancel"
      },
      "fr": {
        "title": "Configuration initiale de l'application",
        "warning": "Aucune clé secrète n'est sauvegardée et ce projet est en début de développement.",
        "demoui": "⚠️ Ce menu de configuration fait partie de l'UI Admin et est actuellement seulement UI & UX ⚠️",
        "readmore": "En savoir plus",
        "project": "Nom du projet",
        "bitcoinaddress": "Adresse de réception BTC",
        "seedphrase": "Phrase de semence Bip 39",
        "nowallet": "Vous n'avez pas de portefeuille Bitcoin?",
        "nonostr": "Vous n'avez pas de clé Nostr?",
        "newseed": "Générer une nouvelle phrase de semence",
        "newkey": "Générer une nouvelle paire de clés",
        "pubkey": "Clé publique Nostr",
        "nsec": "Clé secrète",
        "publish": "Publier le profil",
        "lnaddress": "Adresse Lightning",
        "webhook": "Webhook de réception de commande",
        "setupinit": "Configurez votre application",
        "cancel": "Annuler"
      },
      "nl": {
        "title": "Initiële applicatie-instelling",
        "warning": "Er worden geen geheime sleutels opgeslagen & dit project bevindt zich in een vroege ontwikkelingsfase.",
        "demoui": "⚠️ Dit instellingsmenu maakt deel uit van de Admin UI en is momenteel alleen UI & UX ⚠️",
        "readmore": "Lees meer",
        "project": "Projectnaam",
        "bitcoinaddress": "BTC Ontvangstadres",
        "seedphrase": "Bip 39 Seedphrase",
        "nowallet": "Heb je geen Bitcoin-wallet?",
        "nonostr": "Heb je geen Nostr-sleutel?",
        "newseed": "Genereer nieuwe Seedphrase",
        "newkey": "Genereer nieuw Sleutelpaar",
        "pubkey": "Nostr Pubkey",
        "nsec": "Geheime sleutel",
        "publish": "Profiel publiceren",
        "lnaddress": "Lightning Adres",
        "webhook": "Webhook voor orderontvangst",
        "setupinit": "Stel uw applicatie in",
        "cancel": "Annuleren"
      },
      "pt": {
        "title": "Configuração Inicial do Aplicativo",
        "warning": "Nenhuma chave secreta está sendo salva e este projeto está em desenvolvimento inicial.",
        "demoui": "⚠️ Este menu de configuração faz parte da UI do Admin e atualmente é apenas UI & UX ⚠️",
        "readmore": "Leia Mais",
        "project": "Nome do Projeto",
        "bitcoinaddress": "Endereço de Recebimento BTC",
        "seedphrase": "Frase Semente Bip 39",
        "newseed": "Gerar nova Frase Semente",
        "nowallet": "Não tem uma carteira bitcoin?",
        "nonostr": "Não tem uma chave Nostr?",
        "newkey": "Gerar novo Par de Chaves",
        "pubkey": "Chave Pública Nostr",
        "nsec": "Chave Secreta",
        "publish": "Publicar Perfil",
        "lnaddress": "Endereço Lightning",
        "webhook": "Webhook de Recebimento de Pedidos",
        "setupinit": "Configurar seu aplicativo",
        "cancel": "Cancelar"
      }
    }
    </i18n>
    