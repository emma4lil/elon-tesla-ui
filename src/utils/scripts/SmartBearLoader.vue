<!-- ScriptsLoader.vue -->
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // SmartSupp script
  const smartSuppScript = document.createElement('script')
  smartSuppScript.innerHTML = `
    var _smartsupp = _smartsupp || {};
    _smartsupp.key = 'f1970d9f91a6374d0d4d79aa780092586e3ba5dc';
    window.smartsupp || (function (d) {
      var s, c, o = smartsupp = function () { o._.push(arguments) }; o._ = [];
      s = d.getElementsByTagName('script')[0]; c = d.createElement('script');
      c.type = 'text/javascript'; c.charset = 'utf-8'; c.async = true;
      c.src = 'https://www.smartsuppchat.com/loader.js';
      s.parentNode.insertBefore(c, s);
    })(document);
  `
  document.head.appendChild(smartSuppScript)

  // TradingView script
  const tradingViewScript = document.createElement('script')
  tradingViewScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
  tradingViewScript.async = true
  tradingViewScript.defer = true
  document.head.appendChild(tradingViewScript)
})
</script>

<template>
  <!-- Empty template as this component only manages scripts -->
  <div></div>
</template>