// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@mdi/font/css/materialdesignicons.css'],
    build: {
      transpile: ["vuetify"],
    },
    modules: [
      '@nuxtjs/eslint-module',
      '@nuxtjs/i18n',
      '@sidebase/nuxt-auth',
      '@nuxtjs/google-fonts',
    ],
    eslint: {
      lintOnStart: false
    },
    i18n: {
      lazy: true,
      langDir: 'lang',
      defaultLocale: 'en',
      // skipSettingLocaleOnNavigate: true,
      locales: [
        {code: 'ar', name:"Arabic", file: 'ar.json', scss: 'assets/scss/main-rtl.scss'},
        {code: 'en', name:"English", file: 'en.json', scss: 'assets/scss/main.scss'}
      ],
    },
    googleFonts: {
      families: {
        Sora: true,
        Cairo: true,
        'Cairo+Play': [700],
      },
      display: 'swap',
      inject: true
    },
    auth: {
      isEnabled: false,
      globalAppMiddleware: true
    },
    
  });

