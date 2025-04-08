<script setup lang="ts">
import { shallowRef } from 'vue';
import { ArchiveIcon, CopyIcon, DownloadIcon, FileExportIcon } from 'vue-tabler-icons';
import iconCard from '@/assets/images/icons/icon-card.svg';
import Depositor from '@/views/dashboards/default/components/Depositor.vue';
const items = shallowRef([
  { title: 'Import Card', icon: DownloadIcon },
  { title: 'Copy Data', icon: CopyIcon },
  { title: 'Export', icon: FileExportIcon },
  { title: 'Archive File', icon: ArchiveIcon }
]);
</script>

<template>
  <v-card elevation="0" class="overflow-hidden bubble-shape bubble-secondary-shape">
    <v-card-text>
      <h3 class="text-h3 font-weight-medium">
        $123.00 <a href="#"><CircleArrowUpRightIcon stroke-width="1.5" width="28" class="text-white" /> </a>
      </h3>
      <span class="text-subtitle-1 text-medium-emphasis primary">Total Balance</span>
    </v-card-text>
    <Depositor/>
  </v-card>
</template>
