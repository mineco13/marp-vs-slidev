#!/bin/sh
dir=$1
remote=${GIT_REMOTE:-$(git remote get-url origin | sed 's/\.git$//')}
branch=${GIT_BRANCH:-$(git branch --show-current)}
url="$remote/tree/$branch/$dir"
encoded=$(printf '%s' "$url" | base64 | tr -d '\n' | tr '+/' '-_' | tr -d '=')
printf '%s %s' "$dir" "$encoded"
