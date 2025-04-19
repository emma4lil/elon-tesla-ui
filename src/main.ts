import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';

import { fakeBackend } from '@/utils/helpers/fake-backend';

// print
import print from 'vue3-print-nb';
import { useAuthStore } from '@/stores/auth.ts';

const app = createApp(App);
fakeBackend();
app.use(createPinia());
const auth = useAuthStore()
auth.onInit()
app.use(router);
app.use(PerfectScrollbarPlugin);
app.use(VueTablerIcons);
app.use(print);
app.use(VueApexCharts);


app.use(vuetify).mount('#app');

