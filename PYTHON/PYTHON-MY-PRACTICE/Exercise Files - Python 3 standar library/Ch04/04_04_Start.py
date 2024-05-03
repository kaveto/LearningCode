# Create a Timer with the Time module
import time

run = input("Start? ")
howManySeconds = int(input("How many seconds? "))
print(type(howManySeconds))
seconds = 0
print(type(seconds))

if run == "yes":
    while seconds != howManySeconds:
        print(">", seconds)
        time.sleep(1)
        seconds += 1
    print(">", seconds)
    