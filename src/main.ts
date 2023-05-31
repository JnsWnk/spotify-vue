import './index.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.config.errorHandler = (err, vm, info) => {
  console.log('errorHandler', err, vm, info)
}

app.mount('#app')
