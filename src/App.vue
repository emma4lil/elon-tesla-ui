<template>
  <SmartBearLoader />
  <RouterView></RouterView>
</template>

<script setup lang="ts">
// import { RouterView } from 'vue-router';
// import SmartBearLoader from '@/utils/scripts/SmartBearLoader.vue';
// import { onMounted, ref } from 'vue';
// import { supabase } from './superbase.ts';
//
// const session = ref();
//
// onMounted(() => {
//   supabase.auth.getSession().then(({ data }) => {
//     session.value = data.session;
//   });
//   supabase.auth.onAuthStateChange((_, _session) => {
//     session.value = _session;
//   });
// });
import SmartBearLoader from '@/utils/scripts/SmartBearLoader.vue';
</script>

<!--<script setup>-->
<!--import { onMounted, ref } from 'vue';-->
<!--import Account from './components/Account.vue';-->
<!--import Auth from './components/Auth.vue';-->
<!--import { supabase } from './superbase.ts';-->

<!--const session = ref();-->
<!--onMounted(() => {-->
<!--  supabase.auth.getSession().then(({ data }) => {-->
<!--    session.value = data.session;-->
<!--  });-->
<!--  supabase.auth.onAuthStateChange((_, _session) => {-->
<!--    session.value = _session;-->
<!--  });-->
<!--});-->
<!--</script>-->
<!--<template>-->
<!--  <div class="container" style="padding: 50px 0 100px 0">-->
<!--    <Account v-if="session" :session="session" />-->
<!--    <Auth v-else />-->
<!--  </div>-->
<!--</template>-->
