<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { supabase } from '@/superbase.ts';
import { router } from '@/router';
import LogoDark from '@/layouts/full/logo/LogoDark.vue';
import { allCountries } from 'country-region-data';

const showRegAlert = ref(false);
const loading = ref(false);

const phone = ref('');

const checkbox = ref(false);
const show1 = ref(false);
const password = ref('');
const confirmPassword = ref('');
const email = ref('');
const Regform = ref();
const firstname = ref('');
const lastname = ref('');
const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);
const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);

const emit = defineEmits(['country-selected']);

const selectedCountry = ref('');
const selectedState = ref('');
const countryOptions = ref<string[]>([]);
const stateOptions = ref<string[]>([]);

// Setup country list on mount
onMounted(() => {
  countryOptions.value = allCountries.map((c) => c[0]);
});

// Watch for country change to update states
watch(selectedCountry, (newCountry) => {
  const found = allCountries.find((c) => c[0] === newCountry);
  if (found) {
    stateOptions.value = found[2].map((r) => r[0]);
  } else {
    stateOptions.value = [];
  }
});

function validate() {
  Regform.value.validate();
  if (Regform.value.isValid) {
    if (password.value === confirmPassword.value) {
      createAccount();
    } else {
      console.error('Passwords do not match');
    }
  } else {
    console.error('Form is invalid');
  }
}

async function createAccount() {
  loading.value = true;
  let { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        first_name: firstname.value,
        last_name: lastname.value
      }
    }
  });

  if (error) {
    loading.value = false;
    alert(error.message);
  } else {
    loading.value = false;
    console.log('Account created successfully:', data);
    showRegAlert.value = true;
    alert('Account created successfully');
    await router.push('dashboard/default');
  }
}
</script>

<template>
  <div class="d-flex justify-center">
    <LogoDark class="mr-5" />
  </div>

  <v-card v-if="showRegAlert">
    <v-card-text class="mt-3">
      <h2 class="text-center mb-2">Registration successful!</h2>
      <v-btn variant="tonal" size="large" to="/dashboard/default" color="primary" block>login</v-btn>
    </v-card-text>
  </v-card>

  <template v-else>
    <h5 class="text-h4 text-center my-4 mb-8">Sign up with Email address</h5>
    <v-form ref="Regform" lazy-validation action="/dashboards/analytical" class="mt-7 loginForm">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="firstname"
            density="comfortable"
            hide-details="auto"
            variant="outlined"
            color="primary"
            label="Firstname"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="lastname"
            density="comfortable"
            hide-details="auto"
            variant="outlined"
            color="primary"
            label="Lastname"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email Address / Username"
        class="mt-4 mb-4"
        required
        density="comfortable"
        hide-details="auto"
        variant="outlined"
        color="primary"
      ></v-text-field>
      <v-text-field
        v-model="phone"
        label="Phone number"
        class="mt-4 mb-4"
        required
        density="comfortable"
        hide-details="auto"
        variant="outlined"
        color="primary"
      ></v-text-field>
      <v-select
        v-model="selectedCountry"
        :items="countryOptions"
        label="Select a Country"
        variant="outlined"
        color="primary"
        class="mt-4"
      ></v-select>

      <v-select
        v-model="selectedState"
        :items="stateOptions"
        label="Select State / Province"
        variant="outlined"
        color="primary"
        class="mt-4"
      />
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
        density="comfortable"
        variant="outlined"
        color="primary"
        hide-details="auto"
        :append-icon="show1 ? '$eye' : '$eyeOff'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        class="pwdInput"
      ></v-text-field>
      <v-text-field
        v-model="confirmPassword"
        :rules="passwordRules"
        label="Confirm Password"
        required
        density="comfortable"
        variant="outlined"
        color="primary"
        hide-details="auto"
        :append-icon="show1 ? '$eye' : '$eyeOff'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        class="pwdInput mt-4"
      ></v-text-field>

      <div class="d-sm-inline-flex align-center mt-2 mb-7 mb-sm-0 font-weight-bold">
        <v-checkbox
          v-model="checkbox"
          :rules="[(v: any) => !!v || 'You must agree to continue!']"
          label="Agree with?"
          required
          color="primary"
          class="ms-n2"
          hide-details
        ></v-checkbox>
        <a href="#" class="ml-1 text-lightText">Terms and Condition</a>
      </div>
      <v-btn :loading="loading" color="secondary" block class="mt-2" variant="flat" size="large" @click="validate()"> Sign Up </v-btn>
    </v-form>
    <v-alert text="Account created successfully" v-model="showRegAlert" class="mt-2" closable type="success" />
    <div class="mt-5 text-right">
      <v-divider />
      <v-btn variant="plain" to="/login" class="mt-2 text-capitalize mr-n2">Already have an account?</v-btn>
    </div>
  </template>
</template>
<style lang="scss">
.custom-devider {
  border-color: rgba(0, 0, 0, 0.08) !important;
}

.googleBtn {
  border-color: rgba(0, 0, 0, 0.08);
  margin: 30px 0 20px 0;
}

.outlinedInput .v-field {
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
}

.orbtn {
  padding: 2px 40px;
  border-color: rgba(0, 0, 0, 0.08);
  margin: 20px 15px;
}

.pwdInput {
  position: relative;

  .v-input__append {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
