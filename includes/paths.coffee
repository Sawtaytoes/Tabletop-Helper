module.exports = do ->
	path = require 'path'
	paths = {}


	##----------------------------------------
	## Root
	##----------------------------------------

	paths.root =
		src: 'src/'
		dest: 'web/'


	##----------------------------------------
	## Assets
	##----------------------------------------

	paths.assets =
		src: paths.root.src + 'assets/'
		dest: paths.root.dest + 'assets/'


	##----------------------------------------
	## Code
	##----------------------------------------

	paths.code =
		src: paths.root.src + 'code/'
		dest: paths.root.dest


	##----------------------------------------
	## Pages
	##----------------------------------------

	paths.pages =
		src: paths.root.dest
		dest: paths.root.dest


	##----------------------------------------
	## NPM
	##----------------------------------------

	paths.npm = src: 'node_modules/'
	# paths.npm.normalize = src: paths.npm.src + 'normalize.css/'
	paths.npm.slickCarousel = src: paths.npm.src + 'slick-carousel/'


	##----------------------------------------
	## Bower
	##----------------------------------------

	# paths.bower = src: 'bower_components/'
	# paths.bower.fontawesome = src: paths.bower.src + 'font-awesome/'
	# paths.bower.foundation = src: paths.bower.src + 'foundation/'
	# paths.bower.slick = src: paths.bower.src + 'slick.js/slick/'

	# paths.bower.getComponentName = (dirname) ->
	# 	dirname.split(path.sep)[1]


	##----------------------------------------
	##----------------------------------------

	paths
