#!/bin/bash

#for file in $(ls | grep .jpg);
#do
#	convert $file -resize 300x300^ ./300x300/$file
#	echo "$file converted to 300x300"
#done

#for file in $(ls | grep .jpg);
#do
#	convert $file -resize 500x500^ ./500x500/$file
#	echo "$file converted to 500x500"
#done


if [ $# -eq 0 ]
then
		magick $1 -resize 800x800 $2
else
	for file in $(ls | grep .jpg);
	do
		magick $file -resize 800x800 ./800x800/$file
		echo "$file converted to 800x800"
	done
fi

