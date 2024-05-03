# Python Object Oriented Programming course example
# Using class-level and static methods


class Book:
    # TODO: Properties defined at the class level are shared by all instances
    BOOK_TYPES = ("HARDCOVER","PAPERBACK", "EBOOK")

    # TODO: double-underscore properties are hidden from other classes
    # init empty
    __bookList = None 

     # TODO: create a static method
    @staticmethod
    def get_booklists():
        if Book.__bookList == None:
            Book.__bookList = []
        return Book.__bookList
    
    # TODO: create a class method
    #let's also add a class method that returns the book types list. 
    #To do this, you need to create a method and use the class method decorator. 
    #For class methods, instead of receiving an object instance as the first argument, 
    #they receive the class itself as the first argument. 
    @classmethod
    def getBookTypes(cls):
        return cls.BOOK_TYPES

    # instance methods receive a specific object instance as an argument
    # and operate on data specific to that object instance
    def set_title(self, newTitle):
        self.title = newTitle

    def __init__(self, title, bookType):
        self.title = title
        if (not bookType in Book.BOOK_TYPES):
            raise ValueError(f'{bookType} is not a valid book type')
        else:
           self.bookType = bookType 

# TODO: access the class attribute
#print("Book types: ", Book.getBookTypes())

# TODO: Create some book instances
b1 = Book("Title1","HARDCOVER")
b2 = Book("Title2","PAPERBACK")

# TODO: Use the static method to access a singleton object
theBooks = Book.get_booklists()
theBooks.append(b1)
theBooks.append(b2)
print(theBooks)
