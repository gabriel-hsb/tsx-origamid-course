#!/bin/bash
branch_name=$1

if [ -z "$branch_name" ]
then
  echo "Por favor, forneça o nome da branch."
  exit 1
fi

git checkout --orphan "$branch_name"

# RUN --> ./create-orphan-branch.sh <branch-name>
