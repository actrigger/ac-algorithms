//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer)

var r = parseInt(prompt("What is the radius of the circle?"));

function circleCalculation(r) {
  var perimeter = Math.round(2 * Math.PI * r);
  var area = Math.round(Math.PI * Math.pow(r, 2));
  var sentance =
    "The area of the circle is " +
    perimeter +
    " and the perimeter of the circle is " +
    area +
    ".";
  console.log(sentance);
}

circleCalculation(r);
circleCalculation(10);
circleCalculation(11);
