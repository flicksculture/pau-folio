<template>
  <base-layout>
    <portfolio-hero>
      <slot name="title"></slot>
    </portfolio-hero>
    <slot name="default"></slot>
  </base-layout>
</template>

<script>
import BaseLayout from '../layouts/BaseLayout'
import PortfolioHero from '../components/PortfolioHero'

export default {
  components: { BaseLayout, PortfolioHero }
}
</script>
