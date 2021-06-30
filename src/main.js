import BaseLayout from '@/layouts/BaseLayout'
import PortfolioLayout from '@/layouts/PortfolioLayout'
import PageLayout from '@/layouts/PageLayout'
import DefaultLayout from '@/layouts/DefaultLayout'
import BaseHeader from '@/components/BaseHeader'
import PortfolioHero from '@/components/PortfolioHero'
import PortfolioCard from '@/components/PortfolioCard'
import PortfolioFooter from '@/components/PortfolioFooter'
import AboutMe from '@/components/AboutMe'
import PortfolioPage from '@/components/PortfolioPage'
import Flare from '@lkmx/flare-legacy/src/main'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import '@/sass/styles.scss'

export default async function (Vue, { router, head, isClient, appOptions }) {

  if (process.isClient) {
    Vue.use(require("vue-expandable-image"))

  }

  Vue.use(Flare)
  Vue.component('BaseLayout', BaseLayout)
  Vue.component('PortfolioLayout', PortfolioLayout)
  Vue.component('PageLayout', PageLayout)
  Vue.component('DefaultLayout', DefaultLayout)
  Vue.component('BaseHeader', BaseHeader)
  Vue.component('PortfolioHero', PortfolioHero)
  Vue.component('PortfolioPage', PortfolioPage)
  Vue.component('PortfolioCard', PortfolioCard)
  Vue.component('PortfolioFooter', PortfolioFooter)
  Vue.component('AboutMe', AboutMe)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
