<template>
  <div class="isolate px-6 py-24 sm:py-24 lg:px-8">
    <div
      class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true"
    >
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2
        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
      >
        {{ t("title") }}
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-white">
        {{ t("subtitle") }}
      </p>
    </div>

    <div
      class="max-w-xl mt-12 rounded-md bg-yellow-50 p-4 max-w-3xl mx-auto border-2 border-black dark:border-white"
      v-if="warning == 'error'"
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <ExclamationTriangleIcon
            class="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-yellow-800">{{ t("line1") }}</h3>
          <div class="mt-2 text-sm text-yellow-700">
            <p v-if="message.value == ''">{{ t("line2") }}</p>
            <p v-else>{{ t("line5") }}</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="max-w-xl mt-12 rounded-md bg-green-50 p-4 max-w-3xl mx-auto border-2 border-black dark:border-white"
      v-if="warning == 'success'"
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <PaperAirplaneIcon
            class="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-gray-800">{{ t("line3") }}</h3>
          <div class="mt-2 text-sm text-gray-700">
            <p>{{ t("line4") }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            for="first-name"
            class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >{{ t("firstname") }}</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="first-name"
              v-model="firstname"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >{{ t("lastname") }}</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="last-name"
              v-model="lastname"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="company"
            class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >{{ t("company") }}</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="company"
              v-model="company"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >{{ t("email") }}</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              v-model="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="npub"
            class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >{{ t("npub") }}</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="npub"
              v-model="npub"
              autocomplete="npub"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >{{ t("message") }}</label
          >
          <div class="mt-2.5">
            <textarea
              name="message"
              v-model="message"
              rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch
              v-model="agreed"
              :class="[
                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              ]"
            >
              <span class="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                :class="[
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                ]"
              />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-black dark:text-white">
            {{ t("consent") }}
            {{ " " }}

            <NuxtLink
              :to="localePath('/tos')"
              class="font-semibold text-black dark:text-white underline"
              >{{ t("termsOfService") }}</NuxtLink
            >.
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <div class="mt-10">
        <button
          @click="sendForm()"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {{ t("letsTalk") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

import {
  ExclamationTriangleIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/20/solid";

const firstname = ref("");
const lastname = ref("");
const company = ref("");
const email = ref("");
const npub = ref("");

const message = ref("");

const warning = ref("");

const formData = ref({
  name: firstname,
  lastname: lastname,
  npub: npub,
  company: company,
  email: email,
  message: message,
  // Add more fields as needed
});

import data from "~/config/setup";

const agreed = ref(false);

function sendForm() {
  if (agreed.value == false || message.value == "") {
    window.scrollTo(0, 0);
    console.log("Nothing");
    warning.value = "error";
  }
  if (agreed.value == true && message.value != "") {
    fetch(data.orderwebhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "The Contact Bot",
        avatar_url: "https://i.imgur.com/zI4lCCJ.jpeg",
        content: JSON.stringify(formData.value),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data); //Handle success response
      })
      .catch((error) => {
        console.error("Error:", error); // Handle errors
      });

    warning.value = "success";

    window.scrollTo(0, 0);
  }
}

const { t } = useI18n({ useScope: "local" });
</script>
<i18n lang="json">
{
  "da": {
    "title": "Kontaktformular",
    "subtitle": "Vælg hvilke oplysninger du vil tilføje",
    "firstname": "Fornavn",
    "lastname": "Efternavn",
    "company": "Virksomhed",
    "email": "E-mail",
    "message": "Besked",
    "npub": "Npub",
    "consent": "Ved at vælge dette accepterer du vores",
    "letsTalk": "Lad os tale",
    "termsOfService": "Servicevilkår",
    "line1": "Noget gik galt 🤯",
    "line2": "Det ser ud til, at din besked er tom...",
    "line3": "Tak for din henvendelse!",
    "line4": "Din besked blev succesfuldt sendt til ejeren",
    "line5": "Du skal acceptere servicevilkårene"
  },
  "de": {
    "title": "Kontaktformular",
    "subtitle": "Wählen Sie aus, welche Informationen Sie hinzufügen möchten",
    "firstname": "Vorname",
    "lastname": "Nachname",
    "company": "Unternehmen",
    "email": "E-Mail",
    "message": "Nachricht",
    "npub": "Npub",
    "consent": "Durch Auswahl dieser Option stimmen Sie unseren zu",
    "letsTalk": "Lass uns reden",
    "termsOfService": "Nutzungsbedingungen",
    "line1": "Etwas ist schief gelaufen 🤯",
    "line2": "Es scheint, als wäre Ihre Nachricht leer...",
    "line3": "Danke, dass Sie uns erreicht haben!",
    "line4": "Ihre Nachricht wurde erfolgreich an den Eigentümer übermittelt",
    "line5": "Sie müssen den Nutzungsbedingungen zustimmen"
  },
  "en": {
    "title": "Contact Form",
    "subtitle": "Choose what information you want to add",
    "firstname": "First Name",
    "lastname": "Last Name",
    "company": "Company",
    "email": "E-mail",
    "message": "Message",
    "npub": "Npub",
    "consent": "By selecting this, you agree to our",
    "letsTalk": "Let's talk",
    "termsOfService": "Terms of service",
    "line1": "Something Went Wrong 🤯",
    "line2": "Looks like your Message is empty...",
    "line3": "Thanks for reaching out!",
    "line4": "Your message was successfully delivered to the owner",
    "line5": "You have to agree with the terms of service"
  },
  "es": {
    "title": "Formulario de Contacto",
    "subtitle": "Elija la información que desea agregar",
    "firstname": "Nombre",
    "lastname": "Apellido",
    "company": "Empresa",
    "email": "Correo Electrónico",
    "message": "Mensaje",
    "npub": "Npub",
    "consent": "Al seleccionar esto, usted acepta nuestros",
    "letsTalk": "Hablemos",
    "termsOfService": "Términos de servicio",
    "line1": "Algo salió mal 🤯",
    "line2": "Parece que tu mensaje está vacío...",
    "line3": "¡Gracias por contactarnos!",
    "line4": "Tu mensaje fue entregado exitosamente al dueño",
    "line5": "Debes aceptar los términos del servicio"
  },
  "fr": {
    "title": "Formulaire de Contact",
    "subtitle": "Choisissez les informations que vous souhaitez ajouter",
    "firstname": "Prénom",
    "lastname": "Nom de famille",
    "company": "Société",
    "email": "E-mail",
    "message": "Message",
    "npub": "Npub",
    "consent": "En sélectionnant ceci, vous acceptez nos",
    "letsTalk": "Parlons-en",
    "termsOfService": "Conditions d'utilisation",
    "line1": "Quelque chose a mal tourné 🤯",
    "line2": "Il semble que votre message soit vide...",
    "line3": "Merci de nous avoir contactés !",
    "line4": "Votre message a été transmis avec succès au propriétaire",
    "line5": "Vous devez accepter les conditions d'utilisation"
  },
  "nl": {
    "title": "Contactformulier",
    "subtitle": "Kies welke informatie u wilt toevoegen",
    "firstname": "Voornaam",
    "lastname": "Achternaam",
    "company": "Bedrijf",
    "email": "E-mail",
    "message": "Bericht",
    "npub": "Npub",
    "consent": "Door dit te selecteren gaat u akkoord met onze",
    "letsTalk": "Laten we praten",
    "termsOfService": "Servicevoorwaarden",
    "line1": "Er is iets misgegaan 🤯",
    "line2": "Het lijkt erop dat uw bericht leeg is...",
    "line3": "Bedankt voor uw bericht!",
    "line4": "Uw bericht is succesvol afgeleverd aan de eigenaar",
    "line5": "U moet akkoord gaan met de servicevoorwaarden"
  },
  "pt": {
    "title": "Formulário de Contato",
    "subtitle": "Escolha quais informações você quer adicionar",
    "firstname": "Primeiro Nome",
    "lastname": "Último Nome",
    "company": "Empresa",
    "email": "E-mail",
    "message": "Mensagem",
    "npub": "Npub",
    "consent": "Ao selecionar esta opção, você concorda com nossos",
    "letsTalk": "Vamos conversar",
    "termsOfService": "Termos de serviço",
    "line1": "Algo deu errado 🤯",
    "line2": "Parece que sua mensagem está vazia...",
    "line3": "Obrigado por entrar em contato!",
    "line4": "Sua mensagem foi entregue com sucesso ao proprietário",
    "line5": "Você deve concordar com os termos de serviço"
  }
}
</i18n>
