#!/bin/bash
cd /home/kavia/workspace/code-generation/vintage-marketplace-frontend-design-178475-178484/vintage_ecommerce_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

