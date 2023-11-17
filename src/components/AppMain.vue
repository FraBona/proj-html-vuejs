<script>

  import { store } from '../store';

  import AppConsultant from './main/AppConsultant.vue';

  import AppAbout from './main/AppAbout.vue';

  import AppProject from './main/AppProject.vue';

  import AppBlog from './main/AppBlog.vue';

  import AppTalk from './main/AppTalk.vue';

  export default{

    components: {
      AppConsultant: AppConsultant,
      AppAbout: AppAbout,
      AppProject: AppProject,
      AppBlog: AppBlog,
      AppTalk: AppTalk,
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
  <AppProject></AppProject>
  <AppBlog></AppBlog>
  <AppTalk></AppTalk>
</template>

<style scoped>

</style>