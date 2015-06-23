#!/bin/bash

ORIGIN_ROOT="."
SRC_ROOT="$ORIGIN_ROOT/src"
DIST_ROOT="$ORIGIN_ROOT/dist"

PRERENDERED_HTML=`./node_modules/.bin/babel-node ./scripts/render-index.js`;

echo $PRERENDERED_HTML > $DIST_ROOT/index.html
