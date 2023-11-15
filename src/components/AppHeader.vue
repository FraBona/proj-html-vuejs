<script>
  import { store } from '../store.js';

  export default{
    data(){
      return{
        store: store
      }
    },
  }
</script>

<template>
  <div class="container-large">
    <div class="row row-principal">
      <div class="col-4 bg-blue"></div>
      <div class="col-8 bg-red"></div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-between">
      <div class="col-image">
        <img id="logo-image" src="../img/images/logotype.png" alt="">
      </div>
      <div class="col-list">
        <ul class="menu">
  <!--       <li class="menu__item">ABOUT</li>
          <li class="menu__item">PROJECTS</li>
          <li class="menu__item">SERVICES</li>
          <li class="menu__item">BLOG</li>
          <li class="menu__item">CONTACT</li>--> 
          <li class="menu__item" v-for="item in this.store.db.listHeader">{{ item.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .col-4{
    flex-basis: calc((100% / 12 ) * 4);
    position: relative;
  }

  .logo-image{
    position: absolute;
    top: 0;
  }

  .col-8{
    flex-basis: calc((100% / 12) * 8);
    
  }
  .bg-blue{
    min-height: 1000px;
    background-color: rgb(34, 33, 61);
  }

  .bg-red{
    background-image: url('../img/images/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg');
  }

  .menu{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
  }

  .menu__item{
    color: white;
  }

  .container-large{
    position: relative;
  }

  .col-image{
    position: absolute;
    top: 0;
    right: 65%;
  }

  .col-list{
    position: absolute;
    top: 0;
    left: 65%;
  }

  #logo-image{
    max-width: 50%;
    padding: 20px;
  }

</style>