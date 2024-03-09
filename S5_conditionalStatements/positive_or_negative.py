#!/usr/bin/python3
import random
number = random.randint(-10, 10)
# YOUR CODE HERE
#The output of the program should be:
#The number, followed by
#if the number is greater than 0: is positive
#if the number is 0: is zero
#if the number is less than 0: is negative
#followed by a new line

if number > 0 :
    print('{}: is positive'.format(number))
elif number == 0 :
    print('{}: is zero'.format(number))
else:
    print('{}: is negative'.format(number))


