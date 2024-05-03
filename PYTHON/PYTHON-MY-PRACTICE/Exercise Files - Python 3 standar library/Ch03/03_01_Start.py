# Command Line Arguments
import sys

# Print Arguments
print("number of arguments: ", len(sys.argv), 'arguments.')
print("arguments: ", sys.argv)

# Remove Arguments
sys.argv.remove(sys.argv[0])
print("argument", sys.argv)

# Sum up the Arguments
arguments = sys.argv
sum=0
for arg in arguments:
    try:
        number = int(arg)
        sum = sum + number
    except Exception:
        print("Argument is not a number")
    