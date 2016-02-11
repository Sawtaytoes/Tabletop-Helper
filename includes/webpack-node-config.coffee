autoprefixer = require 'autoprefixer'
ExtractTextPlugin = require 'extract-text-webpack-plugin'
path = require 'path'
paths = require __includes + 'paths'
webpack = require 'webpack'

entryFile = './' + paths.code.src + 'index'

p = (dir) ->
	path.join(__base, dir)

codeFiles = p(paths.code.src)
fontFiles = p(paths.assets.src + 'font/')
imgFiles = p(paths.assets.src + 'img/')
sassFiles = p(paths.assets.src + 'sass/')
stylFiles = p(paths.assets.src + 'styl/')

module.exports =
	cache: true
	colors: not __production
	debug: not __production
	devtool: not __production and 'eval-source-map'
	entry: __production and entryFile or [
		'webpack-dev-server/client?' + __protocol + '://' + __hostname + ':' + __port
		'webpack/hot/dev-server'
		entryFile
	]
	imagemin:
		gifsicle: interlaced: false
		jpegtran:
			progressive: true
			arithmetic: false
		# optipng: optimizationLevel: 5
		pngquant:
			floyd: 0.5
			speed: 2
		svgo: plugins: [removeTitle: true, convertPathData: false]
	minimize: __production
	module:
		loaders: [
			test: /\.jsx$/
			loaders: __production and [
				'babel'
			] or [
				'react-hot'
				'babel'
			]
			include: [codeFiles]
		,
			test: /\.cjsx$/
			loaders: __production and [
				'babel'
				'coffee'
				'cjsx'
			] or [
				'react-hot'
				'babel'
				'coffee'
				'cjsx'
			]
			include: [codeFiles]
		,
			test: /\.css$/
			loader: ExtractTextPlugin.extract 'style',
				'css?modules&importLoaders=1&localIdentName=[local]!postcss'
			# include: [p(paths.npm.normalize.src)]
		,
			test: /\.s[ac]ss$/
			loaders: __production and [
				'style'
				'css'
				'postcss'
				'sass?compress=true'
			] or [
				'style'
				'css?sourceMap'
				'postcss?sourceMap'
				'sass?sourceMap'
			]
			include: [sassFiles, p(paths.npm.slickCarousel.src)]
		,
			test: /\.styl$/
			loader: __production and ExtractTextPlugin.extract(
				'style',
				'css?modules&importLoaders=1&localIdentName=[local]!postcss!stylus?compress=true&linenos=false'
			) or ExtractTextPlugin.extract(
				'style',
				'css?modules&importLoaders=1&localIdentName=[local]!postcss!stylus?linenos=false'
			)
			include: [stylFiles]
		,
		# 	test: /\.(jpe?g|png|gif|svg)$/i,
		# 	loaders: [
		# 		'url?limit=10000'
		# 		'img?minimize'
		# 	]
		# 	# include: [imgFiles]
		# ,
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'url-loader?limit=10000&minetype=application/font-woff'
			# include: [fontFiles]
		,
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file-loader'
			# include: [fontFiles]
		]
	output:
		filename: 'backend.js'
		libraryTarget: 'commonjs2'
		path: __production and './web/' or '/'
		pathinfo: not __production
		publicPath: '/'
		target: 'node'
	plugins: __production and [
		new ExtractTextPlugin 'css/[name].css', allChunks: false
		new webpack.IgnorePlugin /^\.\/locale$/, [/moment$/]
		new webpack.NoErrorsPlugin()
		new webpack.optimize.AggressiveMergingPlugin()
		new webpack.optimize.DedupePlugin()
		new webpack.optimize.MinChunkSizePlugin minChunkSize: 10000
		new webpack.optimize.OccurenceOrderPlugin()
		new webpack.optimize.UglifyJsPlugin
			compress: warnings: false
			mangle: except: ['$super', '$', 'exports', 'require']
			output:
				comments: false
				screw_ie8: true
	] or [
		new ExtractTextPlugin 'css/[name].css', allChunks: false
		new webpack.HotModuleReplacementPlugin()
		new webpack.IgnorePlugin /^\.\/locale$/, [/moment$/]
		new webpack.optimize.OccurenceOrderPlugin true
		new webpack.ProvidePlugin __DEV__: true
		# new webpack.WatchIgnorePlugin [ path.resolve __base, './node_modules/' ]
	]
	postcss: ->
		[autoprefixer browsers: ['last 4 versions', '> 5%']]
	prerender: __production
	resolve: extensions: ['', '.js', '.jsx', '.cjsx', '.css', '.styl']
