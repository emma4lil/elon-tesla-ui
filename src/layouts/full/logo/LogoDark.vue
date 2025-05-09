<template>
  <v-card max-width="150" variant="text" to="/" class="logo d-flex">
  <img src="../../../assets/footerlogo.png" height="40" width="60" alt="Tesla Logo" />
  <div class="text-h4 text-capitalize gradient-text" style="font-family: 'Poppins', sans-serif; font-weight: 600; margin-left: 10px;">
    TESLA <span>STOCKS</span>
  </div>
</v-card>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.gradient-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin-left: 10px;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradient-animation 250s linear infinite;
  background-size: 300% 300%;
}


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
