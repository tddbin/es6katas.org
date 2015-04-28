#!/bin/bash

ORIGIN_ROOT="."
SRC_ROOT="$ORIGIN_ROOT/src"
DIST_ROOT="$ORIGIN_ROOT/dist"

cd $ORIGIN_ROOT/src/server;
PRERENDERED_HTML=`../../node_modules/.bin/babel-node index.js`;
cd ../..;

cat $SRC_ROOT/index.html > $DIST_ROOT/index.html
echo $PRERENDERED_HTML >> $DIST_ROOT/index.html
