import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

if (process.env.NODE_ENV === 'development') {
  // Desabilitar o Vue Devtools
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = null;
}
