module.exports = {
	// Project deployment base
	// By default we assume your app will be deployed at the root of a domain,
	// e.g. https://www.my-app.com/
	// If your app is deployed at a sub-path, you will need to specify that
	// sub-path here. For example, if your app is deployed at
	// https://www.foobar.com/my-app/
	// then change this to '/my-app/'
	baseUrl: '/',

	// where to output built files
	// 打包后的输出目录
	outputDir: 'dist',
	// whether to use eslint-loader for lint on save.
	// 保存时是不是用eslint-loader 来lint 代码
	lintOnSave: false,

	// tweak internal webpack configuration.
	// see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
	// webpack 配置~
	chainWebpack: () => {},
	configureWebpack: () => {},

	// generate sourceMap for production build?
	// 生产环境的sourceMap 要不要？
	productionSourceMap: true,

	// CSS related options
	css: {
		// extract CSS in components into a single CSS file (only in production)
		extract: true,

		// enable CSS source maps?
		sourceMap: false,

		// pass custom options to pre-processor loaders. e.g. to pass options to
		// sass-loader, use { sass: { ... } }
		loaderOptions: {},

		modules: false
	},

	// use thread-loader for babel & TS in production build
	// enabled by default if the machine has more than 1 cores
	parallel: require('os').cpus().length > 1,

	// options for the PWA plugin.
	// see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	pwa: {},

	// configure webpack-dev-server behavior
	// Webpack dev server
	devServer: {
		open: process.platform === 'darwin',
		host:'0.0.0.0',
		port: 8000,
		https: false,
		hotOnly: false,
		proxy: {
			'/debug/*': {
				target: 'http://localhost:2333',
				changeOrigin: true,
				pathRewrite: {
					'^/debug':''
				}
			}
		},
		before: app => {}
	},

	// options for 3rd party plugins
	pluginOptions: {
		// ...
	}
}
