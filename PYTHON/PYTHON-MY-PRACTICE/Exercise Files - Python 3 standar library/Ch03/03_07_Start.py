# Zipfile Module
import zipfile

# Open and List
zip = zipfile.ZipFile("ZipFiles.zip", "r")
print(zip.namelist())

# Metadata in the zip folder
for mega in zip.infolist():
    print(mega)

info = zip.getinfo("whishlist.txt")  
print(info)

# Access to files in zip folder
print(zip.read("whishlist.txt")) #read as a byte object

with zip.open("whishlist.txt") as f:
    print(f.read())

# Extracting files
#zip.extractall("whishlist.txt")
zip.extractall()
    
# Closing the zip
zip.close()
