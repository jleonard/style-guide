#!/bin/sh
echo -e "\033[42;30mmoving readme into harp project...\033[0m";
cp README.md src/index.md
harp compile src dist;
mv -v dist/* .;
#mv -v dist/ ..;
#rm -r dist;
#rm -r src/index.md;