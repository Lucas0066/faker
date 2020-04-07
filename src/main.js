import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Avue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
