#!/usr/bin/env bash

# Create the release build.
pnpm build

# Tell github not to use jekyll, otherwise the site won't work.
touch ./build/.nojekyll

# Publish the 'build' folder to the gh-pages branch, without the 'build' prefix.
git subtree push --prefix build origin gh-pages
