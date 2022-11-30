#!/bin/bash

set -x #print bash commands as they are executed

docker buildx build \
    --output=type=registry,registry.insecure=true  \
    --platform linux/arm64/v8,linux/amd64 \
    -t localhost:5000/homelab/storage-ui $HOME/k8s/storage-ui

kubectl delete -f $HOME/k8s/storage-ui/k8s/deployment.yml

kubectl apply -f $HOME/k8s/storage-ui/k8s/deployment.yml
kubectl apply -f $HOME/k8s/storage-ui/k8s/service.yml
