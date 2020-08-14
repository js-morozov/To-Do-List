import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/reset.css'
import '@/assets/css/main.css'
import feather from 'feather-icons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

feather.replace();