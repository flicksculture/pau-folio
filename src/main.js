import DefaultLayout from '~/layouts/DefaultLayout.vue'

import '@/sass/styles.scss'

import Flare from '@lkmx/flare/src/main'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Flare)
  Vue.component('DefaultLayout', DefaultLayout)
}
