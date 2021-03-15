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

.portfolio-card {
  position: relative;
  max-width: 100%;

  h1 {
    font-family: $title-font;
  }


}

</style>
