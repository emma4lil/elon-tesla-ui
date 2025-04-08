<template>
  <SmartBearLoader/>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import SmartBearLoader from '@/utils/scripts/SmartBearLoader.vue';
</script>
