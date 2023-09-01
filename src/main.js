import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircle, faUserSecret, fas } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faCircle, fas)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app")