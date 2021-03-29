<template>
  <portfolio-card class="about-me">
    <template #content>
      <twin-columns>
        <template #left>
          <div class="about-me-title">
            <g-image src="@/assets/about-me.png" alt="about-me" ></g-image>
          </div>
          <p class="about-me-content">
            Architect with Mexican molding<br>
            My identity lies in the cultural aspects of growing up calling two countries, such as Mexico and the US, home. Those factors molded me and defined my architectural style.
            Binationalism and bilingualism are things I have ingrained and take pride in.
            An adept concept, finding a balance between the constructed spaces, its surroundings and context, I think, are key to the success of an architectonic piece.
          </p>
        </template>
        <template #right>
          <div class="about-me-photo">
          </div>

        </template>

      </twin-columns>
    </template>
  </portfolio-card>
</template>

<style lang="scss">


.about-me {
  text-align: center;
  background-color: #F8F8FF;
  padding: $gutter $gutter-xlarge 0;





}
.about-me-title {
  img {
    height: 52px;
    width: 240px;
  }
}
.about-me-content {
  font-size: 20px;
  letter-spacing: normal;
  line-height: 1.4;
}

.about-me-photo {

  img {
    max-width: 50%;
    height: auto;
    box-sizing: content-box;
  }
}



</style>
