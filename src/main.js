import BaseLayout from '@/layouts/BaseLayout'
import PortfolioLayout from '@/layouts/PortfolioLayout'
import DefaultLayout from '@/layouts/DefaultLayout'
import BaseHeader from '@/components/BaseHeader'
import PortfolioHero from '@/components/PortfolioHero'
import PortfolioCard from '@/components/PortfolioCard'
import PortfolioFooter from '@/components/PortfolioFooter'
import AboutMe from '@/components/AboutMe'
import PortfolioPage from '@/components/PortfolioPage'
import ProjectCard from '@/components/ProjectCard'
import Flare from '@lkmx/flare/src/main'

import '@/sass/styles.scss'

export default async function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Flare)
  Vue.component('BaseLayout', BaseLayout)
  Vue.component('PortfolioLayout', PortfolioLayout)
  Vue.component('DefaultLayout', DefaultLayout)
  Vue.component('BaseHeader', BaseHeader)
  Vue.component('PortfolioHero', PortfolioHero)
  Vue.component('PortfolioPage', PortfolioPage)
  Vue.component('PortfolioCard', PortfolioCard)
  Vue.component('PortfolioFooter', PortfolioFooter)
  Vue.component('ProjectCard', ProjectCard)
  Vue.component('AboutMe', AboutMe)

}
