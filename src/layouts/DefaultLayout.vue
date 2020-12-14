<template>
  <base-layout>
    <template #header>
      <slot name="header"></slot>
    </template>
    <slot></slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </base-layout>
</template>

<script>
import BaseLayout from '../layouts/BaseLayout'
import PortfolioHero from '../components/PortfolioHero'

export default {
  components: { BaseLayout, PortfolioHero }
}
</script>
