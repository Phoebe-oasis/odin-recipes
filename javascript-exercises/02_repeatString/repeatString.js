const repeatString = function(str, num) {
  if(num < 0){
    return 'ERROR';
}else if(num == 0){
    return '';
}else{
    let strs = ""; // let strs; is wrong...but i don't know why
    while(num > 0){
        strs += str;
        num--;
    }
    return strs;
}
};

// Do not edit below this line
module.exports = repeatString;
