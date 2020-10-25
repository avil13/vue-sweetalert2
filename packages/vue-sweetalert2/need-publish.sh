#!/bin/bash

PKG=$(node -p -e "require('./package.json').name")

# we get the version of the package in a branch
CURRENT_VERSION=$(node -p -e "require('./package.json').version")
PUBLIC_VERSION=$(npm show ${PKG} version)


if [[ $CURRENT_VERSION != $PUBLIC_VERSION ]];
then
  echo 'TRUE';
fi
