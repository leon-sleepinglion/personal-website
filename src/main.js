import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

// Typed.js
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faMedium, faGithub, faLinkedin)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Transition
import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

// Routing
import AboutMe from './components/AboutMe.vue'
import WorkExperience from './components/WorkExperience.vue'

const routes = [
  { path: '/', component: AboutMe },
  { path: '/work', component: WorkExperience },
  { path: '*', redirect: '/'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// Vue instance
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
