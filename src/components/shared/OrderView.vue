<template>
  <v-card>
    <v-card-title class="text-h5">Active Orders</v-card-title>
    <v-card-text>
      <v-table>
        <thead>
        <tr>
          <th class="text-left">Symbol</th>
          <th class="text-left">Side</th>
          <th class="text-left">Price</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Status</th>
          <th class="text-left">Time</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="orders.length === 0">
          <td colspan="6" class="text-center py-8">
            <div class="text-body-1 text-medium-emphasis">
              No orders available
            </div>
            <div class="text-caption mt-2">
              Please place orders in the <router-link to="/dashboard/default">trade view</router-link>
            </div>
          </td>
        </tr>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.symbol }}</td>
          <td>
            <v-chip :color="order.side === 'BUY' ? 'success' : 'error'" size="small">
              {{ order.side }}
            </v-chip>
          </td>
          <td>{{ order.price }}</td>
          <td>{{ order.quantity }}</td>
          <td>
            <v-chip :color="getStatusColor(order.status)" size="small">
              {{ order.status }}
            </v-chip>
          </td>
          <td>{{ formatTime(order.time) }}</td>
        </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const orders = ref([]); // Empty array to show the "no orders" state

// Sample data structure (uncomment to test with sample data)
/*
orders.value = [
  {
    id: 1,
    symbol: 'AAPL',
    side: 'BUY',
    price: 175.42,
    quantity: 10,
    status: 'FILLED',
    time: new Date('2023-05-15T10:30:00')
  },
  {
    id: 2,
    symbol: 'TSLA',
    side: 'SELL',
    price: 265.78,
    quantity: 5,
    status: 'PENDING',
    time: new Date('2023-05-15T11:45:00')
  }
];
*/

function getStatusColor(status) {
  const statusColors = {
    'FILLED': 'success',
    'PENDING': 'warning',
    'CANCELLED': 'error',
    'REJECTED': 'error'
  };
  return statusColors[status] || 'info';
}

function formatTime(date) {
  if (!date) return '';
  return new Date(date).toLocaleString();
}
</script>

<style scoped>
.v-table {
  width: 100%;
}
</style>