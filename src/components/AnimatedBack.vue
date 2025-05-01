<template>
  <div class="crypto-rain-container">
    <svg class="crypto-rain" :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
      <!-- Bitcoin -->
      <g v-for="(bitcoin, index) in bitcoins" :key="'btc-'+index">
        <circle
          :cx="bitcoin.x"
          :cy="bitcoin.y"
          r="12"
          fill="none"
          stroke="#F7931A"
          stroke-width="2"
        />
        <text
          :x="bitcoin.x"
          :y="bitcoin.y + 4"
          text-anchor="middle"
          fill="#FFFFFFA"
          font-size="20"
          font-weight="bold"
          font-family="Arial"
        >BTC</text>
      </g>

      <!-- Ethereum -->
      <g v-for="(eth, index) in ethereums" :key="'eth-'+index">
        <path
          :transform="`translate(${eth.x},${eth.y})`"
          d="M12 24L6 18L12 12L18 18L12 24ZM12 12L6 6L12 0L18 6L12 12Z"
          fill="none"
          stroke="#627EEA"
          stroke-width="2"
        />
      </g>

      <!-- Binance Coin -->
      <g v-for="(bnb, index) in bnbs" :key="'bnb-'+index">
        <circle
          :cx="bnb.x"
          :cy="bnb.y"
          r="12"
          fill="none"
          stroke="#F3BA2F"
          stroke-width="2"
        />
        <text
          :x="bnb.x"
          :y="bnb.y + 4"
          text-anchor="middle"
          fill="#F3BA2F"
          font-size="12"
          font-weight="bold"
          font-family="Arial"
        >BNB</text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const width = ref(window.innerWidth);
const height = ref(window.innerHeight);
const bitcoins = ref<Array<{x: number, y: number, speed: number}>>([]);
const ethereums = ref<Array<{x: number, y: number, speed: number}>>([]);
const bnbs = ref<Array<{x: number, y: number, speed: number}>>([]);
const coinCount = 20;
let animationFrame: number | null = null;

const handleResize = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

const initializeCoins = () => {
  // Initialize all coins with random positions and speeds
  for (let i = 0; i < coinCount; i++) {
    bitcoins.value.push({
      x: Math.random() * width.value,
      y: Math.random() * -height.value,
      speed: 2 + Math.random() * 0.5
    });

    ethereums.value.push({
      x: Math.random() * width.value,
      y: Math.random() * -height.value,
      speed: 1.5 + Math.random() * 1.5
    });

    bnbs.value.push({
      x: Math.random() * width.value,
      y: Math.random() * -height.value,
      speed: 2.2 + Math.random() * 1
    });
  }
};

const startAnimation = () => {
  const animate = () => {
    // Move bitcoins
    bitcoins.value = bitcoins.value.map(coin => {
      let newY = coin.y + coin.speed;
      if (newY > height.value + 24) {
        newY = -24;
      }
      return { ...coin, y: newY };
    });

    // Move ethereums
    ethereums.value = ethereums.value.map(coin => {
      let newY = coin.y + coin.speed;
      if (newY > height.value + 24) {
        newY = -24;
      }
      return { ...coin, y: newY };
    });

    // Move bnbs
    bnbs.value = bnbs.value.map(coin => {
      let newY = coin.y + coin.speed;
      if (newY > height.value + 24) {
        newY = -24;
      }
      return { ...coin, y: newY };
    });

    animationFrame = requestAnimationFrame(animate);
  };

  animate();
};

onMounted(() => {
  initializeCoins();
  startAnimation();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.crypto-rain-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.crypto-rain {
  position: absolute;
  top: 0;
  left: 0;
}
</style>