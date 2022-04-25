#!/bin/bash

function help {
  echo "Usage: vaz <current path | current name> <new path | new name>"
  echo "WARNING: THIS COMMAND ONLY WORKS ON JAVASCRIPT OR JAVASCRIPT BASE PROJECTS"
}

function is_in_supported_files {
  FILE_EXT="${1##*.}"
  SUPPORTED_FILES=("vue js ts")

  if ["${SUPPORTED_FILES[*]}" =~ "${FILE_EXT}"]; then
    return true
  else
    return false
  fi
}

function validate_path {
  FILE_NAME="${basename $1}"

  if [-f $1 && is_in_supported_files $FILE_NAME]; then
    return true
  else
    return false
  fi
}

function goto_root {
  if [-f ".vaz_history"]; then
    return 0
  else
    cd ".."
    goto_root
  fi
}

function refactor {
  git mv $1 $2
  goto_root
  TARGET_FILES="${grep -r $1 ./}"
}

function main {
  DESTINATION_PATH="${dirname $1}"
  if [validate_path $1]; then
    if [validate_path $2]; then
      refactor $1 $2
    else
      echo "ERROR: The path or file is invalid"
      help
    fi
  else
    echo "ERROR: The path or file is invalid"
    help
  fi
}

main $1 $2
