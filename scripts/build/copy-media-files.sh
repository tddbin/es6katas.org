#!/bin/bash

# TODO: must be run from project root (i am sure this is not bash best pratice)

ORIGIN_ROOT=".";
MEDIA_FILES_ORIGIN_DIR="$ORIGIN_ROOT/src";
DIST_ROOT="$ORIGIN_ROOT/dist";
MEDIA_DIST_ROOT="$DIST_ROOT/media";

# find all media files, under `src`
cd "$MEDIA_FILES_ORIGIN_DIR";
MEDIA_FILES=`find . \( -name '*.css' -o -name '*.png' -o -name '*.svg' -o -name '*.gif' \)`
cd ..;

# create all dirs where media files will land inside `dist/media`
# copy the media file into the destination folder
for MEDIA_FILE in $MEDIA_FILES
do
  mkdir -p `dirname "$MEDIA_DIST_ROOT/$MEDIA_FILE"`
  cp "$MEDIA_FILES_ORIGIN_DIR/$MEDIA_FILE" "$MEDIA_DIST_ROOT/$MEDIA_FILE"
done
