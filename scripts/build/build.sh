#!/bin/bash

# TODO: must be run from project root (i am sure this is not bash best pratice)

ORIGIN_ROOT="."
DIST_ROOT="$ORIGIN_ROOT/dist"

# clean up
rm -Rf $DIST_ROOT;

# create build directory (structure)
mkdir -p $DIST_ROOT;

# copy html assets
#cp $ORIGIN_ROOT/src/index.html $DIST_ROOT;
cp $ORIGIN_ROOT/src/favicon.ico $DIST_ROOT;

./scripts/render-html.sh

# run all build scripts, `&&` ensures to stop on any fail
(
  npm run build:app &&
  npm run build:media
)
cp $ORIGIN_ROOT/CNAME $DIST_ROOT/CNAME;
