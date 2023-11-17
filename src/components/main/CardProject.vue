<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<template>
  <div class="col-4">
    <div class="description">
      <p>
        {{ item.description }}
      </p>
    </div>
    <div class="name">
      <h2>{{ item.name }}</h2>
      <p>{{ item.agency }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use "../../style/partials/palette.scss" as *;
.description{
  padding: 40px;
  color: $grey;
}

.name{
  padding: 10px 40px;
}

.name > p{
  color: $grey;
}
</style>
