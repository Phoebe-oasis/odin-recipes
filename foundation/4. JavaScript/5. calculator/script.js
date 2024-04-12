let num1,
    num2,
    op;
let result = 0; //结果
let chara;//当前按下的是哪个按键(文本值)
let cname;//当前按下的是哪个按键(类名)
// flag = 0为未按操作符
let flag = 0;//每按一下操作符，后面跟着按数字的下屏幕都要清一次屏
const methods = {
    "+":(a, b)=>a + b,
    "-": (a, b)=>a - b,
    "×": (a, b)=>a * b,
    "÷": (a, b)=>a / b,
    "%": (a, b)=>a % b,
}
const nums = document.querySelector('.display .nums');
const expression = document.querySelector('.display .expression');
// // 增加按钮，可以绑定键盘
// const addBtn = document.querySelector('.addBtn');
// const divBtn = document.querySelector('.divBtn');
// const equBtn = document.querySelector('.equBtn');
// const two = document.querySelector('.twoBtn');
// const three = document.querySelector('.three');


function boxShadowNone(e){
    if(e.target.className.includes('key')){
        e.target.style.boxShadow = 'none';
    }
}

function boxShadowAppear(e){
    if(e.target.className.includes('key')){
        e.target.style.boxShadow = '1px 1px 2px 1px  rgb(213, 213, 213)';
    }
}

function displayBelow(e){
// 下屏幕只有跟在后面显示数字和清空后显示数字两种操作

    chara = e.target.innerText;
    cname = e.target.className.split(' ')[1]; 

    if(e.key){
        switch(e.key){
            case '.':{
                chara = e.key;
                cname = 'dot';
            };break;
            case 'Enter':{
                chara = '=';
                cname = 'equals';
            };break;
            case '+':{
                chara = e.key;
                cname = 'operator';
            };break;
            case '-':{
                chara = e.key;
                cname = 'operator';
            };break;
            case '/':{
                chara = '÷';
                cname = 'operator';
            };break;
            case '*':{
                chara = e.key;
                cname = 'operator';
            };break;
            case 'Backspace':{
                cname = 'clear';
            };break;
            default:{
                chara = e.key;
                cname = 'num';
            }
        }
    }
    switch(cname){
        case 'num':{
            // 一、按下数字键的所有情况
            // 1.上屏幕无显示
            // 下屏幕上已经有0显示，则要覆盖此0
            // 下屏幕上没有0显示，则跟在数字后显示
            // 2.上屏幕有显示
            //若显示有等号，则清屏后显示数字
            //若无等号：
            // 是第一次跟在operator后面按键，则要清空下屏幕再显示；
            // 是第二次及之后跟在operator后按键，则直接跟在之前的数字后显示
            if(expression.innerText === ''){
                nums.innerText === '0' ? nums.innerText = chara : 
                                         nums.innerText += chara;   
            }else if(expression.innerText.includes('=')){
                expression.innerText = '';
                nums.innerText = chara;
            }else{
                if(flag === 1){
                    nums.innerText = chara;
                    flag = 0;
                }else{
                    nums.innerText += chara;
                }
            }
        }; break;
        case 'operator':{
            // 二、按下加号键
            // 1.上屏幕无显示
            // 无动作，原来显示什么，现在保持，逻辑写在上屏幕函数中 result = nums.innerText
            // 但因为上屏幕的函数先执行，所以一定会有显示
            //2.上屏幕显示的是操作符（加减乘除）结尾，无等号
            // 直接清空下屏幕，并显示结果
            // 3.上屏幕显示有等号
            // 下屏幕保持显示
            if(!expression.innerText.includes('=')){
                nums.innerText = result;
            }
            flag = 1;
        };break;
        case 'neg':{
            nums.innerText = `-${nums.innerText}`;
        };break;
        case 'dot':{
            // 还要考虑上屏幕有等号的情况
            if(expression.innerText.includes('=')){
                expression.innerText = '';
                nums.innerText = '0.';
            }else{
                if(!nums.innerText.includes('.')){
                    nums.innerText += '.';
                }
            }

        };break;
        case 'equals':{
            nums.innerText = result;
        };break;
        case 'clear':{
            if(nums.innerText.length === 1){
                nums.innerText = '0';
            }else{
                nums.innerText = nums.innerText.slice(0, -1);
            }
        };break;
    }
}

function operate(op, num1, num2){
    // console.log(methods[op](num1,num2))
    return methods[op](num1, num2);
}

function displayAbove(e){
    // 显示表达式，清空，计算
    chara = e.target.innerText; 
    cname = e.target.className.split(' ')[1]; 

    if(e.key){
        switch(e.key){
            case 'Enter':{
                chara = '=';
                cname = 'equals';
            };break;
            case '+':{
                chara = e.key;
                cname = 'operator';
            };break;
            case '-':{
                chara = e.key;
                cname = 'operator';
            };break;
            case '/':{
                chara = '÷';
                cname = 'operator';
            };break;
            case '*':{
                chara = e.key;
                cname = 'operator';
            };break;
        }
    }
    switch(cname){
            //一、按下数字键，上屏幕无变化
        case 'operator':{
            //二、按下加号键(加减乘除键都这样)
            //1.如果上屏幕无显示，则读取下屏幕为num1,并在上屏幕显示num1和op
            //2.如果上屏幕有显示
            // 上屏幕有 “=”则清空上屏幕，并把下屏幕上的结果作为num1
            // 上屏幕无 “=”则用num1、num2进行(各种)运算，并清空上屏幕，将结果和加号显示在上屏幕
            if(expression.innerText === ''){
                expression.innerText = nums.innerText + chara;
                result = +nums.innerText;
            }else if(expression.innerText.includes('=')){
                op = chara;
                expression.innerText = `${nums.innerText} ${op}`;

            }else{
                num1 = +expression.innerText.slice(0,-1);
                op = chara;
                num2 = +nums.innerText;
                // console.log(expression.innerText)
                // console.log(num1, op, num2)
                result = operate(op, num1, num2);
                expression.innerText = `${result} ${op} `;// 注意显示方向
            }
        };break;
        case 'equals':{
            //三、按下等号键
            //1.上屏幕无显示，读取下屏幕，让上屏幕显示 nums.innerText = 
            //2.上屏幕显示有等号
            //无动作
            //3.上屏幕显示无等号且有操作符
            //上下屏幕组合出 num1 [op] num2 = result的表达式
            //4.上屏幕显示无等号且无操作符
            //无动作
            if(expression.innerText === ''){
                expression.innerText = `${nums.innerText} = `;
            }else if(expression.innerText.includes('=')){

            }else if(expression.innerText){
                num1 = +expression.innerText.slice(0, -1);
                op = expression.innerText.slice(-1, );
                num2 = +nums.innerText;
                result = operate(op, num1, num2);
                expression.innerText = `${num1} ${op} ${num2} = `;// 注意显示方向
            } 
        };break;
        case 'all-clear':{
            num1 = 0;
            num2 = 0;
            op = '';
            expression.innerText = '';
            nums.innerText = '0';
        };break;
    }
}

function display(){
    const keyboard = document.querySelector(".keyboard");

    keyboard.addEventListener('mousedown', (e)=>{
        boxShadowNone(e);
    })
    keyboard.addEventListener('mouseup', (e)=>{
        boxShadowAppear(e);
        displayAbove(e);
        displayBelow(e);
    })
    window.addEventListener('keydown',(e)=>{
        // console.log(e.key);
        displayAbove(e);
        displayBelow(e);
    })

}
display();
