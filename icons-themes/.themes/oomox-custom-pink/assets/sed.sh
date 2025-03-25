#!/bin/sh
sed -i \
         -e 's/#ffe3fc/rgb(0%,0%,0%)/g' \
         -e 's/#5c005e/rgb(100%,100%,100%)/g' \
    -e 's/#ffcdfb/rgb(50%,0%,0%)/g' \
     -e 's/#f922ff/rgb(0%,50%,0%)/g' \
     -e 's/#ffe3fd/rgb(50%,0%,50%)/g' \
     -e 's/#5c005e/rgb(0%,0%,50%)/g' \
	"$@"
