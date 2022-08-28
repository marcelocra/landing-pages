#!/usr/bin/env bash

# Create the release build.
pnpm build

# Tell github not to use jekyll, otherwise the site won't work.
touch ./build/.nojekyll

# I'm using 'docs' folder in github as the deploy location.
mv build docs

