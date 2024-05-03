# HTML Parser Module
from html.parser import HTMLParser

class HTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print("start tag: ",tag)
        for attr in attrs:
            print("attr:", attr)

    def handle_endtag(self, tag):
        print("end tag: ",tag)
        
    def handle_comment(self, data):
        return print("comment: ", data)   
    
    def handle_data(self, data):
        print("data: ", data) 

parser = HTMLParser()
#parser.feed("<html><head><tittle>Coder</tittle></head><body><h1><!--hi-->I am a coder</h1></body></html>")

htmlFile = open("sampleHTML.html",'r')
s = ""
for line in htmlFile:
    s+= line
parser.feed(s)  

#input = input("Enter HTML: ")
#parser.feed(input)
#print()