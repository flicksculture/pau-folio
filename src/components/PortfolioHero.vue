<template>
  <ClientOnly>
  <section class="main-page-hero">
    <div class="main-page-hero__cover">
      <parallax :speed-factor=".2">
        <g-image src="@/assets/background.jpeg" alt="main-page-hero"></g-image>
      </parallax>
    </div>
    <div class="main-page-hero__content">
      <slot>Paulina Osuna</slot>
    </div>
  </section>
  </ClientOnly>
</template>

<script>
  import Parallax from "vue-parallaxy";
  export default {
    components: {
      Parallax
    }
  };
</script>
<style lang="scss">
$-hero-mobile-height: 240px;
$-hero-tablet-height: 280px;
$-hero-desktop-height: 768px;

$-logo-size-desktop: 78px;
$-logo-size-mobile: 68px;

.main-page-hero {

  position: relative;
  max-width: 100%;


  @include respond-to("large and up") {
    max-height: 100vh;
  }

  &__cover {
    .Masthead {
      height: 100vh !important;
      background-color: $color-black;
    }

    img {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      max-height: 100vh;


    }
  }

  &__content {
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-height: 180px;
      max-width: 280px;
    }

    @include respond-to("large and up") {
      min-width: rem(600px);
    }
  }


}
</style>

