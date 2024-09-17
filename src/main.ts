import { createApp } from 'vue'
import App from '@/components/App.vue'

import '@/assets/styles/main.scss'

const app = createApp(App)

app.mount('#app')

export {
  app
}
