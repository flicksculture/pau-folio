<template>
  <page-layout>
    <div class="content">
      <div class="projects-title">
        <g-image src="@/assets/projects.png" alt="projects"></g-image>
      </div>
      <div class="gallery">
        <expandable-image src="https://i.ibb.co/VDth5YG/1.jpg"></expandable-image>
        <expandable-image src="https://i.ibb.co/fGP5s7M/2.jpg"></expandable-image>
        <expandable-image src="https://i.ibb.co/CQrJPLk/3.jpg"></expandable-image>
        <expandable-image src="https://i.ibb.co/fFspc9C/4.jpg"></expandable-image>
      </div>
    </div>
  </page-layout>
</template>

<style lang="scss" scoped>
  .content {
    scroll-behavior: smooth;
    background-color: $color-cream-light;
    height: min-content;
    padding: 7% 5%;
    @media all and (max-width: 1000px) {
      padding: 7% 0;
    }

  }

  .gallery {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    @media all and (max-width: 1000px) {
      grid-template-columns: 1fr;

    }
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    justify-content: center;
    img {
      cursor: pointer;
    }
  }

  .projects-title {
    padding-bottom: 2%;
    @media all and (max-width: 1000px) {
      padding: 15% 25% 0;
      text-align: center;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::selection {
    background: $color-peach;
  }
</style>
