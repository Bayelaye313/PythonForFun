#!/usr/bin/python3
#Write a program that prints the ASCII alphabet, without q and e, in lowercase, not followed by a new line.
#You can only use one print function with string format
#You can only use one loop in your code
#You are not allowed to store characters in a variable
#You are not allowed to import any module

for i in range(97,123):
    if i != 101 and i !=113:
        print('{:c}'.format(i), end="-")