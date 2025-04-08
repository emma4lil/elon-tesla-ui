<template>
  <div class="tradingview-widget-container">
    <div ref="widgetContainer" class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright">
      <a
        href="https://www.tradingview.com/"
        rel="noopener nofollow"
        target="_blank"
      >
        <span class="blue-text">Track all markets on TradingView</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const widgetContainer = ref(null)

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
  script.async = true
  script.innerHTML = JSON.stringify({
    interval: "1m",
    width: "100%",
    isTransparent: false,
    height: "100%",
    symbol: "NASDAQ:TSLA",
    showIntervalTabs: true,
    displayMode: "single",
    locale: "en",
    colorTheme: "light"
  })
  widgetContainer.value.appendChild(script)
})
</script>

<style scoped>

</style>
