#!/bin/bash

# Verifique se a porta foi fornecida como argumento
if [ -z "$1" ]; then
  echo "Uso: $0 <porta>"
  exit 1
fi

PORT=$1

# Encontrar o PID do processo que está usando a porta especificada
PID=$(lsof -t -i:$PORT)

# Verificar se encontramos algum processo
if [ -z "$PID" ]; then
  echo "Nenhum processo encontrado usando a porta $PORT"
  exit 0
fi

# Matar o processo encontrado
kill -9 $PID

# Verificar se o processo foi finalizado com sucesso
if [ $? -eq 0 ]; then
  echo "Processo $PID que estava usando a porta $PORT foi finalizado com sucesso"
else
  echo "Falha ao finalizar o processo $PID"
fi
