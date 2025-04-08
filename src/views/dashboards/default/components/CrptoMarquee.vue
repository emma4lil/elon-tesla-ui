<template>
  <div
    id="cr-widget-marquee"
    data-coins="bitcoin,ethereum,tether,ripple,cardano"
    data-theme="dark"
    data-show-symbol="true"
    data-show-icon="true"
    data-show-period-change="true"
    data-period-change="24H"
    data-api-url="https://api.cryptorank.io/v0"
  >
    <a href="https://cryptorank.io">Coins by Cryptorank</a>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const scriptId = 'cryptorank-marquee-script'
  // Avoid adding the script multiple times
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://cryptorank.io/widget/marquee.js'
    script.async = true
    document.body.appendChild(script)
  }
})
</script>
