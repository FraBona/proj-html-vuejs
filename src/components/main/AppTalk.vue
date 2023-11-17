<script>

</script>

<template>
  <div class="talk">
    <div class="container-large">
      <img src="../../img/images/business-people-working-together-on-project-and-B3MZ4TX.jpg" alt="" class="principal-image">
      <div class="block-item">
        <h1>LET'S TALK ABOUT WORK</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto deserunt quisquam dignissimos consectetur placeat error rerum impedit enim sapiente.</p>
        <button>GET STARTED</button>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette.scss" as *;

.talk{
  margin-top: 500px;
}

.principal-image{
  width: 100%;
}

.container-large{
  position: relative;
}

.block-item{
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(75%, -50%);
}

.block-item > h1{
  color: white;
  font-size: 50px; 
  margin: 20px 0;
}

.block-item > button{
  padding: 20px 50px;
  background-color: rgb(34, 33, 61);
  border-color: rgb(34, 33, 61);
  color: white;
  margin: 20px 0;
}

.block-item > p{
  color: white;
}

</style>