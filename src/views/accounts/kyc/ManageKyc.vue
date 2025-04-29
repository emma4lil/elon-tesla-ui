<template>
  <v-container class="my-8" fluid>
    <v-card variant="outlined" class="mx-auto">
      <v-card-title class="text-h5 bg-deep-purple bg-deep-orange white--text pa-4">
        KYC Management
      </v-card-title>

      <v-card-text class="pa-6">
        <v-alert v-if="error" type="error" class="mb-6">
          {{ error }}
        </v-alert>

        <v-alert v-if="successMessage" type="success" class="mb-6">
          {{ successMessage }}
        </v-alert>

        <v-data-table
          :headers="headers"
          :items="kycEntries"
          :loading="loading"
          class="elevation-1"
        >
          <template v-slot:item.status="{ item }">
            <v-chip
              :color="getStatusColor(item.status)"
              text-color="white"
              size="small"
            >
              {{ item.status }}
            </v-chip>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn
              v-if="item.status === 'pending'"
              color="success"
              size="small"
              @click="approveKyc(item)"
              :loading="item.processing"
            >
              Approve
            </v-btn>
            <v-btn
              v-if="item.status === 'pending'"
              color="error"
              size="small"
              class="ml-2"
              @click="rejectKyc(item)"
              :loading="item.processing"
            >
              Reject
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/superbase.ts';

const loading = ref(true);
const error = ref(null);
const successMessage = ref(null);
const kycEntries = ref([]);

const headers = [
  { title: 'Email', key: 'email' },
  { title: 'Status', key: 'status' },
  { title: 'Submitted At', key: 'created_at' },
  { title: 'Actions', key: 'actions', sortable: false }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'approved':
      return 'success';
    case 'pending':
      return 'warning';
    case 'rejected':
      return 'error';
    default:
      return 'grey';
  }
};

const fetchKycEntries = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    const { data, error: fetchError } = await supabase
      .from('kyc')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (fetchError) {
      throw fetchError;
    }
    
    // Add processing flag to each entry
    kycEntries.value = data.map(entry => ({
      ...entry,
      processing: false
    }));
  } catch (err) {
    console.error('Error fetching KYC entries:', err);
    error.value = 'Failed to load KYC entries. Please try again.';
  } finally {
    loading.value = false;
  }
};

const approveKyc = async (item) => {
  await updateKycStatus(item, 'approved');
};

const rejectKyc = async (item) => {
  await updateKycStatus(item, 'rejected');
};

const updateKycStatus = async (item, status) => {
  // Find the item in the array and set processing to true
  const entryIndex = kycEntries.value.findIndex(entry => entry.id === item.id);
  if (entryIndex !== -1) {
    kycEntries.value[entryIndex].processing = true;
  }
  
  error.value = null;
  successMessage.value = null;
  
  try {
    const { error: updateError } = await supabase
      .from('kyc')
      .update({ status })
      .eq('id', item.id);
    
    if (updateError) {
      throw updateError;
    }
    
    // Update the local state
    if (entryIndex !== -1) {
      kycEntries.value[entryIndex].status = status;
      kycEntries.value[entryIndex].processing = false;
    }
    
    successMessage.value = `KYC entry ${status} successfully.`;
    
    // Refresh the list after a short delay
    setTimeout(() => {
      fetchKycEntries();
    }, 2000);
  } catch (err) {
    console.error(`Error ${status} KYC entry:`, err);
    error.value = `Failed to ${status} KYC entry. Please try again.`;
    
    // Reset processing state
    if (entryIndex !== -1) {
      kycEntries.value[entryIndex].processing = false;
    }
  }
};

// Fetch KYC entries when component is mounted
onMounted(async () => {
  await fetchKycEntries();
});
</script>

<style scoped>
.v-data-table {
  width: 100%;
}
</style>