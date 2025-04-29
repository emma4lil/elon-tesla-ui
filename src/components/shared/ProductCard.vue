<script setup lang="ts">
var props = defineProps({
  title: {
    type: String,
    default: 'Investment Plans'
  },
  description: {
    type: String,
    default: 'Secure your'
  },
  from: {
    type: String,
    default: '2000'
  },
  to: {
    type: String,
    default: '20000'
  },
  link: {
    type: String,
    default: '/accounts/plans'
  }
});
</script>

<template>
  <v-card  class="">
    <v-card-text class="bg-lightwarning rounded circle sm-circle lg-circle hide-menu">
      <v-row>
        <v-col cols="12">
          <div class="text-h3 mb-2 text-center">{{ props.title }}</div>
          <p class="text-body-1 mb-4 text-center">
            {{ props.description }}
          </p>
          <p class="text-body-1 text-amber font-weight-bold text-center mb-2">From ${{ props.from }} to ${{ props.to }}</p>
        </v-col>
        <v-col cols="12"> </v-col>
      </v-row>
      <v-btn class="bg-lightwarning" :to="props.link" variant="tonal" block>Explore now!</v-btn>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.investment-card {
  transition: transform 0.2s;
}

.investment-card:hover {
  transform: translateY(-5px);
}
</style>
