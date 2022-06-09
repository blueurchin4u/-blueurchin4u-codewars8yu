/* Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

1. Make function
2. Set sum variable to 0
3. Loop through array 
4. Use ternary operator to add to sum variable if results from loop are greater than 0
5. Return sum

*/

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      arr[i] > 0 ? sum += arr[i] : sum;
    }
      return sum;
    }
    