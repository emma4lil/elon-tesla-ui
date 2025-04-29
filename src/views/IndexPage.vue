<template>
  <!-- Hero Section with Carousel -->
  <section class="hero-section">
    <Carousel />
    
    <!-- Market Ticker Overlay -->
    <div class="market-ticker-container">
      <v-sheet class="ticker-wrapper py-2" color="rgba(0, 0, 0, 0.7)" rounded="lg">
        <div class="d-flex align-center ticker-content">
          <v-chip color="primary" class="mr-3">LIVE MARKET</v-chip>
          <div class="ticker-scroll">
            <div class="d-flex">
              <div v-for="(asset, i) in marketData" :key="i" class="ticker-item mx-4">
                <span class="font-weight-medium">{{ asset.symbol }}</span>
                <span :class="asset.change >= 0 ? 'success--text' : 'error--text'" class="ml-2">
                  {{ asset.price }} 
                  <v-icon small :color="asset.change >= 0 ? 'success' : 'error'">
                    {{ asset.change >= 0 ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
                  </v-icon>
                  {{ Math.abs(asset.change) }}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </v-sheet>
    </div>
  </section>

  <!-- Key Stats Section -->
  <section class="stats-section py-8">
    <v-container>
      <v-row>
        <v-col cols="12" md="3" v-for="(stat, i) in keyStats" :key="i">
          <v-card class="stat-card text-center pa-4" elevation="0" rounded="lg">
            <v-icon size="48" color="primary" class="mb-2">{{ stat.icon }}</v-icon>
            <h3 class="text-h4 font-weight-bold">{{ stat.value }}</h3>
            <div class="text-subtitle-1 text-grey-darken-1">{{ stat.label }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Trading Plans Section -->
  <section class="trading-plans-section py-8">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-center mb-8">
            <h2 class="text-h3 font-weight-bold">Investment Plans</h2>
            <p class="text-subtitle-1 mt-2">Choose the investment plan that suits your financial goals</p>
          </div>
        </v-col>
      </v-row>
      <TradingPlans/>
    </v-container>
  </section>

  <!-- Platform Features Section -->
  <section class="features-section py-10">
    <v-parallax :src="imageLink.main" height="auto">
      <v-container class="py-10">
        <v-row>
          <v-col cols="12" md="6">
            <v-card color="rgba(0, 0, 0, 0.7)" class="pa-6" rounded="lg">
              <h2 class="text-h3 font-weight-bold text-white mb-6">Why Choose Tesla Invest Pro</h2>
              
              <div v-for="(feature, i) in platformFeatures" :key="i" class="d-flex align-start mb-4">
                <v-avatar color="primary" size="48" class="mr-4">
                  <v-icon color="white">{{ feature.icon }}</v-icon>
                </v-avatar>
                <div>
                  <h3 class="text-h5 font-weight-bold text-white">{{ feature.title }}</h3>
                  <p class="text-body-1 text-white-darken-1">{{ feature.description }}</p>
                </div>
              </div>
              
              <v-btn color="primary" size="large" class="mt-4">Learn More</v-btn>
            </v-card>
          </v-col>
          
          <v-col cols="12" md="6">
            <div class="d-flex flex-column justify-center h-100">
              <v-card color="rgba(0, 0, 0, 0.7)" class="pa-6 mb-4" rounded="lg">
                <h3 class="text-h4 font-weight-bold text-white">Mission</h3>
                <p class="text-body-1 text-white-darken-1">
                  To build the Tesla Invest Pro brand as the world's most popular financial broker institution recognized for innovation, superior performance, and creation of premium financial value for all stakeholders.
                </p>
              </v-card>
              
              <v-card color="rgba(0, 0, 0, 0.7)" class="pa-6" rounded="lg">
                <h3 class="text-h4 font-weight-bold text-white">Core Values</h3>
                <v-chip-group>
                  <v-chip color="primary" label text-color="white" class="ma-1">Integrity</v-chip>
                  <v-chip color="primary" label text-color="white" class="ma-1">Professionalism</v-chip>
                  <v-chip color="primary" label text-color="white" class="ma-1">Corporate Governance</v-chip>
                  <v-chip color="primary" label text-color="white" class="ma-1">Loyalty</v-chip>
                  <v-chip color="primary" label text-color="white" class="ma-1">Excellent Service</v-chip>
                </v-chip-group>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>

  <!-- Market Analysis Section -->
  <section class="market-analysis-section py-8">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-center mb-8">
            <h2 class="text-h3 font-weight-bold">Market Analysis</h2>
            <p class="text-subtitle-1 mt-2">Stay updated with the latest market trends and analysis</p>
          </div>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" md="8">
          <v-card class="chart-card pa-4" height="400" rounded="lg">
            <div class="d-flex justify-space-between align-center mb-4">
              <h3 class="text-h5 font-weight-bold">BTC/USD Performance</h3>
              <div>
                <v-btn-toggle v-model="chartTimeframe" mandatory color="primary" density="comfortable">
                  <v-btn value="1D">1D</v-btn>
                  <v-btn value="1W">1W</v-btn>
                  <v-btn value="1M">1M</v-btn>
                  <v-btn value="1Y">1Y</v-btn>
                </v-btn-toggle>
              </div>
            </div>
            <div class="chart-placeholder d-flex justify-center align-center">
              <p class="text-body-1 text-grey">Chart visualization would appear here</p>
            </div>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="4">
          <v-card class="market-news pa-4" height="400" rounded="lg">
            <h3 class="text-h5 font-weight-bold mb-4">Market News</h3>
            <v-list>
              <v-list-item v-for="(news, i) in marketNews" :key="i" class="px-0">
                <template v-slot:prepend>
                  <v-avatar size="40" color="grey-lighten-3" class="mr-3">
                    <v-img :src="news.image"></v-img>
                  </v-avatar>
                </template>
                <v-list-item-title class="font-weight-medium">{{ news.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ news.time }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
            <v-btn color="primary" variant="text" block class="mt-4">View All News</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <!-- Testimonials Section -->
  <section class="testimonials-section py-8 bg-grey-lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-center mb-8">
            <h2 class="text-h3 font-weight-bold">What Our Clients Say</h2>
            <p class="text-subtitle-1 mt-2">Hear from our satisfied investors around the world</p>
          </div>
        </v-col>
      </v-row>
      <Testimonials/>
    </v-container>
  </section>

  <!-- CTA Section -->
  <section class="cta-section py-10">
    <v-parallax :src="imageLink.social_cover" height="400">
      <v-container class="h-100 d-flex align-center">
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card color="rgba(0, 0, 0, 0.7)" class="text-center pa-6" rounded="lg">
              <h2 class="text-h3 font-weight-bold text-white mb-4">Ready to Start Investing?</h2>
              <p class="text-body-1 text-white-darken-1 mb-6">
                Join thousands of investors who trust Tesla Invest Pro for their investment needs. 
                Get started today and take control of your financial future.
              </p>
              <div class="d-flex justify-center">
                <v-btn color="primary" size="large" class="mx-2">Create Account</v-btn>
                <v-btn variant="outlined" color="white" size="large" class="mx-2">Learn More</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>

  <FooterPanel />
</template>

<script>
import FooterPanel from '@/layouts/full/footer/FooterPanel.vue';
import Carousel from '@/components/Carousel.vue';
import VerticalHeader from '@/layouts/full/vertical-header/VerticalHeader.vue';
import TradingPlans from '@/components/TradingPlans.vue';
import Testimonials from '@/components/Testimonials.vue';

export default {
  name: 'App',
  components: { Testimonials, TradingPlans, VerticalHeader, Carousel, FooterPanel },
  data: function () {
    return {
      title: 'Endorfine',
      imageLink: {
        main: 'https://images.unsplash.com/photo-1643488072086-9d7318c0a04b?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        sub_main:
          'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5',
        logo: 'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df',
        social_cover:
          'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4'
      },
      chartTimeframe: '1M',
      marketData: [
        { symbol: 'BTC/USD', price: '42,568.30', change: 2.4 },
        { symbol: 'ETH/USD', price: '2,317.80', change: 1.8 },
        { symbol: 'XRP/USD', price: '0.5723', change: -0.7 },
        { symbol: 'SOL/USD', price: '103.45', change: 5.2 },
        { symbol: 'ADA/USD', price: '0.4821', change: -1.3 },
        { symbol: 'DOT/USD', price: '6.78', change: 0.9 }
      ],
      keyStats: [
        { icon: 'mdi-account-group', value: '10M+', label: 'Active Users' },
        { icon: 'mdi-currency-usd', value: '$2.5B', label: 'Trading Volume' },
        { icon: 'mdi-earth', value: '150+', label: 'Countries' },
        { icon: 'mdi-shield-check', value: '99.9%', label: 'Uptime' }
      ],
      platformFeatures: [
        { 
          icon: 'mdi-chart-line', 
          title: 'Advanced Analytics', 
          description: 'Get real-time market data and comprehensive analysis tools to make informed trading decisions.' 
        },
        { 
          icon: 'mdi-shield-lock', 
          title: 'Secure Investments', 
          description: 'Your investments are protected with military-grade encryption and multi-layer security protocols.' 
        },
        { 
          icon: 'mdi-cash-multiple', 
          title: 'Diverse Portfolio', 
          description: 'Access a wide range of investment options including crypto, forex, stocks, and commodities.' 
        },
        { 
          icon: 'mdi-account-check', 
          title: 'Expert Support', 
          description: '24/7 access to our team of investment professionals to help guide your investment strategy.' 
        }
      ],
      marketNews: [
        { 
          image: 'https://randomuser.me/api/portraits/men/32.jpg', 
          title: 'Bitcoin Surges Past $42K as Institutional Interest Grows', 
          time: '2 hours ago' 
        },
        { 
          image: 'https://randomuser.me/api/portraits/women/44.jpg', 
          title: 'Fed Signals Potential Rate Cut, Markets Respond Positively', 
          time: '4 hours ago' 
        },
        { 
          image: 'https://randomuser.me/api/portraits/men/67.jpg', 
          title: 'New Regulatory Framework for Crypto Expected Next Month', 
          time: '6 hours ago' 
        },
        { 
          image: 'https://randomuser.me/api/portraits/women/28.jpg', 
          title: 'Tesla Invest Pro Launches New Mobile Trading App', 
          time: '8 hours ago' 
        }
      ],
      email: '',
      emailRules: [
        (v) => {
          return !!v || 'E-mail is required';
        },
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      subscribed: false
    };
  },
  methods: {
    subscribe: function () {
      this.subscribed = !this.subscribed;
    }
  },
  computed: {
    imgHeight: function () {
      var offset = 320;
      console.log('new image height is ' + (this.pageHeight - offset));
      return this.pageHeight - offset;
    }
  }
};
</script>

<style scoped>
.market-ticker-container {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0 20px;
}

.ticker-wrapper {
  overflow: hidden;
}

.ticker-scroll {
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.ticker-scroll::-webkit-scrollbar {
  display: none;
}

.ticker-item {
  display: inline-block;
}

.chart-placeholder {
  height: 300px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.stat-card {
  transition: transform 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.stat-card:hover {
  transform: translateY(-5px);
}

.hero-section {
  position: relative;
}
</style>