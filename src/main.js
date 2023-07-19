import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

import 'mdb-vue-ui-kit/css/mdb.min.css';

import 'vuetify/dist/vuetify.min.css' 

createApp(App).use(store).use(router).use(Vuetify).mount('#app')
