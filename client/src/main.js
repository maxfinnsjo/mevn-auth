import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

// Setting http headers for API calls
Vue.prototype.$http = axios;
// Load token from localStorage
const token = localStorage.getItem("token");
// If token, append axios headers
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
