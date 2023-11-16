<script>

  import { store } from '../store';

  import AppConsultant from './main/AppConsultant.vue'

  export default{

    components: {
      AppConsultant: AppConsultant,
    },
    data(){
      return{
        store: store
      }
    }
  }

</script>

<template>
  <AppConsultant></AppConsultant>
</template>

<style scoped>

</style>