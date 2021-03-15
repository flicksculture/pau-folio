<template>
  <portfolio-card class="about-me">
    <template #title>About me </template>
    <template #content>
      <single-column>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </single-column>
    </template>
  </portfolio-card>
</template>

<style lang="scss">


.about-me {
  text-align: center;
  background-color: $color-cream;
  padding: $gutter $gutter-xlarge $gutter-xlarge;

  h1 {
    color: $color-strawberry;
    text-shadow: 3px 3px $color-chocolate;
  }

}



</style>
