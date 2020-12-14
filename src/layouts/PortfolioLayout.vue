<template>
  <default-layout>
    <template #header>
      <base-header>
        <template #logo>
          <g-link to="/">
            <g-image class="logo" src="@/assets/logo.png" alt="logo"></g-image>
          </g-link>
        </template>
        <template #nav>
          <div class="menu-link">
            <a href="#">Projects</a>
          </div>
        </template>
        <template #actions>
        <!--TODO: Add change language-->
        </template>
      </base-header>
    </template>
    <portfolio-page>
      <slot></slot>
    </portfolio-page>
    <template #footer><portfolio-footer></portfolio-footer></template>
  </default-layout>
</template>

<style lang="scss" scoped>
.menu-link {
  width: 100%;
  height: 100%;

  a:link, a:visited {
    text-decoration: none;
    color: $color-cream;
    cursor: pointer;
    font-weight: bold;
  }

  &:hover > .menu {
    @include respond-to("large and up") {
      display: block;
    }
  }
}

.page {
  margin-top: 0;
  height: 0;
}

.logo {
  width: 80px;
  height: 40px;
}
</style>
<script>
  import DefaultLayout from "./DefaultLayout";
  export default {
    components: {DefaultLayout}
  }
</script>
