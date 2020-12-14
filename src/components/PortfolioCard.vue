<template>
  <div class="portfolio-card">
    <h1>
      <slot name="title"></slot>
    </h1>
    <slot name="content">

    </slot>
  </div>

</template>

<style lang="scss">
$-hero-mobile-height: 240px;
$-hero-tablet-height: 280px;
$-hero-desktop-height: 300px;

.portfolio-card {
  position: relative;
  max-width: 100%;
  @include respond-to("small and down") {
    min-height: rem($-hero-mobile-height);
  }
  @include respond-to("medium") {
    min-height: rem($-hero-tablet-height);
  }
  @include respond-to("large and up") {
    max-height: rem($-hero-desktop-height);
  }
}

</style>
