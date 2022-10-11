#!/bin/bash

echo "------------------------------------------------------"
echo "Atualizando o servidor..."
echo "------------------------------------------------------"
apt-get update
apt-get upgrade -y
apt-get install docker docker-compose -y

echo "------------------------------------------------------"
echo "Inicializando imagens com Docker Compose..."
echo "------------------------------------------------------"

docker-compose up -d

