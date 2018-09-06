import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ArticleList from './components/list.vue';
import ArticleContent from './components/article.vue';

Vue.config.productionTip = false;

Vue.use(ElementUI, axios, VueAxios);
Vue.component('article-list', ArticleList);
Vue.component('article-content', ArticleContent);
Vue.prototype.$ajax = axios;

var debugMode = 'debug';

Vue.prototype.$debugMode = debugMode;

if (debugMode === 'debug') {
	Vue.prototype.$url_prefix = '/debug';
} else {
	Vue.prototype.$url_prefix = '';
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#home');

