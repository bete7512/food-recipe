import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router  from './router/index'
import apolloclient from './apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './index.css'
import piniaPersist from 'pinia-plugin-persist'
import  resetStore  from './reset-store.js'
const pinia = createPinia()
pinia.use(piniaPersist)
pinia.use(resetStore)
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloclient)
  },
  render: ()=> h(App),
});
app.use(pinia)
app.use(router)
app.mount('#app');