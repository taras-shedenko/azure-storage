#!/bin/bash
#
# Builds a Docker image.
#
# Environment variables:
#
#   CONTAINER_REGISTRY - The hostname of your container registry.
#   VERSION - The version number to tag the images with.
#
# Usage:
#
#       ./scripts/build.sh
#

set -u # or set -o nounset
: "$CONTAINER_REGISTRY"
: "$VERSION"

docker build -t $CONTAINER_REGISTRY/azure-storage:$VERSION --file ./Dockerfile-prod .
