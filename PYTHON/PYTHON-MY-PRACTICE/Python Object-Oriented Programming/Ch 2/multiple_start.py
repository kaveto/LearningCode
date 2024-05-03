# Python Object Oriented Programming by Joe Marini course example
# Understanding multiple inheritance


class A:
    def __init__(self):
        super().__init__()
        self.prop1 = "prop1"
        self.name = "class a"


class B:
    def __init__(self):
        super().__init__()
        self.prop2 = "prop2"
        self.name = "class b"


class C(A, B):
    def __init__(self):
        super().__init__()
    
    def snowdrops(self):
        print(self.prop1,self.prop2)
        #When you call a method or access an attribute in Python, the interpreter uses something 
        #called the method resolution order to look it up in the class.
        #so, in this case where the attribute "name" is the same in class A and B. the first the interpreter will show
        #is the class A, because is listed first "class C(A,B)". If B were first, value of b class will be shown.
        # typing in this order "class C(A,B)".
        print(self.name)


c = C()
c.snowdrops()
