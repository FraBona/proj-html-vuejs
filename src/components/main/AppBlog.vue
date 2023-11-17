<script></script>

<template>
  <div class="blog">
    <div class="container">
      <div class="block-blog">
        <div class="line"></div>
        <p>BLOG</p>
      </div>

      <div class="first-row">
        <div class="col">
          <h1 class="title">THE RECENT NEWS YOU MUST READ IT</h1>
        </div>
        <div class="col">
          <button class="btn-blog">VIEW ALL</button>
        </div>
      </div>

      <div class="row">
        <div class="col-6 p-col first-col">
          <img
            src="../../img/images/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg"
            alt=""
          />
          <div class="first-div">
            <div class="container-xxs">
              <div class="first-block">
                <p>July 4, 2019</p>
                <p>by paul</p>
              </div>
              <div class="second-block">
                <h2>Canadian Consulting Firm acquired by Uk Giant</h2>
              </div>
              <div class="third-block">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequuntur expedita saepe ad aspernatur, corporis atque
                  voluptate vero, magni debitis porro sed impedit itaque dolorem
                  corrupti enim iste maiores minima architecto?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 p-col second-col">
          <img
            src="../../img/images/business-people-working-together-on-project-and-5FHSKBL-1390.jpg"
            alt=""
          />
          <div class="second-div">
            <div class="container-xxs">
              <div class="first-block">
                <p>July 4, 2019</p>
                <p>by paul</p>
              </div>
              <div class="second-block">
                <h2>Canadian Consulting Firm acquired by Uk Giant</h2>
              </div>
              <div class="third-block">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequuntur expedita saepe ad aspernatur, corporis atque
                  voluptate vero, magni debitis porro sed impedit itaque dolorem
                  corrupti enim iste maiores minima architecto?
                </p>
              </div>
            </div>>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette.scss" as *;
.blog {
  margin-top: 500px;
}

.block-blog {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.block-blog > p {
  color: white;
  font-size: 20px;
}
.line {
  width: 30px;
  height: 3px;
  background-color: $green;
}

.first-row {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
}

.btn-blog {
  padding: 20px 50px;
  background-color: $green;
  border-color: $green;
}

.title {
  color: white;
  font-size: 40px;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.col-6 {
  flex-basis: calc((100% / 12) * 6);
}

.p-col {
  padding-right: 10px;
}

.first-col {
  position: relative;
}

.second-col {
  position: relative;
}

.first-div {
  width: 600px;
  height: 350px;
  background-color: white;
  position: absolute;
  bottom: -20%;
  right: 10px;
}

.second-div {
  width: 600px;
  height: 350px;
  background-color: white;
  position: absolute;
  bottom: -20%;
  right: 10px;
}

.container-xxs {
  max-width: 300px;
  margin: 0 100px;
}

.first-block {
  display: flex;
  gap: 20px;
}
.first-block > p {
  color: red;
  padding: 20px 0;
}

.second-block {
  margin: 30px 0;
  font-size: 20px;
}

.third-block > p {
  color: $grey;
}
</style>
