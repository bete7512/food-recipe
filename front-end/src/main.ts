import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router  from './router/index'
import apolloclient from './apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './index.css'
import piniaPersist from 'pinia-plugin-persist'
// import  resetStore  from './reset-store.js'
// import Main from './components/Layouts/MainLayout.vue'
import Main from './components/Layout/MainLayout.vue'
// import Empty from './components/Layouts/EmptyLayout.vue'
import Empty from './components/Layout/EmptyLayout.vue'
const pinia = createPinia()
pinia.use(piniaPersist)
// pinia.use(resetStore)
import './index.css'
const app = createApp({
    setup() {
      provide(DefaultApolloClient, apolloclient)
    },
    render: ()=> h(App),
  });
app.component('main-layout',Main)
app.component('empty-layout',Empty)
app.use(pinia)
app.use(router)
app.mount('#app');