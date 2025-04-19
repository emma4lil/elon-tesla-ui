<template>
  <v-app-bar app>
    <logo-dark />
    <!-- Desktop & Mobile Links -->
    <v-spacer />
    <v-btn
      prepend-icon="$dashboard"
      variant="outlined"
      v-if="user"
      to="/dashboard/default"
    >
      Trade Dashboard
    </v-btn>

    <template v-else>
      <v-btn
        v-for="link in links"
        :key="link.text"
        text
        :to="link.to"
        class="mx-1"
      >
        {{ link.text }}
      </v-btn>
    </template>

    <v-menu v-if="user" :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn
          class="profileBtn text-primary"
          color="lightprimary"
          variant="flat"
          rounded="pill"
          v-bind="props"
        >
          <v-avatar size="30" class="mr-2 py-2">
            <img src="@/assets/images/profile/user-round.svg" alt="Julia" />
          </v-avatar>
          <SettingsIcon stroke-width="1.5" />
        </v-btn>
      </template>
      <v-sheet rounded="md" width="330" elevation="12">
        <ProfileDD />
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
import LogoDark from '@/layouts/full/logo/LogoDark.vue';
import { useAuthStore } from '@/stores/auth.ts';
import ProfileDD from '@/layouts/full/vertical-header/ProfileDD.vue';
import { SettingsIcon } from 'vue-tabler-icons';

const auth = useAuthStore();
const user = auth.user;

const drawer = ref(true);

const links = [
  { text: 'Login', to: '/login' },
  { text: 'Register', to: '/register' }
];
</script>
