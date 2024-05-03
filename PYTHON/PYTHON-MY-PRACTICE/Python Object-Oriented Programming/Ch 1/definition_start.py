# Python Object Oriented Programming 
# Basic class definitions
#Goal: create a class to represent a book

# TODO: create a basic class
#class keywords
class Book:
    def __init__(self,title):
        self.title = title
        

# TODO: create instances of the class
#class name as a constructor function
book1 = Book("Brave New World")
book2 = Book("Pride and prejudice")

# TODO: print the class and property
print(f'object of the instance book1: {book1}')
print(f'title book1: {book1.title}')
