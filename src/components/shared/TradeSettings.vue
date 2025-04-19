<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <v-card elevation="0" class="pa-6">
          <v-card-title class="text-h5 mb-6">
            <v-icon icon="$cog" size="large"></v-icon>
            Trade Settings
          </v-card-title>

          <v-card-text>
            <!-- Notification Preferences -->
            <v-card class="mb-6">
              <v-card-title class="text-subtitle-1">Notification Preferences</v-card-title>
              <v-card-text>
                <v-switch
                  v-model="settings.emailNotifications"
                  label="Email Notifications"
                  color="primary"
                  hide-details
                  class="mb-2"
                ></v-switch>
                <v-switch
                  v-model="settings.pushNotifications"
                  label="Push Notifications"
                  color="primary"
                  hide-details
                  class="mb-2"
                ></v-switch>
              </v-card-text>
            </v-card>

            <!-- Risk Management -->
            <v-card class="mb-6">
              <v-card-title class="text-subtitle-1">Risk Management</v-card-title>
              <v-card-text>
                <v-select
                  v-model="settings.riskLevel"
                  :items="riskLevels"
                  label="Risk Tolerance"
                  variant="outlined"
                  dense
                  class="mb-4"
                ></v-select>

                <v-slider
                  v-model="settings.maxDailyLoss"
                  label="Max Daily Loss (%)"
                  min="0"
                  max="100"
                  thumb-label
                  ticks
                  class="mb-4"
                ></v-slider>

                <v-slider
                  v-model="settings.maxPositionSize"
                  label="Max Position Size (%)"
                  min="1"
                  max="100"
                  thumb-label
                  ticks
                ></v-slider>
              </v-card-text>
            </v-card>

            <!-- Trading Preferences -->
            <v-card outlined class="mb-6">
              <v-card-title class="text-subtitle-1">Trading Preferences</v-card-title>
              <v-card-text>
                <v-select
                  v-model="settings.defaultOrderType"
                  :items="orderTypes"
                  label="Default Order Type"
                  variant="outlined"
                  dense
                  class="mb-4"
                ></v-select>

                <v-switch
                  v-model="settings.oneClickTrading"
                  label="One-Click Trading"
                  color="primary"
                  hide-details
                  class="mb-4"
                ></v-switch>

                <v-switch
                  v-model="settings.showAdvancedCharts"
                  label="Show Advanced Chart Tools"
                  color="primary"
                  hide-details
                ></v-switch>
              </v-card-text>
            </v-card>

            <!-- Confirmation Dialogs -->
            <v-card outlined class="mb-6">
              <v-card-title class="text-subtitle-1">Confirmation Dialogs</v-card-title>
              <v-card-text>
                <v-checkbox
                  v-model="settings.confirmMarketOrders"
                  label="Market Orders"
                  color="primary"
                  hide-details
                  class="mb-2"
                ></v-checkbox>
                <v-checkbox
                  v-model="settings.confirmLimitOrders"
                  label="Limit Orders"
                  color="primary"
                  hide-details
                  class="mb-2"
                ></v-checkbox>
                <v-checkbox
                  v-model="settings.confirmStopOrders"
                  label="Stop Orders"
                  color="primary"
                  hide-details
                ></v-checkbox>
              </v-card-text>
            </v-card>

            <!-- API Settings -->
            <v-card outlined class="mb-6">
              <v-card-title class="text-subtitle-1">API Settings</v-card-title>
              <v-card-text>
                <v-switch
                  v-model="settings.apiTradingEnabled"
                  label="Enable API Trading"
                  color="primary"
                  hide-details
                  class="mb-4"
                ></v-switch>

                <template v-if="settings.apiTradingEnabled">
                  <v-text-field
                    v-model="settings.apiKey"
                    label="API Key"
                    outlined
                    dense
                    readonly
                    class="mb-2"
                    :append-icon="showApiKey ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="showApiKey = !showApiKey"
                    :type="showApiKey ? 'text' : 'password'"
                  ></v-text-field>

                  <v-btn
                    color="primary"
                    outlined
                    small
                    @click="generateApiKey"
                    class="mr-2"
                  >
                    Generate New Key
                  </v-btn>

                  <v-btn
                    color="error"
                    outlined
                    small
                    @click="revokeApiKey"
                  >
                    Revoke Key
                  </v-btn>
                </template>
              </v-card-text>
            </v-card>
          </v-card-text>

          <v-card-actions class="justify-end">
            <v-btn
              color="secondary"
              text
              @click="resetSettings"
            >
              Reset Defaults
            </v-btn>

            <v-btn
              color="primary"
              :loading="saving"
              @click="saveSettings"
            >
              Save Settings
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Save confirmation dialog -->
    <v-dialog v-model="saveDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h6">Settings Saved</v-card-title>
        <v-card-text>
          Your trade settings have been successfully updated.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="saveDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Settings state
const settings = ref({
  emailNotifications: true,
  pushNotifications: true,
  smsNotifications: false,
  riskLevel: 'Medium',
  maxDailyLoss: 5,
  maxPositionSize: 25,
  defaultOrderType: 'Market',
  oneClickTrading: false,
  showAdvancedCharts: true,
  confirmMarketOrders: true,
  confirmLimitOrders: false,
  confirmStopOrders: true,
  apiTradingEnabled: false,
  apiKey: ''
});

const showApiKey = ref(false);
const saving = ref(false);
const saveDialog = ref(false);

// Options
const riskLevels = ref(['Low', 'Medium', 'High', 'Very High']);
const orderTypes = ref(['Market', 'Limit', 'Stop', 'Stop Limit']);

// Generate a mock API key
const generateApiKey = () => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let key = 'sk_';
  for (let i = 0; i < 32; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  settings.value.apiKey = key;
};

// Revoke API key
const revokeApiKey = () => {
  settings.value.apiKey = '';
  settings.value.apiTradingEnabled = false;
};

// Save settings (mock API call)
const saveSettings = () => {
  saving.value = true;
  // Simulate API call delay
  setTimeout(() => {
    saving.value = false;
    saveDialog.value = true;
    // In a real app, you would save to your backend here
    console.log('Settings saved:', settings.value);
  }, 1000);
};

// Reset to defaults
const resetSettings = () => {
  settings.value = {
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    riskLevel: 'Medium',
    maxDailyLoss: 5,
    maxPositionSize: 25,
    defaultOrderType: 'Market',
    oneClickTrading: false,
    showAdvancedCharts: true,
    confirmMarketOrders: true,
    confirmLimitOrders: false,
    confirmStopOrders: true,
    apiTradingEnabled: false,
    apiKey: ''
  };
  showApiKey.value = false;
};

// Load settings (mock)
onMounted(() => {
  // Simulate loading from API
  setTimeout(() => {
    settings.value = {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      riskLevel: 'Medium',
      maxDailyLoss: 5,
      maxPositionSize: 25,
      defaultOrderType: 'Market',
      oneClickTrading: false,
      showAdvancedCharts: true,
      confirmMarketOrders: true,
      confirmLimitOrders: false,
      confirmStopOrders: true,
      apiTradingEnabled: false,
      apiKey: ''
    };
  }, 500);
});
</script>

<style scoped>

</style>