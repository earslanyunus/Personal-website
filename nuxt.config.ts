// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'radix-vue/nuxt', '@nuxtjs/i18n', "@nuxt/icon",'@nuxtjs/color-mode','@vueuse/nuxt'],
  i18n:{
    compilation:{
      strictMessage:false
    },
    locales:[
      {
        code: 'en',
        name: 'English',
        file: 'en-US.json'
      },
      {
        code: 'tr',
        name: 'Türkçe',
        file: 'tr-TR.json'
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'tr'
  },
  // Configure Nitro for Cloudflare Workers
  nitro: {
    preset: 'cloudflare',
    prerender: {
      autoSubfolderIndex: false // Match Cloudflare route matching rules
    }
  }
})