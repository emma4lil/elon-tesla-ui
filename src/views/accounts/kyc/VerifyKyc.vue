<template>
  <v-container v-if="mounted" class="max-width-800">
    <v-stepper v-model="step" :items="steps" hide-actions>
      <v-stepper-window>
        <!-- Step 1: Document Upload -->
        <v-stepper-window-item :value="1">
          <v-card title="Identity Verification" subtitle="Step 1 of 3" flat>
            <v-card-text>
              <v-alert type="info" variant="tonal" class="mb-6">
                Please upload a clear photo of your government-issued ID
              </v-alert>

              <v-file-input
                v-model="idDocument"
                label="ID Document"
                accept="image/*,.pdf"
                prepend-icon="mdi-account-card-details"
                :rules="fileRules"
                required
                class="mb-4"
                clearable
                @update:modelValue="validateStep1"
              ></v-file-input>

              <v-file-input
                v-model="selfieWithId"
                label="Selfie with ID"
                accept="image/*"
                prepend-icon="mdi-camera-account"
                :rules="fileRules"
                required
                hint="Take a selfie holding your ID next to your face"
                persistent-hint
                clearable
                @update:modelValue="validateStep1"
              ></v-file-input>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="step = 2"
                :disabled="!canProceedToStep2"
              >
                Continue
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-window-item>

        <!-- Step 2: Personal Details -->
        <v-stepper-window-item :value="2">
          <v-card title="Personal Details" subtitle="Step 2 of 3" flat>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.firstName"
                    label="First Name"
                    :rules="nameRules"
                    required
                    @update:modelValue="validateStep2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.lastName"
                    label="Last Name"
                    :rules="nameRules"
                    required
                    @update:modelValue="validateStep2"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                v-model="form.idNumber"
                label="ID Number"
                :rules="idRules"
                required
                class="mb-4"
                @update:modelValue="validateStep2"
              ></v-text-field>

              <v-select
                v-model="form.idType"
                label="ID Type"
                :items="idTypes"
                :rules="[v => !!v || 'ID type is required']"
                required
                @update:modelValue="validateStep2"
              ></v-select>

              <v-text-field
                v-model="form.dob"
                label="Date of Birth"
                type="date"
                :max="maxDate"
                :rules="[v => !!v || 'Date of birth is required']"
                required
                class="mt-4"
                @update:modelValue="validateStep2"
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-btn variant="text" @click="step = 1">Back</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="step = 3"
                :disabled="!isStep2Valid"
              >
                Continue
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-window-item>

        <!-- Step 3: Confirmation -->
        <v-stepper-window-item :value="3">
          <template v-if="!submitted">
            <v-card title="Confirm Your Information" subtitle="Step 3 of 3" flat>
              <v-card-text>
                <v-alert type="warning" variant="tonal" class="mb-6">
                  Please verify all information is correct before submitting
                </v-alert>

                <div class="mb-6">
                  <div class="text-subtitle-1 mb-2">Document Uploads:</div>
                  <v-chip v-if="idDocument.length > 0" class="ma-1" prepend-icon="mdi-file">
                    {{ idDocument[0].name }}
                  </v-chip>
                  <v-chip v-if="selfieWithId.length > 0" class="ma-1" prepend-icon="mdi-image">
                    {{ selfieWithId[0].name }}
                  </v-chip>
                </div>

                <v-divider class="my-4"></v-divider>

                <div class="text-subtitle-1 mb-2">Personal Information:</div>
                <v-table density="compact">
                  <tbody>
                  <tr>
                    <td>Full Name:</td>
                    <td>{{ form.firstName }} {{ form.lastName }}</td>
                  </tr>
                  <tr>
                    <td>ID Type:</td>
                    <td>{{ form.idType }}</td>
                  </tr>
                  <tr>
                    <td>ID Number:</td>
                    <td>{{ form.idNumber }}</td>
                  </tr>
                  <tr>
                    <td>Date of Birth:</td>
                    <td>{{ formatDate(form.dob) }}</td>
                  </tr>
                  </tbody>
                </v-table>
              </v-card-text>

              <v-card-actions>
                <v-btn variant="text" @click="step = 2">Back</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="submitKyc" :loading="loading">
                  Submit Verification
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>

          <template v-else>
            <v-card title="Verification Submitted" flat>
              <v-card-text>
                <v-alert type="success" variant="tonal" class="mb-6">
                  <template v-slot:prepend>
                    <v-icon size="large">mdi-check-circle</v-icon>
                  </template>
                  <div class="text-h6">KYC verification submitted!</div>
                  <div>Your documents are pending verification.</div>
                </v-alert>

                <v-card variant="outlined" class="mb-4">
                  <v-card-text>
                    <div class="d-flex align-center mb-2">
                      <v-icon color="info" class="mr-2">mdi-clock-outline</v-icon>
                      <span class="text-subtitle-1">Verification Status: Pending</span>
                    </div>
                  </v-card-text>
                </v-card>

                <div class="text-center mt-6">
                  <v-btn color="primary" to="/dashboard">Return to Dashboard</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </template>
        </v-stepper-window-item>
      </v-stepper-window>
    </v-stepper>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const mounted = ref(false);
const step = ref(1);
const submitted = ref(false);
const loading = ref(false);
const idDocument = ref<File[]>([]);
const selfieWithId = ref<File[]>([]);

const steps = ['Identity Verification', 'Details', 'Confirmation'];
const idTypes = ['Passport', 'Driver License', 'National ID'];
const maxDate = new Date().toISOString().split('T')[0];

const form = ref({
  firstName: '',
  lastName: '',
  idNumber: '',
  idType: '',
  dob: ''
});

// Validation rules
const fileRules = [
  (v: File[]) => (v && v.length > 0) || 'File is required',
  (v: File[]) => !v[0] || v[0].size < 5000000 || 'File size should be less than 5 MB'
];

const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => (v && v.length >= 2) || 'Name must be at least 2 characters'
];

const idRules = [
  (v: string) => !!v || 'ID number is required',
  (v: string) => (v && v.length >= 4) || 'ID number must be at least 4 characters'
];

// Validation states
const step1Valid = ref(false);
const step2Valid = ref(false);

const validateStep1 = () => {
  step1Valid.value = idDocument.value.length > 0 && selfieWithId.value.length > 0;
};

const validateStep2 = () => {
  step2Valid.value = (
    form.value.firstName.length >= 2 &&
    form.value.lastName.length >= 2 &&
    form.value.idNumber.length >= 4 &&
    !!form.value.idType &&
    !!form.value.dob
  );
};

const canProceedToStep2 = computed(() => step1Valid.value);
const isStep2Valid = computed(() => step2Valid.value);

function formatDate(dateString: string) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function submitKyc() {
  loading.value = true;

  // Simulate API call
  setTimeout(() => {
    loading.value = false;
    submitted.value = true;
  }, 1500);
}

onMounted(() => {
  mounted.value = true;
});
</script>

<style scoped>
.max-width-800 {
  max-width: 800px;
  margin: 0 auto;
}
</style>