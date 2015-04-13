#!/bin/bash

# TODO: must be run from project root (i am sure this is not bash best pratice)

ORIGIN_ROOT="."
DIST_ROOT="$ORIGIN_ROOT/dist"

# clean up
rm -Rf $DIST_ROOT;

# create build directory (structure)
mkdir -p $DIST_ROOT;

# copy html assets
cp $ORIGIN_ROOT/html/index.html $DIST_ROOT;
cp $ORIGIN_ROOT/html/favicon.ico $DIST_ROOT;

# run all build scripts, `&&` ensures to stop on any fail
(
  npm run build-app
)
cp $ORIGIN_ROOT/CNAME $DIST_ROOT/CNAME;
