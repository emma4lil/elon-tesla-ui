<script setup lang="ts">
import { shallowRef, ref } from 'vue';
import { useCustomizerStore } from '../../../stores/customizer';
import sidebarItems from './sidebarItem';

import NavGroup from './NavGroup/NavGroup.vue';
import NavItem from './NavItem/NavItem.vue';
import NavCollapse from './NavCollapse/NavCollapse.vue';
import ExtraBox from './extrabox/ExtraBox.vue';
import Logo from '../logo/LogoMain.vue';
import { CircleIcon } from 'vue-tabler-icons';

const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(sidebarItems);
const isAdmin = ref(false);

const adminNav = ref({
  title: 'Manage KYC',
  icon: CircleIcon,
  to: '/accounts/kyc/manage',
  isAdmin: true
});
</script>

<template>
  <v-navigation-drawer
    left
    v-model="customizer.Sidebar_drawer"
    elevation="0"
    rail-width="60"
    mobile-breakpoint="md"
    app
    class="leftSidebar"
    :rail="customizer.mini_sidebar"
    expand-on-hover
    temporary
    :permanent="$vuetify.display.mdAndUp"
  >
    <!---Logo part -->

    <div class="pa-5">
      <Logo />
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
      <v-list class="pa-4">
        <!---Menu Loop -->
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <!---Item Sub Header -->
          <NavGroup :item="item" v-if="item.header" :key="item.title" />
          <!---Item Divider -->
          <v-divider class="my-3" v-else-if="item.divider" />
          <!---If Has Child -->
          <NavCollapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
          <!---Single Item-->
          <NavItem :item="item" v-else class="leftPadding" />
          <!---End Single Item-->
        </template>

        <nav-item v-if="isAdmin" :item="adminNav" />
      </v-list>

      <div class="pa-4">
        <ExtraBox />
      </div>
      <div class="pa-4 text-center">
        <v-chip color="inputBorder" size="small"> v1.3.0 </v-chip>
      </div>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>

<style scoped>
.leftSidebar {
  border-right: 1px solid rgba(var(--v-theme-primary), 0.1);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.leftPadding {
  transition: all 0.2s ease;
}

.leftPadding:hover {
  background-color: rgba(var(--v-theme-primary), 0.05);
  border-radius: 8px;
}

@media (max-width: 960px) {
  .leftSidebar {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
}

@media (max-width: 600px) {
  .pa-5 {
    padding: 12px !important;
  }

  .v-list {
    padding: 8px !important;
  }
}
</style>
