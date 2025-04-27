<template>
  <section class="ma-2 mt-4">
    <v-btn block color="primary" size="large" variant="outlined" class="my-2" @click="depositDialog = true"> Deposit </v-btn>

    <!-- Deposit Dialog -->
    <v-dialog v-model="depositDialog" max-width="500">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <span>Deposit Funds</span>
        </v-card-title>

        <v-sheet color="success" class="pa-4">
          {{props.description}}
        </v-sheet>

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
              <v-btn size="small" @click="copyAddress">
                copy
              </v-btn>
            </template>
          </v-text-field>

          <div class="text-h3 text-center pb-2">
           Deposit ${{props.amount}} <v-btn size="small" variant="outlined">I have paid</v-btn>
          </div>

          <v-alert type="info" variant="tonal" class="mb-4">
            <div class="text-caption">
              <strong>Minimum Deposit:</strong> {{ selectedCurrency.minimumDeposit }} {{ selectedCurrency.symbol }}<br />
              <strong>Confirmations Required:</strong> 6
            </div>
          </v-alert>
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>

<script setup>
import { ref } from 'vue';

let props = defineProps({
  title: {
    type: String,
    default: 'Buy Crypto'
  },
  blocked: {
    type: Boolean,
    default: false
  },
  amount: {
    type: Number,
    default: 1000
  },
  description: {
    type: String,
    default: 'Deposit crypto to your account'
  }
});

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
