// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    "@nuxtjs/color-mode",
    '@nuxtjs/tailwindcss',
    "@pinia/nuxt",

],
alias: {
  pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
},
css: [
  '@/assets/css/main.css',
],
components: {
     global: true,
     dirs: ['~/components']
      },

i18n: {
  // baseUrl: process.env.BASE_URL || "http://localhost:3000",
  defaultLocale: "en",
  detectBrowserLanguage: false,
  locales: [
    {
      code: "da",
      iso: "da-DA",
      name: "Dansk",
      file: "da-DA.json",
    },
    {
      code: "de",
      iso: "de-DE",
      name: "Deutsch",
      file: "de-DE.json",
    },
    {
      code: "en",
      iso: "en-GB",
      name: "English",
      file: "en-GB.json",
    },
    {
      code: "es",
      iso: "es-ES",
      name: "Español",
      file: "es-ES.json",
    },
    {
      code: "fr",
      iso: "fr-FR",
      name: "Français",
      file: "fr-FR.json",
    },
    {
      code: "pt",
      iso: "pt-PT",
      name: "Português",
      file: "pt-PT.json"
    },
    {
      code: "nl",
      iso: "nl-NL",
      name: "Nederlands",
      file: "nl-NL.json",
    },
  ],
  lazy: true,
  langDir: "locales",
},

colorMode: {
  preference: "system", // default value of $colorMode.preference
  fallback: "dark", // fallback value if no system preference found
  classSuffix: "", // This removed the classSuffix provided by Color Mode / Tailwind Darkmode Hookup
},


  devtools: { enabled: true }
})
