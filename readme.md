# Tabletop Helper Website

<!-- WEBSITE DOESN'T EXIST YET -->
Source code for [example.com](http://example.com).

## Prerequisites

- [Git](http://www.git-scm.com/downloads) (2.6.1 or higher)
- [NodeJS](https://nodejs.org/en/download/) (5.2.0 or higher)
- [npm](https://docs.npmjs.com/) (3.5.2 or higher)
- [Visual Studio](https://www.microsoft.com/en-us/download/details.aspx?id=48131) (2013 only) `Windows only`
- [Heroku Toolbelt](https://toolbelt.heroku.com/) (3.42.25) `Heroku Production only`

## Setup

### Repository

If you have SSH keys, use this one:
```shell
git clone git@github.com:Sawtaytoes/Tabletop-Helper.git -b develop
```

Otherwise, use this one and change YOUR_USERNAME to your BitBucket username:
```shell
git clone https://github.com/Sawtaytoes/Tabletop-Helper.git -b develop
```


### Assets

```shell
npm config set msvs_version 2013 --global # Windows requires VS2013 installed
npm install -g npm coffee-script # Upgrades npm and sets coffee-script to run in CLI
npm install
```


### Configs

#### Protocol `includes/network-protocol.coffee`

Example:
```coffee
module.exports = 'https'
```

#### Hostname `includes/network-hostname.coffee`

Example:
```coffee
module.exports = '0.0.0.0'
```

#### Port `includes/network-port.coffee`

Example:
```coffee
module.exports = '37457'
```

#### SMTP `includes/network-smtp.coffee`

Example using **maildev** (`npm install -g maildev`):

```coffee
module.exports =
    host: 'localhost'
    port: 1025
    tls: rejectUnauthorized: false
```

or as a string:

```coffee
module.exports = 'smtps://user%40gmail.com:pass@smtp.gmail.com'
```

Start the SMTP server using `maildev`.

## Webserver

### Development: Local

```shell
coffee index.coffee
```


### Production: Heroku

[Using my fork of the CoffeeScript buildpack for Heroku Ceder-14](https://github.com/sawtaytoes/heroku-buildpack-coffee)

`APP_NAME` is your application name in Heroku.

```shell
heroku buildpacks:set https://github.com/sawtaytoes/heroku-buildpack-coffee
heroku stack:set cedar-14
git push heroku master
```


### Production: ChunkHost

[Using PM2](http://pm2.keymetrics.io/)

#### Start the Server

```shell
bash server.sh
```

#### Update from Git and Restart

```shell
bash update.sh
```

### Create SSL Cert

_Replace `SERVER_NAME` with the website address._

```shell
service nginx stop

/usr/share/letsencrypt/letsencrypt-auto certonly \
-a standalone \
-d www.SERVER_NAME \
-d SERVER_NAME \
--server https://acme-v01.api.letsencrypt.org/directory

service nginx start
```

Or try this experimental approach:

```shell
/usr/share/letsencrypt/letsencrypt-auto certonly \
-a nginx \
-d www.SERVER_NAME \
-d SERVER_NAME \
--server https://acme-v01.api.letsencrypt.org/directory
```


### Linting

Install packages globally for Sublime Text's `SublimeLinter-contrib-eslint` plugin.

```shell
npm install -g babel-eslint eslint-plugin-react
```
