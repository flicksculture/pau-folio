<template>
  <transition name="fade">
    <div class="about-me" v-if="scroll > 20">
      <div class="about-me-title">
        <g-image src="@/assets/about-me.png" alt="about-me"></g-image>
      </div>
      <div class="about-me-content">
        <div class="about-me-text">
          <p>
            Architect with Mexican molding<br>
            My identity lies in the cultural aspects of growing up calling two countries, such as Mexico and the US,
            home. Those factors molded me and defined my architectural style.
            Binationalism and bilingualism are things I have ingrained and take pride in.
            An adept concept, finding a balance between the constructed spaces, its surroundings and context, I think,
            are key to the success of an architectonic piece.
          </p>
          <div class="buttons">
            <a class="btn first"  href="mailto:osunamancilla@gmail.com" target="_blank">Contact</a>
            <button class="btn first">Projects</button>
          </div>

        </div>
        <div class="about-me-photo">
          <g-image src="@/assets/about-me-photo.jpg" alt="about-me"></g-image>
        </div>
      </div>
      <a href="mailto:osunamancilla@gmail.com" target="_blank" class="float briefcase">
        <font-awesome-icon icon="briefcase" class=" my-float"/>
      </a>
      <a href="mailto:osunamancilla@gmail.com" target="_blank" class="float mail">
        <font-awesome-icon icon="envelope" class=" my-float"/>
      </a>
    </div>
  </transition>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons'
  library.add(faEnvelope, faBriefcase)
  export default {
    data: function () {
      return {
        scroll: null
      }
    },
    methods: {
      updateScroll() {
        this.scroll = window.scrollY
      },
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    }
  }
</script>

<style lang="scss">

  .about-me {
    display: grid;
    padding: 5% 15%;

    @media all and (max-width: 770px) {
      padding: 0;
    }
  }

  .about-me-title {
    padding-bottom: 2%;
    @media all and (max-width: 1000px) {
      padding: 15% 25% 0;
      text-align: center;
    }
  }

  .about-me-text {

    p {
      font-family: 'Merriweather', serif;
      line-height: 36px;
      font-size: 20px;

      @media all and (max-width: 1000px) {
        padding: 2% 10%;
        text-align: center;
        line-height: 40px;
      }

      @media all and (max-width: 500px) {
        padding: 5% 10%;
        text-align: center;
        line-height: 30px;
        font-size: 16px;
      }
    }
  }

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    width: 100%;
    grid-column-gap: 10%;
    padding-right: 25%;
    font-family: 'Merriweather', serif;

    @media all and (max-width: 1000px) {
      display: none;
    }

  }

  .about-me-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5%;

    @media all and (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2.2s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
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

  // Basic Button Style
  .btn {
    display: grid;
    background-color: transparent;
    border: 2px solid $color-black;
    border-radius: 0.6em;
    color: $color-black;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    padding: 1.2em 2.8em;
    text-decoration: none;
    font-weight: 700;
    text-align: center;
    width: 100%;

    &:hover{
      color: #fff;
      outline: 0;
    }
  }

  //BUTTON 1
  .first {
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

    &:hover {
      box-shadow: 0 0 40px 40px $color-peach inset;
      border: 2px solid $color-peach;

    }
  }

  .float {
    display: none;
    @media all and (max-width: 1000px) {
      display: block;
      position:fixed;
      width:45px;
      height:45px;
      background-color:$color-peach;
      color:#FFF;
      border-radius:50px;
      text-align:center;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    }
    &:hover {
      color:#FFF;
    }
  }

  .mail {
    bottom: 16px;
    left: 25px;
  }

  .briefcase {
    bottom: 75px;
    left: 25px;
  }

  .my-float{
    display: none;
    @media all and (max-width: 1000px) {
      display: block;
      font-size: 20px;
      margin:12px;
    }

  }
</style>
