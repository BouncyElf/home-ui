import Vue from 'vue'
import Router from 'vue-router'
import IndexView from './views/index'
import ArticleView from './views/article'
import ConfigView from './views/config'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: IndexView,
			meta: {
			}
		},
		{
			path: '/:tag/:article_id',
			name: 'article',
			component: ArticleView
		},
		{
			path: '/config',
			name: 'config',
			component: ConfigView
		}
	]
})

var init_route = false;

router.beforeEach((to, from, next) => {
	if (!init_route) {
		let head = document.getElementsByTagName('head');
		let meta = document.createElement('meta');
		meta.name = "renderer";
		meta.content = "webkit";
		head[0].appendChild(meta);
		init_route = true;
	}
	next()
})

export default router;

