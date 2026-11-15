#!/bin/sh
# Wrise fork of Plane (ADR 0193, DEM-1324): the web app is served under a sub-path (VITE_WEB_BASE_PATH, e.g. /work).
# 1. the patched places must still exist (after a rebase onto a new upstream tag);
# 2. root-relative paths in apps/web and packages must not grow past the baseline counted on v1.4.3.
# Usage: sh check-base-path.sh   (from the repo root). Exit 1 on a missing patch or a new root path.
cd "$(dirname "$0")"
fail=0
need() { grep -q -- "$2" "$1" && echo "ok   $1 has $2" || { echo "MISSING in $1: $2"; fail=1; }; }
need apps/web/vite.config.ts 'VITE_WEB_BASE_PATH'
need apps/web/vite.config.ts 'base: basePath'
need apps/web/react-router.config.ts 'basename: basePath'
need apps/web/Dockerfile.web 'ARG VITE_WEB_BASE_PATH'
need apps/web/core/services/api.service.ts 'WEB_BASE_PATH'
need apps/web/app/root.tsx 'WEB_BASE_PATH'
need apps/web/app/layout.tsx 'WEB_BASE_PATH'

X='--include=*.ts --include=*.tsx --exclude-dir=node_modules --exclude-dir=build --exclude-dir=dist'
# a window.location set to a root path ("/...") ; b asset-like root strings ; both exclude *.stories.tsx
a=$(grep -rnE 'location\.(href|replace|assign)' apps/web packages $X | grep -v stories | grep -cE "[\"'\`]/")
b=$(grep -rnE "[\"'\`](/images|/fonts|/static|/favicon|/site\.webmanifest|/manifest|/logos|/icons|/plane-logos|/empty-state)" apps/web packages $X | grep -v stories | grep -c .)
# baseline on upstream v1.4.3 after the patch (api.service.ts now uses WEB_BASE_PATH; the two empty-state strings are CDN/unused upstream)
BASE_A=0
BASE_B=2
echo "root-relative window.location: $a (baseline $BASE_A); asset-like root strings: $b (baseline $BASE_B)"
[ "$a" -le "$BASE_A" ] || { echo "NEW window.location to a root path: fix it in the patch first"; fail=1; }
[ "$b" -le "$BASE_B" ] || { echo "NEW root asset path: fix it in the patch first"; fail=1; }
exit $fail
