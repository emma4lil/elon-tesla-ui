<script setup lang="ts">
import { RouterView } from 'vue-router';
import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue';
import VerticalHeaderVue from './vertical-header/VerticalHeader.vue';
import Customizer from './customizer/CustomizerPanel.vue';
import FooterPanel from './footer/FooterPanel.vue';
import { useCustomizerStore } from '@/stores/customizer.ts';

const customizer = useCustomizerStore();
</script>

<template>
  <v-locale-provider>
    <v-app
      theme="DarkThemeOrange"
      :class="[customizer.fontTheme, customizer.mini_sidebar ? 'mini-sidebar' : '', customizer.inputBg ? 'inputWithbg' : '']"
    >
      <Customizer />
      <VerticalSidebarVue />
      <VerticalHeaderVue />

      <v-main>
        <v-container class="page-wrapper" fluid>
          <RouterView />
          <!--            <v-btn-->
          <!--              class="customizer-btn"-->
          <!--              size="small"-->
          <!--              icon-->
          <!--              variant="flat"-->
          <!--              color="secondary"-->
          <!--              @click.stop="customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)"-->
          <!--            >-->
          <!--              <SettingsIcon class="icon" />-->
          <!--            </v-btn>-->
        </v-container>
        <v-container fluid class="pt-0">
          <FooterPanel />
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
