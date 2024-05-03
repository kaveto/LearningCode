# Python Object Oriented Programming 
# Using instance methods and attributes


class Book:
    # the "init" function is called when the instance is
    # created and ready to be initialized
    def __init__(self, title, author, pages, price):
        self.title = title
        # TODO: add properties
        self.author = author
        self.pages = pages
        self.price = price
        #you cannot use double underscore to declare a variable in python unless you want it hidden by the interpreter.
        #It means you cannot use it
        self.__secret = "This is a secret attribute" 

    # TODO: create instance methods
    def getPrice(self):
        if hasattr(self, "_discount"):
            return self.price - (self.price * self._discount)
        return self.price

    def setDiscount(self, amount):
        #"_" It is for internal use in the class and tells others developers do not use the variable name 
        #elsewhere in the code, otherwise it turns confused
        #_discount is the attribute
        self._discount = amount 
        

# TODO: create some book instances
book1 = Book("Brave New World","Leo Tolstoy",1225,39.95)
book2 = Book("Pride and prejudice","jane Austin",448,7.99)

# TODO: print the price of book1
print(f'the price of the book "{book1.title}" is: {book1.getPrice()}')

# TODO: try setting the discount
print(f'the price of the book "{book2.title}" without discount is: {book2.getPrice()}') #without discount
book2.setDiscount(0.20)
print(f'the price of the book "{book2.title}" with discount is: {book2.getPrice()}') #with discount

# TODO: properties with double underscores are hidden by the interpreter
print(book2._Book__secret) #like this you can access the hidden attribute and see whatever it has
print(book2.__secret) #like this you get the error
