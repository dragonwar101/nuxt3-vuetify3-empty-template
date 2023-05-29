import 'vuetify/styles'
import '@/assets/css/main.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { mdi } from 'vuetify/iconsets/mdi'
import { defineNuxtPlugin } from '#imports'
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {},
        locale: {
            locale: nuxtApp.$i18n.locale
        },
        icons: {
            defaultSet: 'mdi',
            sets: {
                mdi
            }
        },
    })
    nuxtApp.vueApp.use(vuetify)
})