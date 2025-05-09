<script setup lang="ts">
// imported components
import TotalEarning from './components/TotalEarning.vue';
import PopularStocks from './components/PopularStocks.vue';
import SymbolTrendView from '@/views/dashboards/default/components/SymbolTrendView.vue';
import CrptoMarquee from '@/views/dashboards/default/components/CrptoMarquee.vue';
import BuySell from '@/views/dashboards/default/components/BuySell.vue';
import OrderView from '@/components/shared/OrderView.vue';
import ProductCard from '@/components/shared/ProductCard.vue';
import { useAuthStore } from '@/stores/auth.ts';

var auth = useAuthStore()
var user = auth.user
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-card class="overflow-hidden">
        <CrptoMarquee />
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card class="">
        <v-card-text class="text-center circle sm-circle lg-circle">
          <div class="text-h1 font-weight-bold gradient-text">Welcome, {{user?.user_metadata.first_name}}!</div>
          <p>Your current balance is: <strong>$0</strong></p>
        </v-card-text>
      </v-card>
    </v-col>
    <!--    Crypto Marquee-->

    <v-col cols="12">
      <v-row>
        <v-col cols="12" md="4">
          <ProductCard
            from="500"
            to="100,000"
            title="Investment Plans"
            description="💼 Secure Your Future with Tesla Stocks Investment Plans! 💼 Start small, grow big! Whether you're saving for your dreams or building wealth for tomorrow, our flexible Tesla investment plans have you covered."
            class="mr-2"
          />
        </v-col>

        <v-col cols="12" md="4">
          <ProductCard
            from="500"
            to="100,000"
            title="Buy Shares"
            description="Don't just watch history being made — be a part of it. Buy Tesla shares today and ride the wave of innovation, energy, and unstoppable growth.Upgrade Plans 🔴 Fast. Easy. Secure. 🔴"
            class="mr-2"
          />
        </v-col>
        <v-col cols="12" md="4">
          <ProductCard
            from="500"
            to="75,000"
            title="Upgrade Plans"
            description="🔴 Fast. Easy. Secure. 🔴 Upgrade your Tesla investment plan to unlock exclusive benefits and maximize your returns. Don't miss out on this opportunity to supercharge your investment journey!"
            class="mr-2"
          />
        </v-col>
      </v-row>
    </v-col>
    <!--row 2-->
    <v-col cols="12" md="8" class="red">
      <v-row>
        <v-col cols="12">
          <v-card height="600">
            <SymbolTrendView symbol="NASDAQ:TSLA" interval="240" theme="light" autosize />
          </v-card>
        </v-col>
        <v-col cols="12">
          <OrderView />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="4" class="red">
      <v-row>
        <v-col cols="12">
          <TotalEarning class="" />
        </v-col>
        <v-col cols="12">
          <BuySell />
        </v-col>
        <v-col cols="12">
          <PopularStocks />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

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
  animation: gradient-animation 100s linear infinite;
  background-size: 300% 300%;
}

</style>
