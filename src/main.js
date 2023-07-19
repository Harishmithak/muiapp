import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


import 'mdb-vue-ui-kit/css/mdb.min.css';



createApp(App).use(store).use(router).use(vuetify).mount('#app')



