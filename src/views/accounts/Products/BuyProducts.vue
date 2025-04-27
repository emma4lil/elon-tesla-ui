<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from '@/components/shared/ProductCard.vue';
import Depositor from '@/views/dashboards/default/components/Depositor.vue';

var investments = ref<number[]>([500, 1000, 5000, 10000, 20000, 50000, 75000, 100000]);
var selectInvestment = ref<number>(1000);

var shares = ref<number[]>([300, 500, 1000, 5000, 10000, 20000, 50000, 75000, 100000]);
var selectShares = ref<number>(300);

var upgrades = ref<number[]>([500, 1000, 5000, 10000, 20000, 50000, 75000, 100000]);
var selectUpgrades = ref<number>(500);
</script>

<template>
  <section>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div class="text-h3 mb-2 text-center">Select an Investment Plan</div>
                <p class="text-body-1 mb-4 text-center">
                  💼 Secure Your Future with Tesla Stocks Investment Plans! 💼 Start small, grow big! Whether you're saving for your dreams
                  or building wealth for tomorrow, our flexible Tesla investment plans have you covered.
                </p>
                <p class="text-body-1 text-amber font-weight-bold text-center mb-2">From $500 to $100,000</p>
                <v-select
                  variant="outlined"
                  :items="investments"
                  label="Select Amount"
                  item-text="`$${item}`"
                  item-value="item"
                  class="mt-5"
                  v-model="selectInvestment"
                />
              </v-col>
              <v-sheet>
                <v-spacer />
                <Depositor
                  :amount="selectInvestment"
                  description="This investment plan will be added to your account after payment confirmations"
                />
              </v-sheet>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div class="text-h3 mb-2 text-center">Buy Shares</div>
                <p class="text-body-1 mb-4 text-center">
                  Don't just watch history being made — be a part of it. Buy Tesla shares today and ride the wave of innovation, energy, and
                  unstoppable growth.Upgrade Plans 🔴 Fast. Easy. Secure.
                </p>
                <p class="text-body-1 text-amber font-weight-bold text-center mb-2">From $500 to $100,000</p>
                <v-select
                  variant="outlined"
                  :items="shares"
                  label="Select Amount"
                  item-text="`$${item}`"
                  item-value="item"
                  class="mt-5"
                  v-model="selectShares"
                />
              </v-col>
              <v-sheet>
                <v-spacer />
                <Depositor :amount="selectShares" description="This shares will be added to your account after payment confirmations." />
              </v-sheet>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div class="text-h3 mb-2 text-center">Select an Upgrade Plan</div>
                <p class="text-body-1 mb-4 text-center">
                  💼 Secure Your Future with Tesla Stocks Upgrade Plans! 💼 Start small, grow big! Whether you're saving for your dreams
                  or building wealth for tomorrow, our flexible Tesla investment plans have you covered.
                </p>
                <p class="text-body-1 text-amber font-weight-bold text-center mb-2">From $500 to $100,000</p>
                <v-select
                  variant="outlined"
                  :items="upgrades"
                  label="Select Amount"
                  item-text="`$${item}`"
                  item-value="item"
                  class="mt-5"
                  v-model="selectUpgrades"
                />
              </v-col>
              <v-sheet>
                <v-spacer />
                <Depositor
                  :amount="selectUpgrades"
                  description="This upgrade plan will be added to your account after payment confirmations"
                />
              </v-sheet>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped></style>
