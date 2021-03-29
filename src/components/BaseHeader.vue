<template>
  <header class="base-header">
    <div class="base-header__container">
      <g-link to="/" class="base-header__logo">
        <slot name="logo"></slot>
      </g-link>
      <nav>
        <slot name="nav"></slot>
      </nav>
      <div class="base-header__actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
$-nav-item-width: 109px;

.base-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: $base-header-height;
  background-color: rgba(35, 29, 29, 0.9);
  z-index: 65;

  &__container {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-auto-rows: $base-header-height;

    @include respond-to("large and up") {
      grid-template-columns: $base-header-logo-width 1fr $base-header-actions-width;
    }
    @include respond-to("medium and down") {
      grid-template-columns: 1fr 1fr;
      padding: 0 $gutter;
    }
  }

  &__logo {
    display: grid;

    @include respond-to("large and up") {
      align-items: center;
      padding-left: 18px;
    }
    @include respond-to("medium and down") {
      place-items: center start;
    }
  }

  nav {
    display: inline-grid;
    grid-auto-columns: $-nav-item-width;
    grid-auto-flow: column;
    place-items: center center;

    // minor hack for prevent showing this element
    @include respond-to("medium and down") {
      width: 0;
    }

    a {
      display: none;
      place-content: center center;
      width: 100%;
      height: 100%;

      @include respond-to("large and up") {
        display: grid;
      }

      &.active, &:hover {
        background-color: $color-chocolate-light;
      }
    }
  }

  &__actions {
    @include respond-to("large and up") {
      justify-self: start;
    }
    @include respond-to("medium and down") {
      justify-self: end;
    }
  }
}
</style>
