const q6Input = document.querySelector('input[name="q6"]');
const q6Button = document.querySelector('button[name="q6"]');

function Calculator(){
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }
    this.calculate = function(str){
        let arr = str.split(' ');
        let num1 = +arr[0];
        let num2 = +arr[2];
        let op = arr[1];
        if(!this.methods[op] || isNaN(num1) || isNaN(num2))return NaN;
        return this.methods[op](num1, num2);
    }
    this.addMethod = function(name,func){
        this.methods[name] = func;
    }
}

let calc = new Calculator;
let powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);


q6Button.addEventListener('click',()=>{
    if(q6Input.value){
        alert(calc.calculate(q6Input.value))
        alert(powerCalc.calculate(q6Input.value))
    }
});

