<template>
  <v-carousel height="600" hide-delimiter-background hide-delimiters cycle show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" cover>
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" class="text-center">
          <v-card class="mx-auto pa-6" color="rgba(0, 0, 0, 0.5)" max-width="600">
            <div class="d-flex justify-center mb-4">
              <v-icon :icon="slide.icon" size="48" color="white" />
            </div>
            <h2 class="text-h4 mb-4 text-white">
              {{ slide.title }}
            </h2>
            <p class="text-white">
              {{ slide.description }}
            </p>
            <v-btn variant="outlined" color="white" class="mt-4"> Learn More </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref } from 'vue';

const slides = ref([
  {
    src: 'https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Market Analysis',
    description: 'Get real-time market data and comprehensive analysis tools to make informed trading decisions.'
  },
  {
    src: 'https://images.unsplash.com/photo-1658225282648-b199eb2a4830?q=80&w=3250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Growth Opportunities',
    description: 'Discover emerging markets and growth stocks with our advanced screening tools.'
  },
  {
    src: 'https://images.unsplash.com/photo-1723587693188-52754b315b50?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Portfolio Management',
    description: 'Track and optimize your investment portfolio with our intuitive dashboard.'
  }
]);
</script>

<style scoped>
/* Custom styles if needed */
.v-carousel {
  border-radius: 8px;
  overflow: hidden;
}
</style>