import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


app.config.errorHandler = (error, instance, info) => {
  console.error('-->ERROR:', { instance, info, error })
}

app.config.warnHandler = (msg, instance, trace) => {
  console.warn('-->WARN: ', { instance, msg, trace })
}
