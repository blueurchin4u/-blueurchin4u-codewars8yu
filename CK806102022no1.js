/*
Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

1. Return using Math.min method, which returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.  If using a parameter or variable, the format below with three dots between () must be used.

*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }