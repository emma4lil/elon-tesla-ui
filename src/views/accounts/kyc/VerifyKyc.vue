<template>
  <v-container class="my-8" fluid>
    <v-card class="mx-auto" max-width="1000">
      <v-card-title class="text-h5 bg-deep-purple bg-deep-orange white--text pa-4">
        KYC Verification
      </v-card-title>

      <v-card-text class="pa-6">
        <template v-if="verificationStatus === 'pending'">
          <v-alert type="info" class="mb-6">
            Your verification is pending approval. We'll notify you once it's completed.
          </v-alert>
          <div class="d-flex justify-space-between">
            <v-btn color="primary" @click="resetForm">Submit Another Document</v-btn>
            <v-btn color="secondary" @click="checkStatus">Check Status</v-btn>
          </div>
        </template>

        <template v-else-if="verificationStatus === 'approved'">
          <v-alert type="success" class="mb-6">
            <v-icon left>mdi-check-circle</v-icon>
            Your KYC verification has been approved!
          </v-alert>
        </template>

        <template v-else-if="verificationStatus === 'rejected'">
          <v-alert type="error" class="mb-6">
            <v-icon left>mdi-alert-circle</v-icon>
            Your KYC verification was rejected. Reason: {{ rejectionReason }}
          </v-alert>
          <v-btn color="primary" @click="resetForm">Try Again</v-btn>
        </template>

        <template v-else>
          <p class="mb-6">
            To complete your KYC verification, please upload a clear photo of your government-issued ID
            (Passport, Driver's License, or National ID).
          </p>

          <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
            <v-select
              variant="outlined"
              v-model="idType"
              :items="idTypes"
              label="ID Type"
              :rules="[v => !!v || 'ID type is required']"
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

            <v-img
              v-if="frontPreview"
              :src="frontPreview"
              max-height="200"
              contain
              class="mb-4"
            ></v-img>

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

            <v-img
              v-if="backPreview"
              :src="backPreview"
              max-height="200"
              contain
              class="mb-4"
            ></v-img>

            <v-checkbox
              v-model="consent"
              :rules="[v => !!v || 'You must agree to continue']"
              label="I certify that this is a valid government-issued ID and the information is accurate."
              required
            ></v-checkbox>

            <v-btn
              type="submit"
              color="primary"
              :loading="loading"
              :disabled="!valid || loading"
              block
              large
            >
              Submit for Verification
            </v-btn>
          </v-form>
        </template>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const form = ref(null);
const valid = ref(false);
const loading = ref(false);
const verificationStatus = ref('unverified');
const rejectionReason = ref('');

const idType = ref('');
const idTypes = ref([
  'Passport',
  'Driver License',
  'National ID',
  'Residence Permit',
  'Other Government ID'
]);

const idFront = ref(null);
const idBack = ref(null);
const consent = ref(false);

const frontPreview = ref(null);
const backPreview = ref(null);

const previewFrontImage = (file) => {
  if (!file) {
    frontPreview.value = null;
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    frontPreview.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

const previewBackImage = (file) => {
  if (!file) {
    backPreview.value = null;
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    backPreview.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

const submitForm = async () => {
  const { valid: formValid } = await form.value.validate();

  if (!formValid) return;

  loading.value = true;

  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock response - 80% chance of pending, 10% approved, 10% rejected
    const randomStatus = Math.random();
    if (randomStatus < 0.9) {
      verificationStatus.value = 'pending';
    } else if (randomStatus < 0.99) {
      verificationStatus.value = 'approved';
    } else {
      verificationStatus.value = 'rejected';
      const reasons = [
        'Document image is blurry',
        'Document is expired',
        'Information not visible',
        'Document type not accepted',
        'Name mismatch'
      ];
      rejectionReason.value = reasons[Math.floor(Math.random() * reasons.length)];
    }

    // Store in localStorage for persistence
    localStorage.setItem('kycStatus', verificationStatus.value);
    if (verificationStatus.value === 'rejected') {
      localStorage.setItem('kycRejectionReason', rejectionReason.value);
    }

  } catch (error) {
    console.error('Error submitting KYC:', error);
    // In a real app, you might show a toast notification here
  } finally {
    loading.value = false;
  }
};

const checkStatus = async () => {
  loading.value = true;
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Randomly change status if pending (50% chance)
    if (verificationStatus.value === 'pending' && Math.random() > 0.5) {
      if (Math.random() > 0.1) {
        verificationStatus.value = 'approved';
        localStorage.setItem('kycStatus', 'approved');
      } else {
        verificationStatus.value = 'rejected';
        const reasons = [
          'Unable to verify document',
        ];
        rejectionReason.value = reasons[Math.floor(Math.random() * reasons.length)];
        localStorage.setItem('kycStatus', 'rejected');
        localStorage.setItem('kycRejectionReason', rejectionReason.value);
      }
    }
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
onMounted(() => {
  const savedStatus = localStorage.getItem('kycStatus');
  if (savedStatus) {
    verificationStatus.value = savedStatus;
    if (savedStatus === 'rejected') {
      rejectionReason.value = localStorage.getItem('kycRejectionReason') || '';
    }
  }
});
</script>

<style scoped>
.primary {
  background-color: #1976d2 !important;
  border-color: #1976d2 !important;
}
</style>