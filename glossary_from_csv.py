#!/usr/bin/env python
import csv
import os

with open('glossary_all_langs.csv', 'r') as csvfile:  
    reader = csv.reader(csvfile)
    doc = [line[0] for line in reader]
    
i = 0
unique = set(doc)
for path in unique:
    path = "content/glossary/glossary-" + i
    i += 1
    try:  
        os.mkdir(path)
    except OSError:  
        print ("Creation of the directory %s failed: %s" % (path, OSError))
    else:  
        print ("Successfully created the directory %s " % path)
