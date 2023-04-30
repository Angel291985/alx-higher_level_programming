#!/usr/bin/python3
"""
A python script that takes in a URL, sends a request to the URL
and displays the body of the response(decoded in utf-8).
"""
from urllib import request, error
import sys


if __name__ == "__main__":
    url = sys.argv[1]
    email = sys.argv[2]
    param = {
        "email": email
    }
    query_string = urllib.parse.urlencode(param)
    data = query_string.encode("ascii")
    req = urllib.request.Request(url, data)

    try:
        with urllib.request.urlopen(req) as response:
            print(response.read().decode('UTF-8'))
    except error.HTTPError as er:
        print('Error code:', er.code)
