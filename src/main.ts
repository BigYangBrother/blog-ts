import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "./assets/fontIcon/iconfont.css";
import "./assets/font/webfont.css";
import "./antd.config";
// import "./assets/js/snow"
import "amfe-flexible";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
