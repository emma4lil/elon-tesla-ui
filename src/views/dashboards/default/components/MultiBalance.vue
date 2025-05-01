<template>
  <v-container class="pa-4">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4" elevation="2">
          <v-card-title class="d-flex justify-space-between align-center">
            <span class="text-h5 font-weight-bold">My Crypto Portfolio</span>
            <v-btn icon @click="refreshBalances">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-progress-linear
              v-if="loading"
              indeterminate
              color="primary"
              class="mb-4"
            ></v-progress-linear>
            <v-row>
              <v-col
                v-for="coin in walletBalances"
                :key="coin.symbol"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card class="pa-3" outlined>
                  <div class="d-flex align-center mb-2">
                    <v-avatar size="40" class="mr-3">
                      <v-img :src="coin.icon" :alt="coin.name"></v-img>
                    </v-avatar>
                    <div>
                      <div class="font-weight-bold text-body-1">
                        {{ coin.symbol }}
                      </div>
                      <div class="text-caption text-grey">{{ coin.name }}</div>
                    </div>
                  </div>
                  <div class="d-flex justify-space-between align-center">
                    <div class="text-body-2">Balance:</div>
                    <div class="font-weight-medium text-body-1">
                      {{ coin.balance }}
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const loading = ref(false);
const walletBalances = ref([
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    balance: 0.0,
    value: 25200,
    price: 60000,
    change24h: 2.34,
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    balance: 0.0,
    value: 9600,
    price: 3000,
    change24h: -1.23,
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    balance: 0.0,
    value: 2250,
    price: 150,
    change24h: 5.67,
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.png',
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    balance: 0.0,
    value: 250,
    price: 0.5,
    change24h: 0.45,
    icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
  },
  {
    symbol: 'DOT',
    name: 'Polkadot',
    balance: 0.0,
    value: 210,
    price: 7,
    change24h: -2.1,
    icon: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
  },
]);

const totalValue = ref(0);

onMounted(() => {
  calculateTotalValue();
});

const calculateTotalValue = () => {
  totalValue.value = walletBalances.value.reduce(
    (sum, coin) => sum + coin.value,
    0
  );
};

const refreshBalances = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

const formatCurrency = (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
</script>

<style scoped>
.v-card {
  border-radius: 12px;
}
.text-grey {
  color: #9e9e9e;
}
</style>