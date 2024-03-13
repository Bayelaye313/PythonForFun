#!/usr/bin/python3
l3 = [14,16,18,20]

#for in
for x in l3 :
    print(x)
print('')

#for in range
for i in range(len(l3)):
    print(l3[i])
print("")

#in rewards
for i in range(len(l3)-1, -1, -1 ): #from 4 to 0 step -1
    print(l3[i])

#while loop
i = 0
while i < len(l3):
    print(l3[i])
    i+=1
