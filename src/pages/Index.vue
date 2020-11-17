<template>
  <portfolio-layout>
    <template #title>
      <h2>Paulina Osuna</h2>
    </template>
    <single-column>
      <div class="inline">
        <h2>About me</h2>
      </div>
      <div class="inline">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat,
        </p>
      </div>

    </single-column>
  </portfolio-layout>
</template>

<script>
  import BaseLayout from '../layouts/BaseLayout'
  import PortfolioHero from '../components/PortfolioHero'

  export default {
    components: {BaseLayout, PortfolioHero}
  }
</script>

<style lang="scss" scoped>
  .portfolio {
    h2 {
      margin: 0;
      padding: 0;
    }

    hr {
      margin: $gutter-xlarge 0;
    }

    .inline {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-column-gap: rem(47px);
      align-items: center;

      h2 {
        margin: 0;
        padding: 0;
      }

      @include respond-to("medium and down") {
        display: grid;
        grid-template-columns: 100%;
        grid-column-gap: 0;
        align-items: left;
        hr {
          margin: $gutter-large 0;
        }
      }
    }

    .grid {
      margin-top: rem(55px);
    }
  }
</style>
