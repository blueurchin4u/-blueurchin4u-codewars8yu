/*
Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.


1.  Create function
2.  Use split method to split string at space character, then rejoin without spaces using join method.

*/


function noSpace(x){
    const noWSpace = x.split(' ').join('')
    return noWSpace
  }