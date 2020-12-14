<template>
  <main class="base-page">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
  .base-page {
    background-color: $color-chocolate-light;

    @if($header-position == fixed) {
      @include respond-to("small and down") {
        margin-top: $page-mobile-header-offset;
      }
      @include respond-to("medium") {
        margin-top: $page-tablet-header-offset;
      }
      @include respond-to("large and up") {
        margin-top: $page-desktop-header-offset;
      }
    }
  }
</style>
