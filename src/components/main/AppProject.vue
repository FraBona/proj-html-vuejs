<script>

import CardProject from "./CardProject.vue";

import { store } from "../../store";

export default {
  components: {
    CardProject: CardProject,
  },
  data() {
    return {
      store: store,
    };
  },
};
</script>

<template>
  <div class="container appProject">
    <div class="flex">
      <div class="line"></div>
      <p class="subtitle">PROJECT</p>
    </div>
    <div class="row">
      <div class="col-12 div-flex">
        <div class="col-6">
          <h1 class="title">OUR EXPERT TRUSTED CONSULTANTS HELP CLIENTS</h1>
        </div>
        <div class="col-6 flex-col">
          <div class="block-arrow"><font-awesome-icon :icon="['fas', 'arrow-left']" /></div>
          <div class="block-arrow"><font-awesome-icon :icon="['fas', 'arrow-right']" /></div>
        </div>
      </div>
      <div class="col-4 p-col">
        <img src="../../img/images/DRY-1-790x592.jpg" alt="">
      </div>
      <div class="col-4 p-col">
        <img src="../../img/images/221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg" alt="">
      </div>
      <div class="col-4 p-col">
        <img src="../../img/images/z1el4c4p-790x592.jpg" alt="">
      </div>
    </div>
    <div class="col-12 div-flex">
      <div class="col-6 item-flex">
        <p class="second-subtitle">TESTIMONIAL</p>
      </div>
      <div class="col-6 item-flex">
        <div class="line"></div>
      </div>
      <div class="col-6 item-flex">
      </div>
      <div class="col-6">
        <h1 class="second-title">WHAT'S THE CUSTOMER SAY ABOUT OUR WORK</h1>
      </div>
    </div>
  </div>
  <div class="container-90">
    <div class="row">
      <CardProject v-for="i in this.store.db.CardConsultants" :item="i"></CardProject>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use "../../style/partials/palette.scss" as *;

.appProject{
  padding-top: 200px;
}
.flex{
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.line{
  width: 30px;
  height: 3px;
  background-color: $green;
}

.subtitle{
  color: white;
  font-size: 18px;
}

.col-12{
  flex-basis: 100%;
}

.col-6{
  flex-basis: calc((100% / 12) * 6);
}

.col-4{
  flex-basis: calc((100% / 12) * 4);
}

.title{
  color: white;
  font-size: 40px;
  margin: 20px 0;
}
.div-flex{
  display: flex;
  flex-wrap: wrap;
}
.flex-col{
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.block-arrow{
  width: 50px;
  height: 50px;
  background-color: $blue-dark;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.p-col{
  padding-right: 10px;
  padding-bottom: 100px;
}

.item-flex{
  display: flex;
  justify-content: flex-end;
}

.second-title{
  color: white;
  font-size: 50px;
  text-align: right;
}

.second-subtitle{
  color: white;
  font-size: 20px;
}

.container-90{
  width: 90%;
  height: 300px;
  background-color: white;
  margin: 50px 0;
  float: right;
}

</style>