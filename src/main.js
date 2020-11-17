import PortfolioLayout from '~/layouts/PortfolioLayout.vue'

import '@/sass/styles.scss'

import Flare from '@lkmx/flare/src/main'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Flare)
  Vue.component('PortfolioLayout', PortfolioLayout)
}
