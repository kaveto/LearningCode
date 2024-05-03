# Itertools Part 2
import itertools

# Permutations: Order matters - some copies with same inputs but in different order
election = {1:"barb", 2:"karen", 3:"erin"}
for p in itertools.permutations(election):
    print(p)

for p1 in itertools.permutations(election.values()):
    print(p1)

# Combinations: Order does not matter - no copies with same inputs
colorForPainting = ["Red","Blue","Purple"]
for c in itertools.combinations(colorForPainting,2):
    print(c)