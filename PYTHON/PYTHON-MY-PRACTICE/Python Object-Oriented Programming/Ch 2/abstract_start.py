# Python Object Oriented Programming by Joe Marini course example
# Using Abstract Base Classes to enforce class constraints

from abc import ABC,abstractmethod
#There's a fairly common design pattern in programming where you want to provide a base class 
#that defines a template for other classes to inherit from but with a couple of twists. 
#First, you don't want consumers of your base class to be able to create instances of the base class itself 
#because it's just intended to be a blueprint or a place where you collect some common attributes. 
#And second, you want to enforce the constraint that there are certain methods in the base class 
#that have to be implemented in subclasses.

class GraphicShape(ABC): #The main class inherit from the ABC (abstract base class) library
    def __init__(self):
        super().__init__()

    #this indicates to Python that there's no implementation in the base class and each subclass 
    #has to override this method. 
    @abstractmethod
    def calcArea(self):
        pass


class Circle(GraphicShape):
    def __init__(self, radius):
        self.radius = radius
    
    def calcArea(self):
        return 3.14 * (self.radius ** 2)


class Square(GraphicShape):
    def __init__(self, side):
        self.side = side

    def calcArea(self):
        return self.side * self.side

#g = GraphicShape()

c = Circle(10)
print(c.calcArea())
s = Square(12)
print(s.calcArea())
