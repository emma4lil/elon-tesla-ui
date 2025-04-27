<template>
  <v-card max-width="100" variant="text" to="/" class="logo d-flex">
    <img  src="../../../assets/footerlogo.png" height="37" width="55" />
    <div class="font-weight-bold">Tesla Stocks</div>
  </v-card>
</template>

<script setup lang="ts">

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