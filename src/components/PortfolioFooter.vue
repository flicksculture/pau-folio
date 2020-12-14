<template>
  <div class="portfolio-footer">
    <g-link to="https://vsco.co/pauuuuom/gallery"><g-image class="social-media" src="@/assets/vsco-logo.png" alt="logo"></g-image></g-link>
  </div>

</template>

<style lang="scss">

.portfolio-footer {
  background-color: $color-chocolate;
  color: $color-cream;
  padding: $gutter-large;
  display: grid;
  grid-template-columns: repeat(3, 24px);
  justify-content: right;
}

.social-media {
  cursor: pointer;
  height: 24px;
  width: 24px;
}

</style>
