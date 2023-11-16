<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<template>
    <div class="col-6 pad-col">
        <div class="row">
          <div class="col-2">
            <div class="block-image">
              <img :src="item.img" alt="" class="col__image" />
            </div>
          </div>
          <div class="col-10">
            <div>
              <h2 class="title_image">{{ item.title }}</h2>
            </div>
            <div>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette.scss" as *;

.row{
  display: flex;
}

.pad-col{
  padding: 40px 0px 40px 0px;
}

.col-2{
  flex-basis: calc((100% / 12 ) * 2);
}

.col-10{
  flex-basis: calc((100% / 12 ) * 10);
}

.block-image {
  width: 70px;
  height: 70px;
  background-color: $red-light;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col__image {
  width: 50px;
  filter: brightness(0) invert(1);
}

.title_image {
  padding-bottom: 20px;
}
</style>
