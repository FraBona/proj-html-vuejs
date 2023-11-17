<script>
import { store } from "../../store";

export default {
  data() {
    return {
      store: store,
    };
  },
};
</script>

<template>
  <div class="container-large">
    <div class="row">
      <div class="col-8">
        <img
          src="../../img/images/business-people-working-together-on-project-and-5FHSKBL.jpg"
          alt=""
          class="img-business"
        />
      </div>
      <div class="col-4">
        <div class="flex">
          <div class="line"></div>
          <h3 class="about-us">ABOUT US</h3>
        </div>
        <div>
          <h1 class="title">WE MAKE YOUR STRATEGY WORK</h1>
        </div>
        <div>
          <p class="subtitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error unde
            dicta incidunt, omnis corporis vitae explicabo autem, nisi
            consectetur soluta laboriosam atque magnam ipsa totam veritatis.
            Corrupti delectus sit totam? Assumenda itaque odio accusamus
            officiis eligendi temporibus dignissimos architecto atque enim?
            Impedit pariatur repellat illo magnam veniam vel, facilis sed.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container-90">
    <div class="get-started">
      <button class="get-started">GET STARTED</button>
    </div>
    <div class="container-small">
        <div class="col-6">
          <h2 class="title-cont-small">WE HELP TO DELIVER THE BUSINESS CASE</h2>
        </div>
        <div class="col-6">
          <p class="subtitle-cont-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ut
            iste, ipsa cum possimus magnam harum beatae aliquid, at ducimus
            tempore sed! Hic quis soluta veritatis, consectetur, et culpa
            incidunt adipisci rerum eligendi fugiat, at assumenda magni veniam
            molestiae nihil enim beatae eveniet atque. Fugit qui voluptates
            consectetur dicta reprehenderit.
          </p>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette.scss" as *;

.row {
  display: flex;
  align-items: center;
}
.col-8 {
  flex-basis: calc((100% / 12) * 8);
}

.col-4 {
  flex-basis: calc((100% / 12) * 4);
}
.col-6 {
  flex-basis: calc((100% / 12) * 6);
}

.img-business {
  width: 90%;
}

.flex {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.line {
  width: 30px;
  height: 2px;
  background-color: $green;
}

.about-us {
  color: white;
}

.title {
  font-size: 60px;
  color: white;
}

.subtitle {
  color: $grey;
}

.col-4 > div {
  padding: 20px 0;
}

.container-90 {
  position: relative;
  background-color: $green;
  width: 90%;
  height: 300px;
  margin: -4px;
}

.get-started {
  position: absolute;
  bottom: 0;
  right: 0;
}

.get-started > button {
  padding: 20px 70px;
  background-color: $red-light;
  color: white;
  border-color: $red-light;
}

.container-small{
  display: flex;
  align-items: center;
  height: 300px;
}

.title-cont-small{
  font-size: 38px;
}

.subtitle-cont-small{
  color: $grey-dark;
}
</style>
