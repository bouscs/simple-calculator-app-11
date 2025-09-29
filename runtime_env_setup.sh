#!/bin/bash
# Auto-generated runtime environment variables
if [ -n "${SUBSCRIBE_DEV_API_KEY}" ]; then
  export VITE_SUBSCRIBE_DEV_API_KEY="${SUBSCRIBE_DEV_API_KEY}"
  echo "✅ Exposed SUBSCRIBE_DEV_API_KEY as VITE_SUBSCRIBE_DEV_API_KEY"
else
  echo "⚠️ SUBSCRIBE_DEV_API_KEY not found in environment"
fi
