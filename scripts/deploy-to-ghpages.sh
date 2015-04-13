#!/bin/bash

set -e

TMP_CHECKOUT_DIR=tmp/origin-gh-pages
(
  set -e
  git clone --branch=gh-pages "https://${GH_TOKEN}@${GH_REF}" $TMP_CHECKOUT_DIR

  echo "deploy: checked out 'gh-pages' branch"
  rm -rf $TMP_CHECKOUT_DIR/*
  cp -r dist/* $TMP_CHECKOUT_DIR
  cd $TMP_CHECKOUT_DIR

  echo "deploy: configuring git user+email"
  git config user.name "Travis-CI"
  git config user.email "contact+travis-for-es6katas.org@uxebu.com"

  echo "deploy: adding files"
  # `--all` ensures that only the files from the last build end in the repo
  git add --all .

  echo "deploy: committing"
  git commit -m "Travis deployed 'master' - `date`"

  echo "deploy: push back to gh-pages"
  git push "https://${GH_TOKEN}@${GH_REF}" gh-pages:gh-pages
)
