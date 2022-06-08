/*
Return Negative

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

1.  Create function
2.  Pass parameter into conditional statement or as variable in ternary operator

*/

function makeNegative(num) {
  
    if (num < 0) {
      return num
    } else if (num > 0) {
      return -num
    } else {
      return 0
    }
    }

    function makeNegative(num) {
 
        const value = num  
        if (value < 0) {
          return value
        } else if (value > 0) {
          return -value
        } else {
          return 0
        }
        }

        function makeNegative(num) {
 
            const value = num  
            
            return value > 0 ? -value : value < 0 ? value : 0
              
            }