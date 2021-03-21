#! /bin/bash

name=$1
result_file="results.$1.txt"
cd "/home/cleverness/CISC 3140/Lab 5" ; /usr/bin/env /usr/lib/jvm/jdk-11.0.10+9/bin/java -Dfile.encoding=UTF-8 @/tmp/cp_50uca9otyyr8mhs1llfj9eq30.argfile MovieGenres > movies_list.txt

if [[ -n "$name" ]]; then
     awk "/$1/" movies_list.txt >> ${result_file}
 else
    echo "argument error"
fi




