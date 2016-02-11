#/bin/bash

git reset --hard HEAD
git pull
npm install
chown -R www-data:www-data .
coffee index.coffee compile
pm2 gracefulReload ${PWD##*/}
