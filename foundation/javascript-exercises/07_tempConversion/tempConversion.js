const convertToCelsius = function(fahrenheit) {
  let c = (fahrenheit - 32) / 1.8;
  if((fahrenheit - 32) % 1.8 === 0){
    return c;
  }else{
        return +c.toFixed(1);
  }
};

const convertToFahrenheit = function(celsius) {
  let f = 32 + celsius * 1.8;
  if((celsius * 9) % 5 === 0 ){
    return f;
  }else{
  return +f.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
