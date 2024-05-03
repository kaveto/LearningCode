# HTTP Package

# https://www.googleapis.com/books/v1/volumes?q=isbn:1101904224
import urllib.request
import json
import textwrap

with urllib.request.urlopen("https://www.googleapis.com/books/v1/volumes?q=isbn:1101904224") as url:
    text = url.read()
    decoded_text = text.decode('utf-8')
    #print(textwrap.fill(decoded_text, width=100))

print()

obj = json.loads(decoded_text)
print(obj['kind'])
#We see that items is a list and it only has one item in this list.
#And to access this, all we do is items at 0 because lists are accessed by index 
#and they start at 0 and go all the way to the list size minus 1. 
#And here since the list size is only 1, the only index that we can access is 0. 
#And once we're inside the first item of the list, then we're looking for searchInfo, 
#and that's what we see here and that's what we go into, and then we access textSnippet, 
#which is an attribute of the searchInfo. And then we ultimately get this description 
#that we then print out to the user
print(obj['items'][0]['searchInfo']['textSnippet']) 