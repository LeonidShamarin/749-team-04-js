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
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      pos = i;
    }
  }
  return toReturn === 'value' ? min : pos;
}

----
const min = (arr, toReturn, minArr = Math.min(...arr)) => 
 toReturn =='value'? minArr : arr.indexOf(minArr)





//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

  function warnTheSheep(queue) {
    let indexOfWolf = queue.indexOf("wolf");
    for(let i=(queue.length-1); i>=0; i--){
      if (i === (indexOfWolf+1)) {
        return "Oi! Sheep number " + (queue.length-i) + "! You are about to be eaten by a wolf!";
      } else if(i === indexOfWolf){
        return "Pls go away and stop eating my sheep";
      }
    }
  }
  


