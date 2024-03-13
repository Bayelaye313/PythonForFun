#!/usr/bin/python3

l3 = [10,12,14,16]
l3.append(10) #only one
print(l3) #[10, 12, 14, 16, 10]
l3.extend([18,20])
print(l3) #10, 12, 14, 16, 10, 18, 20]
l3.insert(0,8)
print(l3) #[8, 10, 12, 14, 16, 10, 18, 20]
print(l3.index(16)) #4
l3.remove(10)
print(l3) #[8, 12, 14, 16, 10, 18, 20]