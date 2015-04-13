#!/bin/bash

# connect with `&&` so we only run the next on success
# otherwise we `echo` and `exit 1`

npm run build && ./scripts/for-travis/deploy-master-branch-only.sh ||
{ echo "Ooops, ERROR cant deploy, see error(s) above"; exit 1; }
