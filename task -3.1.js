//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
function findSmallestInteger(arr) {
  return Math.min(...arr);
}


//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  const circumference = 2 * Math.PI * circle.radius;
  return parseFloat(circumference.toFixed(6));
}

