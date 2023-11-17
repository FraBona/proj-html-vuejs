<script>
import { store } from "../store.js";

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
    <div class="row row-principal">
      <div class="col-4 bg-blue flex-item"></div>
      <div class="col-8 bg-red"></div>
      <div class="col-8 principal-image">
        <img src="../img/images/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg" alt="">
      </div>
    </div>
    <div class="row second-row">
      <div class="col-5">
        <div class="block-subtitle align-item">
          <div class="line"></div>
          <p class="header-subtitle">ALWAY THE BEST YOU NEED IT</p>
        </div>
        <div class="block-title">
          <h1 id="title">THE BEST <br> BUSINESS CONSULTING</h1>
        </div>
        <div class="block-button">
          <button class="btn-read">READ MORE</button>
          <div class="block-icon">
            <font-awesome-icon :icon="['fas', 'play']" class="icon-play" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-small">
    <div class="row justify-between">
      <div class="col-image">
        <img id="logo-image" src="../img/images/logotype.png" alt="" />
      </div>
      <div class="col-list">
        <ul class="menu">
          <li class="menu__item" v-for="item in this.store.db.listHeader">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/palette.scss" as *;
.col-4 {
  flex-basis: calc((100% / 12) * 4);
  position: relative;
}
.col-8 {
  flex-basis: calc((100% / 12) * 8);
}

.col-5 {
  flex-basis: calc((100% / 12) * 5);
}
.bg-blue {
  min-height: 1000px;
  background-color: rgb(34, 33, 61);
}
.bg-red {
  background-color: $red-image;
  position: relative;
  z-index: -1;

}

.principal-image{
  z-index: 1;
  position: absolute;
  right: 18%;
}
.container-large {
  position: relative;
}

.col-image {
  position: absolute;
  top: 0;
  right: 70%;
}

.col-list {
  position: absolute;
  top: 0;
  left: 70%;
}
.col-subtitle {
  position: absolute;
  top: 20%;
  right: 70%;
  display: flex;
}

.col-title {
  position: absolute;
  top: 40%;
  right: 70%;
}

#logo-image {
  max-width: 50%;
  padding: 20px;
}
.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}
.menu__item {
  color: white;
}

.line {
  background-color: $green;
  height: 5px;
  width: 70px;
  border-radius: 10px;
}

.header-subtitle {
  color: white;
  font-size: 18px;
}

.block-subtitle {
  display: flex;
  justify-content: flex-start;
}

.flex-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.align-item {
  align-items: baseline;
  gap: 10px;
}

#title {
  padding: 50px 0;
  font-size: 100px;
  color: white;
}

.block-title {
  display: flex;
  align-items: end;
}

.btn-read {
  padding: 20px 50px;
  background-color: $green;
  border-color: $green;
  color: black;
}

.block-button {
  display: flex;
  gap: 20px;
  align-items: center;
}

.block-icon {
  padding: 20px;
  border: 1px solid white;
  border-radius: 50%;
}

.icon-play {
  color: $green;
  font-size: 20px;
}

.row-principal{
  z-index: -1;
  position: relative;
}

.second-row{
  z-index: 1;
  position: absolute;
  top: 0;
  right: 36%;
  transform: translateY(50%);
  justify-content: flex-start;
}
</style>
