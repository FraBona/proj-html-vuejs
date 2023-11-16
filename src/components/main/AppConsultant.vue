<script>
import CardConsultant from "./CardConsultant.vue";

import { store } from "../../store";

export default {
  components: {
    CardConsultant: CardConsultant,
  },
  data() {
    return {
      store: store,
    };
  },
};
</script>

<template>
  <div class="container-large bg-white">
    <div class="container-small ">
      <div class="row">
        <div class="col-12">
          <div class="block-title">
            <h1 class="title">OUR CONSULTANT CAN HELP YOU</h1>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <CardConsultant v-for="i in this.store.db.consultants" :item="i" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/palette.scss" as *;

.bg-white {
  background-color: white;
}
.col-12 {
  flex-basis: 100%;
}

.col-6 {
  flex-basis: calc((100% / 12) * 6);
}
.block-title {
  padding: 50px 0;
  display: flex;
  align-items: center;
  gap: 20px;
}

.title {
  font-size: 28px;
}
.line {
  width: 500px;
  height: 5px;
  background-color: $green;
}
</style>
