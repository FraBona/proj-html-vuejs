<script></script>

<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="../img/images/logotype-2-150x25.png" alt="" />
        </div>
        <div class="col">
          <ul class="menu">
            <li class="menu_item">HOME</li>
            <li class="menu_item">ABOUT</li>
            <li class="menu_item">PROJECTS</li>
            <li class="menu_item">SERVICES</li>
            <li class="menu_item">BLOG</li>
            <li class="menu_item">CONTACT</li>
          </ul>
        </div>
        <div class="col">
          <ul class="menu">
            <li class="icon"><font-awesome-icon :icon="['fab', 'instagram']" /></li>
            <li class="icon"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></li>
            <li class="icon"><font-awesome-icon :icon="['fab', 'facebook-f']" /></li>
            <li class="icon"><font-awesome-icon :icon="['fab', 'twitter']" /></li>
          </ul>
        </div>
        <div class="col-12">
          <div class="line"></div>
        </div>
        <div class="col">
          <p class="p-footer">Terms of use <br> Privacy Environment Policy</p>
        </div>
        <div class="col">
          <p class="p-footer">Copyright © 2020 Phlox Consulting. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use "../style/partials/palette" as *;

.footer{
  margin: 50px 0;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.menu{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.menu_item{
  color: grey;
}

.icon{
  color: white;
}

.col-12{
  width: 100%;
}

.line{
  width: 100%;
  height: 2px;
  background-color: $grey;
  margin-top: 50px;
  margin-bottom: 30px;
}
.p-footer{
  color: $grey;
}
</style>
