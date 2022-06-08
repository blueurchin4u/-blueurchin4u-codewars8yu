//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


/*
1. Make a function
2. Make a conditional that checks to see if number is even or odd - an even number is divisible by two with a remainder of  0
3. Return results labeled 'Even or Odd'
*/


function even_or_odd(number) {
    if (number % 2 === 0) {
      return 'Even'
    } else {
      return 'Odd'
    }
  }
