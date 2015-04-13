#!/bin/bash

# travis does a `git checkout -qf <hash>` which detaches it from the branch
# and `git branch` would show `* (detached from <hash>)` but we want the line below
# of what `git branch` reports
# TODO actually this is pretty ugly, since it is a hard-coded travis dependency, if
# travis does it differently one day or we use another deploy service we may be screwed
CURRENT_BRANCH=$(git branch | sed -n -e 's/^\  \(.*\)/\1/p')

echo "deploy: current branch is '$CURRENT_BRANCH'"

if [ "$CURRENT_BRANCH" == "master" ]; then
  echo "deploy: run 'deploy-to-ghpages.sh'"
  ./scripts/deploy-to-ghpages.sh
else
  echo "deploy: nothing to deploy. (only deploying master branch)"
fi
