//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
function findSmallestInteger(arr) {
  return Math.min(...arr);
}


//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  const circumference = 2 * Math.PI * circle.radius;
  return parseFloat(circumference.toFixed(6));
}



//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
const giveMeFive = object => {
  const result = []

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (key.length === 5) result.push(key)
      if (object[key].length === 5) result.push(object[key])
    }
  }

  return result
}

