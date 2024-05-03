# Itertools
import itertools

# Infinite Counting
for x in itertools.count(50, 5): #start count from 50 using 5 in 5 counting
    print(x)
    if x == 80: #otherwise without the condition will run forever and crash eventually
        break

# Infinite Cycling
xx=0
for c in itertools.cycle("katherine"): 
    print(c)
    xx = xx + 1
    if xx > 50: #otherwise without the condition will run forever and crash eventually
        break

# Infinite Repeating
for r in itertools.repeat(True):
    print(r)
    if xx > 50: #otherwise without the condition will run forever and crash eventually
        break