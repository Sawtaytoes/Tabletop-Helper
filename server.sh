#/bin/bash

pm2 start index.coffee -i 0 --name ${PWD##*/} -- server
