#!/bin/bash
set -euo pipefail

echo "[pack-sync] Syncing immutable modpack files into /data"

DATA_UID=$(stat -c '%u' /data)
DATA_GID=$(stat -c '%g' /data)

echo "[pack-sync] /data owner is ${DATA_UID}:${DATA_GID}"

MANAGED_DIRS=(
  mods
  config
  kubejs
  defaultconfigs
  scripts
)

for dir in "${MANAGED_DIRS[@]}"; do
    if [ -d "/pack-template/$dir" ]; then
        echo "[pack-sync] Updating $dir"

        rm -rf "/data/$dir"
        cp -a "/pack-template/$dir" "/data/$dir"

        # Pack template is root-owned during Docker build.
        # Minecraft runs as the owner of /data, normally 1000:1000.
        chown -R "${DATA_UID}:${DATA_GID}" "/data/$dir"
    fi
done

echo "[pack-sync] Pack sync complete"

exec /image/scripts/start "$@"