//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  return -Math.abs(num);
}

//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  return position + roll * 2;
}

//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
  return 'Hello ' + (name === owner ? 'boss' : 'guest');
}

//https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time * 0.5);
}

//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
