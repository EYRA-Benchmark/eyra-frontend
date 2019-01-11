#!/usr/bin/env sh
envsubst < ./env.json.template > ./env.json
rm ./env.json.template
nginx -g 'daemon off;'