<template>
  <v-footer color="" padless>
    <v-container>
      <v-row>
        <!-- Company Info Column -->
        <v-col cols="12" md="4" class="text-center text-md-left">
          <div class="d-flex justify-center justify-md-start mb-4">
            <v-img
              src="./assets/logo-white.png"
              max-height="40"
              max-width="150"
              contain
            ></v-img>
          </div>
          <p class="white--text">
            Trade smarter with our advanced platform. Get real-time market data,
            powerful trading tools, and expert insights.
          </p>
          <div class="social-icons mt-4">
            <v-btn
              v-for="icon in socialIcons"
              :key="icon.name"
              :href="icon.link"
              target="_blank"
              icon
              class="mx-1 white--text"
            >
              <v-icon size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Quick Links Columns -->
        <v-col cols="6" sm="3" md="2">
          <h4 class="white--text mb-4">Markets</h4>
          <v-list color="transparent" dense>
            <v-list-item
              v-for="(item, i) in marketLinks"
              :key="i"
              :to="item.route"
              link
              class="px-0"
            >
              <v-list-item-title class="white--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="6" sm="3" md="2">
          <h4 class="white--text mb-4">Platform</h4>
          <v-list color="transparent" dense>
            <v-list-item
              v-for="(item, i) in platformLinks"
              :key="i"
              :to="item.route"
              link
              class="px-0"
            >
              <v-list-item-title class="white--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="6" sm="3" md="2">
          <h4 class="white--text mb-4">Company</h4>
          <v-list color="transparent" dense>
            <v-list-item
              v-for="(item, i) in companyLinks"
              :key="i"
              :to="item.route"
              link
              class="px-0"
            >
              <v-list-item-title class="white--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Newsletter Column -->
        <v-col cols="6" sm="3" md="2">
          <h4 class="white--text mb-4">Newsletter</h4>
          <p class="white--text caption">
            Subscribe to get market updates and trading insights
          </p>
          <v-text-field
            variant="outlined"
            v-model="email"
            label="Your Email"
            solo
            flat
            background-color="white"
            dense
            class="mb-2"
          ></v-text-field>
          <v-btn color="secondary" block depressed @click="subscribe">
            Subscribe
          </v-btn>
        </v-col>
      </v-row>

      <!-- Divider and Copyright -->
      <v-divider class="my-4 secondary"></v-divider>
      <v-row class="text-center text-md-left">
        <v-col cols="12" md="6" class="white--text">
          &copy; {{ new Date().getFullYear() }} {{ companyName }}. All rights reserved.
        </v-col>
        <v-col cols="12" md="6" class="text-md-right">
          <v-btn

            variant="text"
            v-for="(link, i) in legalLinks"
            :key="i"
            :to="link.route"
            small
            class="white--text"
          >
            {{ link.text }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue';


const companyName = "TradePro";
const email = ref('');

const socialIcons = [
  { name: 'twitter', icon: '$twitter', link: 'https://twitter.com' },
  { name: 'facebook', icon: '$facebook', link: 'https://facebook.com' },
  { name: 'linkedin', icon: '$linkedin', link: 'https://linkedin.com' },
  { name: 'youtube', icon: '$youtube', link: 'https://youtube.com' },
];

const marketLinks = [
  { text: 'Stocks', route: '/markets/stocks' },
  { text: 'Forex', route: '/markets/forex' },
  { text: 'Crypto', route: '/markets/crypto' },
  { text: 'Commodities', route: '/markets/commodities' },
  { text: 'Indices', route: '/markets/indices' },
];

const platformLinks = [
  { text: 'Web Platform', route: '/platform/web' },
  { text: 'Mobile App', route: '/platform/mobile' },
  { text: 'Trading Tools', route: '/platform/tools' },
  { text: 'API', route: '/platform/api' },
  { text: 'Pricing', route: '/pricing' },
];

const companyLinks = [
  { text: 'About Us', route: '/about' },
  { text: 'Careers', route: '/careers' },
  { text: 'Blog', route: '/blog' },
  { text: 'Contact', route: '/contact' },
  { text: 'Help Center', route: '/help' },
];

const legalLinks = [
  { text: 'Terms of Service', route: '/legal/terms' },
  { text: 'Privacy Policy', route: '/legal/privacy' },
  { text: 'Risk Disclosure', route: '/legal/risk' },
  { text: 'AML Policy', route: '/legal/aml' },
];

const subscribe = () => {
  if (email.value) {
    alert(`Thank you for subscribing with ${email.value}`);
    email.value = '';
  }
};
</script>

<style scoped>

</style>