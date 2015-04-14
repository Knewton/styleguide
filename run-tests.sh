#!/usr/bin/env sh

set -e -x
scss-lint -c .scss-lint.yml ./styles/sass/
