#!/bin/bash
# A bash script that sends a DELETE request to the URL passesd as the first argument
curl -sX DELETE "$1"