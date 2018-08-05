import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import GameView from './views/game'
import CodeView from './views/code'
import AnimeView from './views/anime'
import MovieView from './views/movie'
import LiveView from './views/live'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index,
			meta: {
			}
		},
		{
			path: '/game',
			name: 'game',
			component: GameView,
			meta: {
			}
		},
		{
			path: '/code',
			name: 'code',
			component: CodeView,
			meta: {
			}
		},
		{
			path: '/anime',
			name: 'anime',
			component: AnimeView,
			meta: {
			}
		},
		{
			path: '/movie',
			name: 'movie',
			component: MovieView,
			meta: {
			}
		},
		{
			path: '/live',
			name: 'live',
			component: LiveView,
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

