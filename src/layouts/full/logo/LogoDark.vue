<template>
  <div class="logo text-center">
      <span class="">Elon Tesla Stock Trade</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const primary = ref('rgb(var(--v-theme-primary))');
const secondary = ref('rgb(var(--v-theme-secondary))');
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
}

.logo svg {
  height: 32px;
  transition: all 0.3s ease;
}

.logo:hover svg {
  transform: scale(1.05);
}
</style>