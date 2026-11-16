#!/bin/sh
# 构建并发布到 GitHub Pages（项目站点，子路径 /Code-2-Video-Lab/）
# 用法：npm run deploy:gh
set -e

REPO="MavCui/Code-2-Video-Lab"
BASE="/Code-2-Video-Lab"

BASE_PATH="$BASE" npm run build
BASE_PATH="$BASE" node scripts/prefix-base.mjs

# 在系统临时目录组装产物，避免在仓库内创建/删除大量文件
TMP=$(mktemp -d "${TMPDIR:-/tmp}/c2v-gh.XXXXXX")
cp -R dist/. "$TMP"/
touch "$TMP/.nojekyll"

cd "$TMP"
git init -q
git config user.name "MavCui"
git config user.email "saitannrinn@gmail.com"
git add -A
git commit -q -m "deploy: $(date '+%Y-%m-%d %H:%M')"

TOKEN_FILE="$HOME/.workbuddy/mcp-servers/github/.token"
if [ -s "$TOKEN_FILE" ]; then
  TOKEN=$(cat "$TOKEN_FILE")
  git push -q -f "https://x-access-token:${TOKEN}@github.com/${REPO}.git" HEAD:gh-pages
else
  git push -q -f "https://github.com/${REPO}.git" HEAD:gh-pages
fi

echo "[deploy] 已发布到 https://mavcui.github.io${BASE}/"
