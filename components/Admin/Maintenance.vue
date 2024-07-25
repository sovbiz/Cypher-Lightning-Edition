<template>
    <!-- <div class="h-full w-full  " style="z-index: 9999999;"> -->
    <div
      style="z-index: 99"
      class="h-full w-full fixed bg-colorBgLight dark:bg-colorBgDark overflow-scroll isolate px-6 pt-14 lg:px-8 bg-[url('/stock/nogood/NG_Cypher_Header_Light.png')] dark:bg-[url('/stock/nogood/NG_Cypher_Header_Dark.png')] bg-hero bg-no-repeat md:bg-cover bg-center bg-fixed"
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
  
      <h2
              class="text-4xl font-semibold leading-7 text-gray-900 dark:text-white text-center py-12"
            >
              SITE MAINTENANCE MODE
            </h2>

      <div class="flex flex-row justify-center my-3">
        <SettingsTheme />
        <SettingsLanguage v-if="data.multilang" />
      </div>
  

    </div>
  </template>
  
  <script setup>
  import data from "~/config/setup";
  
  const bitcoinwallet = ref(false);
  const nostrkey = ref(false);
  
  function btcwallet() {
    bitcoinwallet.value = !bitcoinwallet.value;
  }
  
  function nostrkeygen() {
    nostrkey.value = !nostrkey.value;
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
  