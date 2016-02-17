global.__base = __dirname + '/'
global.__includes = __base + 'includes/'

global.__env = process.env.NODE_ENV || 'production'
try global.__env = require __includes + 'node-env'

global.__production = __env == 'production'

global.__protocol = process.env.PROTOCOL || 'http'
try global.__protocol = require __includes + 'network-protocol'

global.__hostname = process.env.HOSTNAME || 'localhost'
try global.__hostname = require __includes + 'network-hostname'

global.__port = process.env.PORT || 37453
try global.__port = require __includes + 'network-port'

global.__secure = __protocol == 'https'
global.__proxyServerHostname = __hostname == '0.0.0.0' and 'localhost' or __hostname
global.__proxyServerPort = __port + 1

global.__sendEmailUri = '/contact/send'

# Set Running Mode
runningMode = process.argv[2]
runCompiler = !runningMode || runningMode == 'compile'
runServer = !runningMode || runningMode == 'server'

# Start Webserver(s)
if __production
	runCompiler and require(__includes + 'compiler-prod')(runServer)
	runServer and require __includes + 'server-prod'

else # Development
	require __includes + 'server-dev'
