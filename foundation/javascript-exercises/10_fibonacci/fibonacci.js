const fibonacci = function(num) {
    if(typeof(num) === 'string'){
        num = +num;
    }
    if(typeof(num) === 'number' && num >=1){
        const fibo = [];
        let current = 0;
        fibo.push(1);
        fibo.push(1);
        for(let i = 0; i < num-1; i++){
            current = fibo[i] + fibo[i+1];
            fibo.push(current);
        }
    return fibo[num - 1];
    }else{
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
