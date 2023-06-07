#!/bin/sh
# example script frontend=1,backend=2 frontend
# will return 1
# if no frontend is found will return main

HEAD=$(echo "$1" | tr "," "\n" | grep "$2" | cut -d "=" -f 2)
# if nothing re default to main
# else return head
if [ -z "$HEAD" ]
then
    echo "main"
else
    echo "$HEAD"
fi
