<template>
  <portfolio-layout>
    <portfolio-hero>
      <g-image src="@/assets/hero-logo.png" alt="logo"></g-image>
    </portfolio-hero>
    <div class="content">
      <about-me></about-me>
      <project-card></project-card>
    </div>
  </portfolio-layout>
</template>

<script>
  import PortfolioHero from '../components/PortfolioHero'
  export default {
    components: {PortfolioHero}
  }
</script>

<style lang="scss" scoped>
  .content {
    margin: $gutter-xlarge;
    background-color: $color-cream-light;
    height: min-content;
  }
</style>
