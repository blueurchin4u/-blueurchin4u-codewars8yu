/*
String repeat

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

1. Create a function with 2 parameters, 1 for the # of times, one for the string
2. Create variable
3. Create for loop for # of times to repeat

*/

function repeatStr (n, s) {
    let newString = ''
    for (i = 0; i < n; i ++) {
      newString == s
    }
    return newString
  }

/*
1. Create a function with 2 parameters, 1 for the # of times, one for the string
2. Use String method of repeat, with s pre-method
*/

  function repeatStr (n, s) {
    return s.repeat(n);
  }