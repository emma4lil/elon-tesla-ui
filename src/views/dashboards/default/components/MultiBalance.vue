<template>
  <v-card class="mx-auto" elevation="">
    <v-card-title class="d-flex justify-space-between align-center">
      <span class="text-h5 white--text">My Crypto Portfolio</span>
    </v-card-title>

    <v-card-text>
      <v-row class="mt-2">
        <v-col cols="12">
          <v-progress-linear
            v-if="loading"
            indeterminate
            color="primary"
          ></v-progress-linear>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-table density="comfortable">
            <thead>
            <tr>
              <th class="text-left">Coin</th>
              <th class="text-left">Balance</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="coin in walletBalances" :key="coin.symbol">
              <td>
                <div class="d-flex align-center">
                  <v-avatar size="30" class="mr-2">
                    <v-img :src="coin.icon" :alt="coin.name"></v-img>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold">{{ coin.symbol }}</div>
                    <div class="text-caption text-grey">{{ coin.name }}</div>
                  </div>
                </div>
              </td>
              <td class="font-weight-medium">{{ coin.balance }}</td>
            </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12" class="text-right">
          <div class="text-h6">Total Value: $0.00</div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const loading = ref(false);
const walletBalances = ref([
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    balance: 0.00,
    value: 25200,
    price: 60000,
    change24h: 2.34,
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    balance: 0.00,
    value: 9600,
    price: 3000,
    change24h: -1.23,
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    balance: 0.00,
    value: 2250,
    price: 150,
    change24h: 5.67,
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.png'
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    balance: 0.00,
    value: 250,
    price: 0.5,
    change24h: 0.45,
    icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png'
  },
  {
    symbol: 'DOT',
    name: 'Polkadot',
    balance: 0.00,
    value: 210,
    price: 7,
    change24h: -2.1,
    icon: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png'
  }
]);

const totalValue = ref(0);

onMounted(() => {
  calculateTotalValue();
});

const calculateTotalValue = () => {
  totalValue.value = walletBalances.value.reduce((sum, coin) => sum + coin.value, 0);
};

const refreshBalances = () => {
  loading.value = true;
  // Simulate API call
  setTimeout(() => {
    // In a real app, you would fetch updated data here
    loading.value = false;
  }, 1000);
};

const formatCurrency = (value) => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

const getChangeColor = (change) => {
  return change > 0 ? 'text-success' : 'text-error';
};
</script>

<style scoped>
.v-card {
  border-radius: 12px;
}
.v-table {
  background: transparent;
}
.text-success {
  color: #4CAF50;
}
.text-error {
  color: #F44336;
}
</style>