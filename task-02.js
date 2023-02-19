//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
stringToArray = function (str) {
    return str.trim().split(" ");
    };
  console.log(stringToArray("Robin Singh"));

  //https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
  function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U"); 
  }

 // https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

 function max(numbers) {
    let maxNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNum) {
        maxNum = numbers[i];
      }
    } 
    return maxNum;
  }
  function min(numbers) {
    let minNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < minNum) {
        minNum = numbers[i];
      }
    }
    
    return minNum;
  }
  
  //https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

  