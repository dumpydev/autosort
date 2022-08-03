from random import random


import random
classes = [
    "MAT",
    "ART",
    "BIO",
    "CHE",
    "ENG",
    "PHY",
    "SOC",
    "HIS",
    "GEO",
    "PEA"
]

for i in range(100):
    with open("{} - {}.txt".format(classes[random.randint(0, len(classes) -1)], random.randint(0, 10000)), "w") as f:
        f.close()