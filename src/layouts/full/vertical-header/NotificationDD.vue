<script setup lang="ts">
import { ref } from 'vue';
import { BuildingStoreIcon, SendIcon, MailboxIcon, PhotoIcon } from 'vue-tabler-icons';
import { useAuthStore } from '@/stores/auth.ts';

const notificationDD = ref(['All Notifications', 'New', 'Unread', 'Other']);
const selectNotify = ref<string>('All Notifications');

var auth = useAuthStore();
const user = auth.user?.user_metadata;
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- notifications DD -->
  <!-- ---------------------------------------------- -->
  <div class="pa-4">
    <div class="d-flex align-center justify-space-between mb-3">
      <h6 class="text-subtitle-1">
        All Notifications
        <v-chip color="warning" variant="flat" size="small" class="ml-2 text-white">01</v-chip>
      </h6>
      <a href="#" class="text-decoration-underline text-primary text-subtitle-2">Mark as all read</a>
    </div>
    <v-select :items="notificationDD" v-model="selectNotify" color="primary" variant="outlined" density="default" hide-details></v-select>
  </div>
  <v-divider></v-divider>
  <perfect-scrollbar style="height: calc(100vh - 300px); max-height: 650px">
    <v-list class="py-0" lines="three">
      <v-list-item value="" color="secondary" class="no-spacer">
        <template v-slot:prepend>
          <v-avatar size="40" class="mr-3 py-2">
            <img src="@/assets/images/profile/user-round.svg" width="40" alt="Julia" />
          </v-avatar>
        </template>
        <div class="d-inline-flex align-center justify-space-between w-100">
          <h6 class="text-subtitle-1 font-weight-regular">{{ user.first_name }} {{ user.last_name }}</h6>
          <span class="text-subtitle-2 text-medium-emphasis">2 mins ago</span>
        </div>

        <p class="text-subtitle-2 text-medium-emphasis mt-1">
          Welcome to Elon Tesla! � Start trading smarter and unlock endless opportunities. We’re thrilled to have you on board! 🚀 Happy
          trading! 💰
        </p>
        <div class="mt-3">
          <v-chip size="small" text="Unread" color="error" variant="tonal" class="mr-2" />
          <v-chip size="small" text="New" color="warning" variant="tonal" />
        </div>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item value="" color="secondary" class="no-spacer">
        <template v-slot:prepend>
          <v-avatar size="40" variant="flat" color="lightsuccess" class="mr-3 py-2 text-success">
            <BuildingStoreIcon size="20" />
          </v-avatar>
        </template>
        <div class="d-inline-flex align-center justify-space-betwseen w-100">
          <h6 class="text-subtitle-1">Complete KYC</h6>
          <span class="text-subtitle-2 text-medium-emphasis">2 mins ago</span>
        </div>

        <p class="text-subtitle-2 text-medium-emphasis mt-1">Complete your kyc to unlock greater withrawal amounts</p>
        <div class="mt-3">
          <v-chip size="small" color="error" text="Unread" variant="tonal" />
        </div>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </perfect-scrollbar>
  <v-divider></v-divider>
  <div class="pa-2 text-center">
    <v-btn color="primary" variant="text">View All</v-btn>
  </div>
</template>
