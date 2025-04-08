<template>
  <div class="tradingview-widget-container ma-0 pa-0" ref="widgetContainer">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright">
      <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">
        <span class="blue-text">Track all markets on TradingView</span>
      </a>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'SymbolTrendView',
  props: {
    symbol: {
      type: String,
      default: 'NASDAQ:TSLA'
    },
    interval: {
      type: String,
      default: '240'
    },
    theme: {
      type: String,
      default: 'dark',
      validator: (value) => ['light', 'dark'].includes(value)
    },
    autosize: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const widgetContainer = ref(null)
    let script = null

    const loadWidget = () => {
      if (script) return // Prevent duplicate loading

      script = document.createElement('script')
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
      script.async = true
      script.type = 'text/javascript'
      script.innerHTML = JSON.stringify({
        autosize: props.autosize,
        symbol: props.symbol,
        interval: props.interval,
        timezone: 'Etc/UTC',
        theme: props.theme,
        style: '1',
        locale: 'en',
        allow_symbol_change: true,
        support_host: 'https://www.tradingview.com'
      })

      widgetContainer.value.appendChild(script)
    }

    onMounted(() => {
      loadWidget()
    })

    onBeforeUnmount(() => {
      // Clean up the script element when component unmounts
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    })

    return {
      widgetContainer
    }
  }
}
</script>

<style scoped>
.tradingview-widget-container {
  height: 100%;
  width: 100%;
  min-height: 400px; /* Fallback minimum height */
}

.tradingview-widget-container__widget {
  height: calc(100% - 32px);
  width: 100%;
}

.tradingview-widget-copyright {
  font-size: 13px;
  line-height: 32px;
  text-align: center;
  vertical-align: middle;
}

.blue-text {
  color: #2962FF;
}
</style>