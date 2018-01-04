// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import VueResource from 'vue-resource'
import axios from 'axios'
import layer from 'vue-layer'
import 'font-awesome/css/font-awesome.min.css'
import "datatables/media/css/jquery.dataTables.min.css"
import "datatables/media/js/jquery.dataTables.min.js"




Vue.prototype.$layer = layer(Vue);
Vue.prototype.$this = axios;
axios.defaults.withCredentials=true;
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
Vue.use(VueResource);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
