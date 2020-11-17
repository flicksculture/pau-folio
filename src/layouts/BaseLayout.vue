<template>
  <simple-layout>
    <template #logo>Portfolio</template>
    <template #actions>

    </template>
    <template #nav-toggle>
      <g-image src="@/assets/menu.svg" alt="menu"></g-image>
    </template>
    <template #nav-toggle-close>
      <g-image class="close-nav" src="@/assets/close-icon.svg" alt="menu"></g-image>
    </template>
    <template #footer>
      <single-column>
        With ❤️ by Axolotek
      </single-column>
    </template>
    <main>
      <slot></slot>
    </main>
  </simple-layout>
</template>

<style lang="scss" scoped>
.close-nav {
  width: 100% !important;
  height: 100% !important;
}
</style>
