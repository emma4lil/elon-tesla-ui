<script setup lang="ts">
import { ref } from 'vue';
import { useCustomizerStore } from '../../../stores/customizer';
// Icon Imports
import { BellIcon, SettingsIcon, SearchIcon, Menu2Icon } from 'vue-tabler-icons';

// dropdown imports
import NotificationDD from './NotificationDD.vue';
import ProfileDD from './ProfileDD.vue';
import Searchbar from './SearchBarPanel.vue';

const customizer = useCustomizerStore();
const showSearch = ref(false);
function searchbox() {
  showSearch.value = !showSearch.value;
}
</script>

<template>
  <v-app-bar elevation="0" :height="$vuetify.display.smAndDown ? 64 : 80" class="header-bar">
    <v-btn
      class="hidden-md-and-down text-secondary"
      icon
      rounded="sm"
      variant="flat"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
      size="small"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </v-btn>
    <v-btn
      class="hidden-lg-and-up text-secondary ms-3"
      icon
      rounded="sm"
      variant="flat"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
      size="small"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </v-btn>

    <!---/Search part -->

    <v-spacer />
    <v-btn to="/about" text="about us" color="primary" />
    <!-- ---------------------------------------------- -->
    <!---right part -->
    <!-- ---------------------------------------------- -->

    <!-- ---------------------------------------------- -->
    <!-- Notification -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn icon class="text-secondary mx-3" rounded="sm" size="small" variant="flat" v-bind="props">
          <BellIcon stroke-width="1.5" size="22" />
        </v-btn>
      </template>
      <v-sheet rounded="md" width="330" elevation="12">
        <NotificationDD />
      </v-sheet>
    </v-menu>

    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn class="profileBtn text-primary" color="" variant="flat" rounded="pill" v-bind="props">
          <v-avatar size="30" class="mr-2 py-2">
            <img src="@/assets/images/profile/user-round.svg" alt="Julia" />
          </v-avatar>
          <SettingsIcon stroke-width="1.5" />
        </v-btn>
      </template>
      <v-sheet rounded="" width="330" elevation="12">
        <ProfileDD />
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>
.header-bar {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08) !important;
  backdrop-filter: blur(10px);
  background-color: rgba(var(--v-theme-surface), 0.95) !important;
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.1);
  transition: all 0.3s ease;
}

@media (max-width: 600px) {
  .header-bar {
    padding-left: 8px;
    padding-right: 8px;
  }

  .v-btn {
    margin: 0 2px;
  }

  .search-sheet {
    top: 64px;
  }
}
</style>
