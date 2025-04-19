// ===============================|| Blank Layout ||=============================== //
<template>
  <v-app>
    <NavBarBlank/>
    <RouterView />
  </v-app>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth.ts';
import NavBarBlank from '@/layouts/blank/NavBarBlank.vue';

const auth = useAuthStore();
onMounted(async () => {
  console.log('FullLayout mounted');
  await auth.onInit();
});
</script>
