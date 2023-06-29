#!/bin/bash
# A bash script that takes in a URL, sends a resquest to that URL
curl -s "$1" | wc -c
