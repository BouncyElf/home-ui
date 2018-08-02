import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index,
			meta: {
			}
		}
	]
})

var init_route = false;

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		window.document.title = to.meta.title;
	}
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

