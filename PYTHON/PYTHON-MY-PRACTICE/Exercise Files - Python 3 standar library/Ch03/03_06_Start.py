# Tempfile Module
import tempfile

# Create a temporary file
tempfile = tempfile.TemporaryFile()

# Write to a temporary file
tempfile.write(b"Save this special number for me: 567")
tempfile.seek(0)

# Read the temporary file
print(tempfile.read())

# Close the temporary file
tempfile.close()