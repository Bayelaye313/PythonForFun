#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
# YOUR CODE HERE
#The output of the program should be:
#The string Last digit of, followed by
#the number, followed by
#the string is, followed by the last digit of number, followed by
#if the last digit is greater than 5: the string and is greater than 5
#if the last digit is 0: the string and is 0
#if the last digit is less than 6 and not 0: the string and is less than 6 and not 0
#followed by a new line

def lastDigit(number):
    last_digit = abs(number) % 10
    return -last_digit if number < 0 else last_digit

if lastDigit(number) > 5:
    print('Last digit of {} is {} and is greater than 5'.format(number, lastDigit(number)))
elif lastDigit(number) == 0 :
    print('Last digit of {} is {} and is 0'.format(number, lastDigit(number)))
else: 
    print('Last digit of {} is {} and is less than 6 and not 0'.format(number, lastDigit(number)))

    
