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

  h1 {
    font-family: $title-font;
  }


}

</style>
