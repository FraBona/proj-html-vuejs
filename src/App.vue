<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';
  import { store } from './store.js';

  

  export default {
    components: {
      AppHeader: AppHeader,
      AppMain: AppMain,
      AppFooter: AppFooter
    },
    data(){
      return{
        store: store
      }
    },
    created(){
      console.log(this.store.db.listHeader.length)
    }
  }
</script>

<template>

  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>

</template>

<style lang="scss">

  @use './style/general.scss'

</style>
