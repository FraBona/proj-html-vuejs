<script>

  import { store } from '../store';

  import AppConsultant from './main/AppConsultant.vue';

  import AppAbout from './main/AppAbout.vue'

  export default{

    components: {
      AppConsultant: AppConsultant,
      AppAbout: AppAbout
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
  <AppAbout></AppAbout>
</template>

<style scoped>

</style>