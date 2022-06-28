/*
Keep Hydrated!

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

1.  Create a function that takes a parameter of time
2.  Use if statement to multiply time * .5 with Math.floor() to round to number
*/


function litres(time) {
    if (time => 0) {
      return Math.floor(.5 * time)
    }
  }