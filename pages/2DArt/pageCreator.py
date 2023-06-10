import sys
import os
import random

if (len(sys.argv) != 4):
    print("Usage: [photo file name] [title] [directory]")
    exit()

photoName = sys.argv[1]
photoPath = "../img/" + photoName
title = sys.argv[2]
dirName = sys.argv[3]

index = open("indexTemplate.html").read()

index = index.replace("TITLE", title)
index = index.replace("PHOTO", photoPath)
index = index.replace("NUM0", str(random.randrange(0, 29)))
index = index.replace("NUM1", str(random.randrange(0, 29)))
index = index.replace("NUM2", str(random.randrange(0, 29)))

os.mkdir(dirName)
os.chdir(dirName)

indexfile = open("index.html", "w")
indexfile.write(index)
