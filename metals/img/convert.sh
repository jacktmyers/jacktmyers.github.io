#!/bin/bash

for file in $(ls | grep Square.jpg);
do
	convert $file -resize 400x400^ ./thumbs/$file
	echo "$file done"
done
