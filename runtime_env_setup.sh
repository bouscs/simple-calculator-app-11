#!/bin/bash
# Auto-generated runtime environment variables
if [ -n "${ANTHROPIC_API_KEY}" ]; then
  export VITE_ANTHROPIC_API_KEY="${ANTHROPIC_API_KEY}"
  echo "✅ Exposed ANTHROPIC_API_KEY as VITE_ANTHROPIC_API_KEY"
else
  echo "⚠️ ANTHROPIC_API_KEY not found in environment"
fi
if [ -n "${SUBSCRIBE_DEV_API_KEY}" ]; then
  export VITE_SUBSCRIBE_DEV_API_KEY="${SUBSCRIBE_DEV_API_KEY}"
  echo "✅ Exposed SUBSCRIBE_DEV_API_KEY as VITE_SUBSCRIBE_DEV_API_KEY"
else
  echo "⚠️ SUBSCRIBE_DEV_API_KEY not found in environment"
fi
