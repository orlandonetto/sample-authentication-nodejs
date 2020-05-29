import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from "axios";
import './quasar'

Vue.config.productionTip = false;

// set auth header
Axios.defaults.headers.common['Authorization'] = store.state.token;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
