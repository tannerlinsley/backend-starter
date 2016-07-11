#!/usr/bin/env bash

DIR="$(dirname "$( cd $(dirname $0) ; pwd -P )")"
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
STAMP=$(date +'%Y%m%d%H%M%S')

# require git slate to be clean
git diff-index --quiet HEAD
[[ $? != 0 ]] && { echo 'Commit or stash your changes first!'; exit 1; }

# build source on a temporary branch
git checkout -b $STAMP
npm run build

# add the compiled files in to the repo
git add --force lib
git commit -a -m "compiled build for deploy"

# deploy to heroku
git push git@heroku.com:$HEROKU_APP.git $STAMP:refs/heads/master --force

# cleanup
git checkout $CURRENT_BRANCH
git branch -D $STAMP
