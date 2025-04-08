<script setup lang="ts">

</script>

<template>
<v-card class="my-2">
  <v-card-text class="d-flex flex-column">
    <v-sheet>
      <v-text-field variant="outlined" label="Order price"></v-text-field>
      <v-text-field variant="outlined" label="Quantity"></v-text-field>
      <v-slider  glow show-ticks step="20" max="100" label=""></v-slider>
      <v-text-field disabled variant="outlined" label="Order value"></v-text-field>
    </v-sheet>
    <v-sheet rounded class="d-flex justify-center pa-2 bg-shades-black mb-4">
      <v-btn class="mr-2 flex-grow-1" color="success">Buy</v-btn>
      <v-btn class="flex-grow-1" color="error">Sell</v-btn>
    </v-sheet>
  </v-card-text>

</v-card>
</template>

<style scoped>

</style>