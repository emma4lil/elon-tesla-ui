<template>
  <div class="px-4">
    <h1 class="text-center font-weight-bold my-8">REFERRAL PROGRAM</h1>
    <v-row>
      <v-col v-for="(plan, index) in plans" :key="index" cols="12" md="3">
        <v-card variant="outlined" rounded="large" width="350" class="" :class="{ 'recommended': plan.recommended }" elevation="0">
          <v-card-title class="text-center text-uppercase text-grey-darken-2">{{ plan.title }}</v-card-title>
          <v-card-subtitle class="text-h4 text-center font-weight-bold">${{ plan.price.toLocaleString() }}</v-card-subtitle>
          <v-card-text>
            <ul class="list-unstyled text-center">
              <div v-for="(feature, i) in plan.features" :key="i" class="py-1">
                <v-icon v-if="feature.included" color="success">mdi-check</v-icon>
                <v-icon v-else color="grey">mdi-close</v-icon>
                {{ feature.text }}
              </div>
            </ul>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn :color="plan.recommended ? 'amber darken-2' : 'primary'" size="large">JOIN</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const plans = ref([
  {
    title: 'Basic',
    price: 1000,
    features: [
      { text: '$1,000-$9,999', included: true },
      { text: '65% 24hours', included: true },
      { text: '24/7 Support', included: true },
      { text: 'Daily Status Report', included: false },
      { text: '5% commission', included: false },
      { text: 'Capital Insurance: 0%', included: false }
    ]
  },
  {
    title: 'Standard',
    price: 10000,
    recommended: true,
    features: [
      { text: '$10,000-$99,999', included: true },
      { text: '160% 24hours', included: true },
      { text: '24/7 Support', included: true },
      { text: 'Daily Status Report', included: true },
      { text: '10% commission', included: true },
      { text: 'Capital Insurance: 70%', included: true }
    ]
  },
  {
    title: 'Platinum',
    price: 100000,
    features: [
      { text: '$100,000-$499,999', included: true },
      { text: '245% 24hours', included: true },
      { text: '24/7 Support', included: true },
      { text: 'Daily Status Report', included: true },
      { text: '12% Commission', included: true },
      { text: 'Capital Insurance: 80%', included: true }
    ]
  },
  {
    title: 'Diamond',
    price: 500000,
    features: [
      { text: '$500,000-Unlimited', included: true },
      { text: '300% 24hours', included: true },
      { text: '24/7 Support', included: true },
      { text: 'Daily Status Report', included: true },
      { text: '15% Commission', included: true },
      { text: 'Capital Insurance: 95%', included: true }
    ]
  }
]);
</script>

<style scoped>
.recommended {
  border: 2px solid #ffb300;
  position: relative;
}
.recommended::before {
  content: 'Recommended';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffb300;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
}
</style>