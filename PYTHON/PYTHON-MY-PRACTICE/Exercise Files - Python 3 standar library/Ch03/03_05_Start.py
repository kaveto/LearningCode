# Iterative Files, reading mode
myFile = open("scores.txt", "r")

# Read one line at a time
print("My one line: "+ myFile.readline())
myFile.seek(0)

# Iterate through each line of a file
for line in myFile:
    #WHEN BBB IS FOUND IT WLL BE REPLACED BY PDJ in code but not in the file
    newHighScore = line.replace("BBB" , "PDJ") 
    print(newHighScore)

myFile.close()