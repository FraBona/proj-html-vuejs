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
      imageSponsor: false,
      imageDry: false,
      imageVizeon: false
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
          <div class="block-arrow">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </div>
          <div class="block-arrow">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </div>
        </div>
      </div>
      <div class="col-4 p-col image-hover" @mouseover="imageDry = true" @mouseleave="imageDry = false">
        <img src="../../img/images/DRY-1-790x592.jpg" alt=""/>
          <div class="first-image" :class="{
            zindex: imageDry,
          }">
          <img src="../../img/images/DRY-1-790x592.jpg" alt="" class="color-image">
          <div class="active">
            <p class="active__title">Purinky Products</p>
            <p class="active__subtitle">uncategorized</p>
          </div>
          <div class="square">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </div>
        </div>
      </div>
      <div class="col-4 p-col image-hover" @mouseover="imageSponsor = true" @mouseleave="imageSponsor = false" >
        <img src="../../img/images/221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg" alt=""/>
        <div
          class="second-image"
          :class="{
            zindex: imageSponsor,
          }"
        >
          <img src="../../img/images/221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg" alt="" class="color-image"/>
          <div class="active">
            <p class="active__title">Purinky Products</p>
            <p class="active__subtitle">uncategorized</p>
          </div>
          <div class="square">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </div>
        </div>
      </div>
      <div class="col-4 p-col image-hover" @mouseover="imageVizeon = true" @mouseleave="imageVizeon = false">
        <img src="../../img/images/z1el4c4p-790x592.jpg" alt="" />
        <div
          class="third-image"
          :class="{
            zindex: imageVizeon,
          }"
        >
          <img src="../../img/images/z1el4c4p-790x592.jpg" alt="" class="color-image"/>
          <div class="active">
            <p class="active__title">Purinky Products</p>
            <p class="active__subtitle">uncategorized</p>
          </div>
          <div class="square">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 div-flex">
      <div class="col-6 item-flex">
        <p class="second-subtitle">TESTIMONIAL</p>
      </div>
      <div class="col-6 item-flex">
        <div class="line"></div>
      </div>
      <div class="col-6 item-flex"></div>
      <div class="col-6">
        <h1 class="second-title">WHAT'S THE CUSTOMER SAY ABOUT OUR WORK</h1>
      </div>
    </div>
  </div>
  <div class="container-90">
    <div class="row">
      <CardProject
        v-for="i in this.store.db.CardConsultants"
        :item="i"
      ></CardProject>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette.scss" as *;

.appProject {
  padding-top: 200px;
}
.flex {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.line {
  width: 30px;
  height: 3px;
  background-color: $green;
}

.subtitle {
  color: white;
  font-size: 18px;
}

.col-12 {
  flex-basis: 100%;
}

.col-6 {
  flex-basis: calc((100% / 12) * 6);
}

.col-4 {
  flex-basis: calc((100% / 12) * 4);
}

.title {
  color: white;
  font-size: 40px;
  margin: 20px 0;
}
.div-flex {
  display: flex;
  flex-wrap: wrap;
}
.flex-col {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.block-arrow {
  width: 50px;
  height: 50px;
  background-color: $blue-dark;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.p-col {
  padding-right: 10px;
  padding-bottom: 100px;
}

.item-flex {
  display: flex;
  justify-content: flex-end;
}

.second-title {
  color: white;
  font-size: 50px;
  text-align: right;
}

.second-subtitle {
  color: white;
  font-size: 20px;
}

.container-90 {
  width: 90%;
  height: 300px;
  background-color: white;
  margin: 50px 0;
  float: right;
}

.image-hover {
  position: relative;
  z-index: 1;
}

.first-image{
  position: relative;
  position: absolute;
  top: 0;
  padding-right: 10px;
  z-index: -1;
}

.third-image{
  position: relative;
  position: absolute;
  top: 0;
  padding-right: 10px;
  z-index: -1;
}

.second-image {
  position: relative;
  position: absolute;
  top: 0;
  z-index: -1;
  padding-right: 10px;
}

.square {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  background-color: $blue-dark;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.active {
  position: absolute;
  bottom: 0;
  padding: 20px;
}

.active__title {
  font-size: 22px;
  color: white;
}

.active__subtitle {
  color: $grey;
}

.zindex {
  z-index: 2;
}

.color-image{
  filter: opacity(0.5) drop-shadow(0 0 $red-image);
}
</style>
