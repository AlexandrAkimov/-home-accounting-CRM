import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import Loader from '@/components/app/Loader'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.config.productionTip = false
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
const firebaseConfig = {
  apiKey: "AIzaSyCdRcXbTPSWDPvRMCyut5WzmNh6elPU7fU",
  authDomain: "itc-vue.firebaseapp.com",
  databaseURL: "https://itc-vue.firebaseio.com",
  projectId: "itc-vue",
  storageBucket: "",
  messagingSenderId: "699609740791",
  appId: "1:699609740791:web:fbdc75597ae6797796eaf2"
};
firebase.initializeApp(firebaseConfig)
let app;
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')    
  }
})
