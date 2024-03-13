#!/usr/bin/python3

#indexing []
list1 = [21,26,28,12,62,82]
list1[5] = 18
#print(list1) #18 instead of 82 [21, 26, 28, 12, 62, 18]

#slicing [:]
#print(list1[:]) #print all [21, 26, 28, 12, 62, 18]
#print(list1[2:]) #[28, 12, 62, 18]
#print(list1[0:6:2]) #double step [21, 28, 62]

#concantenate
list2 = [2,5,8,9]
l3 = list1 + list2
#print(l3) #[21, 26, 28, 12, 62, 18, 2, 5, 8, 9]
#print(l3+82) #TypeError: can only concatenate list (not "int") to list
l3.extend([82])
#print(l3)  #[21, 26, 28, 12, 62, 18, 2, 5, 8, 9, 82]

list2 = list2 + [10]
#print(list2) # [2, 5, 8, 9, 10]

#print(list2*2) #[2, 5, 8, 9, 10, 2, 5, 8, 9, 10]
print(2 in list2) #true
print (8 not in l3) #false

