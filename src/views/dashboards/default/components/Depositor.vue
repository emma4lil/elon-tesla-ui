<template>
  <div class="ma-2 mt-4">
    <v-btn block color="secondary" size="large" variant="tonal" class="my-2" @click="depositDialog = true"> Buy crypto </v-btn>

    <!-- Deposit Dialog -->
    <v-dialog v-model="depositDialog" max-width="500">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <span>Deposit Funds</span>
          <v-btn icon @click="depositDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pt-4">
          <div class="text-subtitle-1 mb-2">Deposit Crypto ({{ selectedCurrency.symbol }})</div>
          <div class="text-caption text-medium-emphasis mb-4">
            Send only {{ selectedCurrency.symbol }} to this deposit address. Sending any other asset may result in permanent loss.
          </div>
          <v-select
            v-model="selectedCurrency"
            :items="walletAddress"
            item-title="title"
            return-object
            variant="outlined"
            label="Choose crytpo currency"
          ></v-select>

          <v-text-field v-model="selectedCurrency.address" label="Wallet address" readonly variant="outlined" class="mb-2">
            <template v-slot:append>
              <v-btn icon size="small" @click="copyAddress">
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </template>
          </v-text-field>

          <v-alert type="info" variant="tonal" class="mb-4">
            <div class="text-caption">
              <strong>Minimum Deposit:</strong> {{ selectedCurrency.minimumDeposit }} {{ selectedCurrency.symbol }}<br />
              <strong>Confirmations Required:</strong> 6
            </div>
          </v-alert>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const walletAddress = ref([
  {
    address: '0xcc70a7bd1a5ed34010609e56f0f206d24d6c49498',
    symbol: 'USDT_ERC20',
    title: 'USDT (ERC20)',
    description: '',
    minimumDeposit: 0.01
  },
  {
    address: '0xcc70a7bd1a5ed34010609e56f0f206d24d6c40000',
    symbol: 'ETH_ERC20',
    title: 'USDT ETHERUIM (ERC20)',
    description: '',
    minimumDeposit: 0.01
  },
  {
    address: '0xcc70a7bd1a5ed34010609e56f0f206d24d6c40000',
    symbol: 'SOL_USDT',
    title: 'USDT SOL',
    description: '',
    minimumDeposit: 0.01
  },
  {
    address: '0xcc70a7bd1a5ed34010609e56f0f206d24d6c42332',
    symbol: 'BTC',
    title: 'BITCOIN',
    description: '',
    minimumDeposit: 0.01
  }
]);

let selectedCurrency = ref({
  address: '0xcc70a7bd1a5ed34010609e56f0f206d24d6c49498',
  symbol: 'USDT_ERC20',
  title: 'USDT (ERC20)',
  description: '',
  minimumDeposit: 0.01
});

const depositDialog = ref(false);

const copyAddress = () => {
  navigator.clipboard.writeText(selectedCurrency.value.address);
  // In a real app, you might want to show a snackbar/toast here
  console.log('Address copied to clipboard');
};
</script>

<style scoped>
.balance-card {
  max-width: 400px;
  margin: 0 auto;
  border-radius: 12px;
}

.v-card-actions {
  gap: 8px;
}

@media (max-width: 600px) {
  .v-card-actions {
    flex-direction: column;
  }

  .v-btn {
    width: 100%;
    margin: 4px 0 !important;
  }
}
</style>
