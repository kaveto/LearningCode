# Random Module
import random

# Random Numbers
print(random.random())

decider = random.randrange(2)
print(decider)
if decider == 0:
    print("HEADS")
else:
    print("TAILS")

print(random.randrange(1,7))

# Random Choices
lotteryWinners = random.sample(range(100),5)
print(lotteryWinners)

possiblePets = ["cat","dog","fish"]
print(random.choice(possiblePets))

cards = ["jack","queen","king","ace"]
random.shuffle(cards)
print(cards)