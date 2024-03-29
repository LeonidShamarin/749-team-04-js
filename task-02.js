//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

  function stringToArray(string){
    return string.split(" ");  
  }

  //https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
  function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U"); 
  }

 // https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

 var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};
  
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  let min = arr[0];
  let pos = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      pos = i;
    }
  }
  return toReturn === 'value' ? min : pos;
}



//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  }
  return (
    "Oi! Sheep number " +
    (queue.length-queue.indexOf("wolf")-1) +
    "! You are about to be eaten by a wolf!"
  );
}

//https://www.codewars.com/kata/beginner-lost-without-a-map
//6
function doubleValues(array) {
    const newArray = [];
    array.forEach(el=> newArray.push(el * 2));
    return newArray;
}

console.log(doubleValues([1, 2, 3]));


//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
}
