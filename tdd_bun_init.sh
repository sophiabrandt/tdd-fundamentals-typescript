#!/bin/bash

bun init -y
mkdir src
mkdir test

bun add -d typescript @types/bun vitest

# Use jq to update the package.json file
jq '. + {scripts: {"test": "jest", "test:w": "jest --watchAll"}}' package.json > temp_package.json && mv temp_package.json package.json

