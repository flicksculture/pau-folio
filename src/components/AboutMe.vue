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
.about-me::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: repeat;
  height: 10px;
  background-size: 20px 20px;
  background-image: radial-gradient(circle at 10px -5px, transparent 13px, $color-floss-light 13px);
  background-clip: border-box;
}
.about-me::after{
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: repeat;
  height: 15px;
  background-size: 40px 20px;
  border-image-width: 0px 0px 6px 0px;
  background-image: radial-gradient(circle at 10px 15px, $color-floss-light 12px, transparent 12px);
  background-clip: padding-box;
  -webkit-appearance: none;

}



</style>
