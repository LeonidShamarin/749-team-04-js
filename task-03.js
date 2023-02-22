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

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 0;
    this.species = "shark";
  }
}

class Cat extends Animal {
    constructor(name, age, status) {
    super(name, age, status);
    this.legs = 4;
    this.species = "cat";
  }
    introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;} 
  
}

class Dog extends Animal {
    constructor(name, age, status, master) {
    super(name, age, status);
    this.master = master;
    this.legs = 4;
    this.species = "dog";
  }
    greetMaster(){
    return `Hello ${this.master}`;
    } 
}