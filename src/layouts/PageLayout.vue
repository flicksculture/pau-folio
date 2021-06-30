<template>
  <default-layout>
    <template #header>
      <transition name="fade">
        <base-header>
          <template #logo>
            <a class="logo" @click="scrollTop">
              <g-image  src="@/assets/logo.png" alt="logo"></g-image>
            </a>
          </template>
        </base-header>
      </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-in-top {
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  animation: slide-in-top 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }

}


.page {
  margin-top: 0;
  height: 0;
}

.logo {
  cursor: pointer;
  border: 0;

  img {
    width: 80px;
    height: 40px;
  }
}
</style>
<script>
  import DefaultLayout from "./DefaultLayout";
  export default {
    components: {DefaultLayout},
    data: function () {
      return {
        scroll: null
      }
    },
    methods: {
      updateScroll() {
        this.scroll = window.scrollY
      },
      scrollTop() {
        this.intervalId = setInterval(() => {
          if (window.pageYOffset === 0) {
            clearInterval(this.intervalId)
          }
          window.scroll(0, window.pageYOffset - 50)
        }, 20)
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    }
  }
</script>

