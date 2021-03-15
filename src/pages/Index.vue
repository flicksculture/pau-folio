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

<style lang="scss">
  .content {
    scroll-behavior: smooth;
    margin: $gutter-xlarge;
    background-color: $color-cream-light;
    height: min-content;
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
