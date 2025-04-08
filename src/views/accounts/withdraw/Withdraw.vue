<template>
  <v-container class="pa-6" fluid>
    <!-- Header and Withdrawal Button -->
    <v-row class="mb-6">
      <v-col cols="12" class="d-flex justify-space-between align-center">
        <div>
          <h1 class="text-h4">Withdraw Funds</h1>
          <div class="text-caption text-medium-emphasis">Current Balance: {{ formatCurrency(0) }}</div>
        </div>
        <v-btn
          color="primary"
          size="large"
          @click="showLowBalance = true"
        >
          Withdraw
        </v-btn>
      </v-col>
    </v-row>

    <!-- Low Balance Dialog -->
    <v-dialog v-model="showLowBalance" max-width="500">
      <v-card>
        <v-card-title class="text-h5">Insufficient Balance</v-card-title>
        <v-card-text>
          <div class="d-flex align-center mb-4">
            <v-icon color="warning" size="large" class="mr-3">mdi-alert-circle-outline</v-icon>
            <span>Your current balance is too low to make a withdrawal.</span>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="showLowBalance = false">Close</v-btn>
          <v-btn color="primary" to="/accounts/deposit/">Buy crypto</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Withdrawal History -->
    <v-card>
      <v-card-title class="text-h5">Withdrawal History</v-card-title>
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
        <tr v-if="withdrawals.length === 0">
          <td colspan="5" class="text-center py-12">
            <v-icon size="large" class="mb-2">mdi-history</v-icon>
            <div class="text-h6 text-medium-emphasis">No withdrawal history</div>
            <div class="text-caption mt-2">
              Your withdrawal transactions will appear here
            </div>
          </td>
        </tr>
        <tr v-for="withdrawal in withdrawals" :key="withdrawal.id">
          <td>{{ formatDate(withdrawal.date) }}</td>
          <td>{{ formatCurrency(withdrawal.amount) }}</td>
          <td>
            <v-chip variant="outlined" size="small">
              {{ withdrawal.method }}
            </v-chip>
          </td>
          <td>
            <v-chip :color="getStatusColor(withdrawal.status)" size="small">
              {{ withdrawal.status }}
            </v-chip>
          </td>
          <td class="text-caption">{{ withdrawal.reference }}</td>
        </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const withdrawals = ref([]); // Empty array to show no history
const showLowBalance = ref(false);

// Sample data structure (uncomment to test with sample data)
/*
withdrawals.value = [
  {
    id: 1,
    date: new Date('2023-10-15'),
    amount: 500,
    method: 'Bank Transfer',
    status: 'COMPLETED',
    reference: 'REF-123456'
  },
  {
    id: 2,
    date: new Date('2023-10-18'),
    amount: 200,
    method: 'PayPal',
    status: 'PENDING',
    reference: 'REF-789012'
  }
];
*/

function initiateWithdrawal() {
  // In a real app, you would check the user's balance here
  showLowBalance.value = true;
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
</style>