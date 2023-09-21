const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
	return arr.reduce((total, current)=>total +=current, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, current)=>total *=current, 1);

};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let f = 1;
	for(let i = 1; i <= num; i++){
    f *= i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
