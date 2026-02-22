#!/bin/sh
dir=$1
remote=$(git remote get-url origin | sed 's/\.git$//')
branch=$(git branch --show-current)
url="$remote/tree/$branch/$dir"
encoded=$(printf '%s' "$url" | base64 | tr '+/' '-_' | tr -d '=')
printf '%s %s' "$dir" "$encoded"
