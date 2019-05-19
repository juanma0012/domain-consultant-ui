import Vue from 'vue'
// import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import { router } from './router'
Vue.config.productionTip = false
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import 'es6-promise/auto'

// Vue.use(Vuex)
Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
