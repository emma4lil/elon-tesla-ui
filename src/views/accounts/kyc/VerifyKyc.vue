<template>
  <v-container class="my-8" fluid>
    <v-card max-width="600" class="mx-auto">
      <v-card-title class="text text-center font-weight-bold">Kyc Notice!</v-card-title>
      <v-card-text>
        You are required to pay
        <v-chip class="font-weight-bold" size="small" rounded="0">$2000</v-chip>
        to proceed with KYC. Please contact support for more information.
      </v-card-text>
      <v-card-actions>
        <Depositor
          blocked
          title="Pay for Kyc!"
          description="Once payment is verified you will be allowed to proceed with kyc"
          amount="2000"
        />
      </v-card-actions>
    </v-card>

    <template v-if="false">
      <v-card variant="outlined" v-if="status === 'approved'" class="mx-auto d-flex justify-center align-center pa-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-success"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="9 12 12 15 16 10"></polyline>
        </svg>
        <div class="text-h3">Your kyc has been approved!</div>
      </v-card>

      <v-card variant="outlined" v-else-if="status === 'pending'" class="mx-auto d-flex justify-center align-center pa-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-warning"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12" y2="16"></line>
        </svg>
        <div class="text-h3">Your KYC verification is pending approval.</div>
      </v-card>

      <v-card v-else class="mx-auto" max-width="1000">
        <v-card-title class="text-h5 bg-deep-purple bg-deep-orange white--text pa-4"> KYC Verification</v-card-title>

        <v-card-text class="pa-6">
          <template v-if="verificationStatus === 'pending'">
            <v-alert type="info" class="mb-6"> Your verification is pending approval. We'll notify you once it's completed. </v-alert>
            <div class="d-flex justify-space-between">
              <v-btn color="primary" @click="resetForm">Submit Another Document</v-btn>
              <v-btn color="secondary" @click="checkStatus">Check Status</v-btn>
            </div>
          </template>

          <template v-else>
            <p class="mb-6">
              To complete your KYC verification, please upload a clear photo of your government-issued ID (Passport, Driver's License, or
              National ID).
            </p>

            <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
              <v-select
                variant="outlined"
                v-model="idType"
                :items="idTypes"
                label="ID Type"
                :rules="[(v) => !!v || 'ID type is required']"
                required
                outlined
                class="mb-4"
              ></v-select>

              <v-file-input
                variant="outlined"
                v-model="idFront"
                label="Front of ID"
                accept="image/*,.pdf"
                required
                outlined
                prepend-icon="mdi-camera"
                class="mb-4"
                @change="previewFrontImage"
              ></v-file-input>

              <v-img v-if="frontPreview" :src="frontPreview" max-height="200" contain class="mb-4"></v-img>

              <v-file-input
                variant="outlined"
                v-model="idBack"
                label="Back of ID (if applicable)"
                accept="image/*,.pdf"
                outlined
                prepend-icon="mdi-camera"
                class="mb-4"
                @change="previewBackImage"
              ></v-file-input>

              <v-img v-if="backPreview" :src="backPreview" max-height="200" contain class="mb-4"></v-img>

              <v-checkbox
                v-model="consent"
                :rules="[(v) => !!v || 'You must agree to continue']"
                label="I certify that this is a valid government-issued ID and the information is accurate."
                required
              ></v-checkbox>

              <v-btn type="submit" color="primary" :loading="loading" :disabled="!valid || loading" block large>
                Submit for Verification
              </v-btn>
            </v-form>
          </template>
        </v-card-text>
      </v-card>
    </template>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { supabase } from '@/superbase.ts';
import Deposit from '@/views/accounts/deposit/Deposit.vue';
import Depositor from '@/views/dashboards/default/components/Depositor.vue';

const form = ref(null);
const valid = ref(false);
const loading = ref(false);
const verificationStatus = ref('unverified');
const rejectionReason = ref('');

const idType = ref('');
const idTypes = ref(['Passport', 'Driver License', 'National ID', 'Residence Permit', 'Other Government ID']);

const idFront = ref(null);
const idBack = ref(null);
const consent = ref(false);

const frontPreview = ref(null);
const backPreview = ref(null);

// fetch kyc status from Supabase
const status = ref('normal');
const auth = useAuthStore();
const user = auth.user?.user_metadata;

const submitForm = async () => {
  const { valid: formValid } = await form.value.validate();

  if (!formValid) return;

  loading.value = true;

  try {
    const { data, error } = await supabase
      .from('kyc')
      .insert([
        {
          ownerId: user.sub,
          email: user.email
        }
      ])
      .single();

    if (error) {
      console.error('Error submitting KYC:', error);
      verificationStatus.value = 'rejected';
      rejectionReason.value = error.message;
    } else {
      verificationStatus.value = 'pending';
      localStorage.setItem('kycStatus', 'pending');
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  } finally {
    loading.value = false;
  }
};

const resetForm = () => {
  verificationStatus.value = 'unverified';
  idType.value = '';
  idFront.value = null;
  idBack.value = null;
  consent.value = false;
  frontPreview.value = null;
  backPreview.value = null;
  rejectionReason.value = '';
  form.value?.reset();
  localStorage.removeItem('kycStatus');
  localStorage.removeItem('kycRejectionReason');
};

// Check for existing status on component mount
onMounted(async () => {
  await fetchKycStatus();
});

const fetchKycStatus = async () => {
  try {
    const { data, error } = await supabase.from('kyc').select('status').eq('ownerId', user.sub).single();

    if (error) {
      console.error('Error fetching KYC status:', error);
    } else {
      console.log('KYC status:', data);
      status.value = data.status;
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
};
</script>

<style scoped>
.primary {
  background-color: #1976d2 !important;
  border-color: #1976d2 !important;
}
</style>
