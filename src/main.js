import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import axios from './utils/request'
import 'normalize.css/normalize.css'
import '@/assets/style/index.less'
// import './permission.js'
Vue.prototype.$axios = axios;


Vue.config.productionTip = false;
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
