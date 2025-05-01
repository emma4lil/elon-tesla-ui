<template>
  <v-container class="pa-6" fluid>
    <!-- Header and Deposit Button -->
    <v-row class="mb-6">
      <v-col cols="12" md="9" class="d-flex justify-space-between align-center">
        <div>
          <h1 class="text-h4">Deposit Funds</h1>
          <div class="text-caption text-medium-emphasis">Current Balance: {{ formatCurrency(currentBalance) }}</div>
        </div>

      </v-col>

      <v-col cols="12" md="3">
        <Depositor blocked/>
      </v-col>

      <v-col>
        <MultiBalance />
      </v-col>
    </v-row>

    <!-- Deposit Dialog -->
    <v-dialog v-model="showDepositDialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">Deposit Funds</v-card-title>
        <v-card-text>
          <v-select
            v-model="selectedMethod"
            :items="paymentMethods"
            label="Payment Method"
            variant="outlined"
            class="mb-4"
          ></v-select>

          <v-text-field
            v-model="depositAmount"
            label="Amount"
            variant="outlined"
            type="number"
            prefix="$"
            min="10"
          ></v-text-field>

          <div v-if="selectedMethod === 'Bank Transfer'" class="mb-4">
            <div class="text-caption mb-2">Bank Details:</div>
            <v-alert type="info" variant="tonal">
              Account: 123456789<br>
              Routing: 021000021<br>
              Name: Your Brokerage Inc.
            </v-alert>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="showDepositDialog = false">Cancel</v-btn>
          <v-btn
            color="primary"
            :loading="isProcessing"
            @click="processDeposit"
          >
            Confirm Deposit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Success Dialog -->
    <v-dialog v-model="showSuccessDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5 d-flex align-center">
          <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
          Deposit Submitted
        </v-card-title>
        <v-card-text>
          Your deposit of {{ formatCurrency(depositAmount) }} is being processed.
          Funds will be available in your account shortly.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="showSuccessDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Deposit History -->
    <v-card>
      <v-card-title class="text-h5">Deposit History</v-card-title>
      <v-divider></v-divider>
      <v-table>
        <thead>
        <tr>
          <th class="text-left">Date</th>
          <th class="text-left">Amount</th>
          <th class="text-left">Method</th>
          <th class="text-left">Status</th>
          <th class="text-left">Reference</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="deposits.length === 0">
          <td colspan="5" class="text-center py-12">
            <v-icon size="large" class="mb-2">mdi-history</v-icon>
            <div class="text-h6 text-medium-emphasis">No deposit history</div>
            <div class="text-caption mt-2">
              Your deposit transactions will appear here
            </div>
          </td>
        </tr>
        <tr v-for="deposit in deposits" :key="deposit.id">
          <td>{{ formatDate(deposit.date) }}</td>
          <td>{{ formatCurrency(deposit.amount) }}</td>
          <td>
            <v-chip variant="outlined" size="small">
              {{ deposit.method }}
            </v-chip>
          </td>
          <td>
            <v-chip :color="getStatusColor(deposit.status)" size="small">
              {{ deposit.status }}
            </v-chip>
          </td>
          <td class="text-caption">{{ deposit.reference }}</td>
        </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import Depositor from '@/views/dashboards/default/components/Depositor.vue';
import MultiBalance from '@/views/dashboards/default/components/MultiBalance.vue';

// State
const currentBalance = ref(0);
const showDepositDialog = ref(false);
const showSuccessDialog = ref(false);
const isProcessing = ref(false);
const selectedMethod = ref('Credit Card');
const depositAmount = ref(100);
const deposits = ref([]);

// Constants
const paymentMethods = [
  'Credit Card',
  'Bank Transfer',
  'PayPal',
  'Crypto',
  'Wire Transfer'
];

// Sample data (uncomment to test with sample data)
/*
deposits.value = [
  {
    id: 1,
    date: new Date('2023-11-15'),
    amount: 500,
    method: 'Bank Transfer',
    status: 'COMPLETED',
    reference: 'DEP-123456'
  },
  {
    id: 2,
    date: new Date('2023-11-18'),
    amount: 200,
    method: 'Credit Card',
    status: 'PENDING',
    reference: 'DEP-789012'
  }
];
*/

function processDeposit() {
  isProcessing.value = true;

  // Simulate API call
  setTimeout(() => {
    // In a real app, you would call your backend here
    const newDeposit = {
      id: Date.now(),
      date: new Date(),
      amount: depositAmount.value,
      method: selectedMethod.value,
      status: 'PENDING',
      reference: `DEP-${Math.floor(Math.random() * 1000000)}`
    };

    deposits.value.unshift(newDeposit);
    currentBalance.value += depositAmount.value;

    isProcessing.value = false;
    showDepositDialog.value = false;
    showSuccessDialog.value = true;

    // Reset form
    depositAmount.value = 100;
  }, 1500);
}

function getStatusColor(status) {
  const statusColors = {
    'COMPLETED': 'success',
    'PENDING': 'warning',
    'FAILED': 'error',
    'PROCESSING': 'info'
  };
  return statusColors[status] || 'default';
}

function formatDate(date) {
  if (!date) return '';
  return new Date(date).toLocaleDateString();
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}
</script>

<style scoped>
.v-table {
  width: 100%;
}

.current-balance {
  font-size: 1.1rem;
  font-weight: 500;
}
</style>