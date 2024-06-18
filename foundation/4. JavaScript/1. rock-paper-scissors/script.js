// 随机产生石头0剪刀1布2
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    let choice;
    switch(num){
        case 0: choice = 'rock';break;
        case 1: choice = 'scissor';break;
        case 2: choice = 'paper';break;
    }
    return choice;
};

function singlePlayRound(playerSelection, computerSelection){
    let p = playerSelection.toLowerCase();
    let c = computerSelection;

    if(p === 'rock'){
        switch(c){
            case 'rock':  return `your choise is the same with computer!`;
            case 'scissor': return `You win! ${p} beats ${c}`;
            case 'paper': return `You lose! ${c} beats ${p}`;
            default: return `Please rewrite the correct choice!`
        }
    }else if(p === 'scissor'){
        switch(c){
            case 'rock':  return `You lose! ${c} beats ${p}`;
            case 'scissor': return `your choise is the same with computer!`
            case 'paper': return `You win! ${p} beats ${c}`;
            default: return `Please rewrite the correct choice!`
        }
    }else if(p === 'paper'){
        switch(c){
            case 'rock':  return `You lose! ${c} beats ${p}`;
            case 'scissor': return `You win! ${p} beats ${c}`;
            case 'paper': return `your choise is the same with computer!`
            default: return `Please rewrite the correct choice!`
        }
    }else{
        alert('please enter the correct choice: ');
    }

};

// function game(){
//     let user = prompt("Please enter your choice: ");
//     let computer;
//     let result;
//     for(let i = 0; i < 5; i++){
//         computer = getComputerChoice();
//         result = singlePlayRound(user, computer);
//         alert(result);
//     }
// }

// game();

const btns = document.querySelector(".buttons");
// console.log(btns)
btns.addEventListener('click', function(e){
    // console.log(e.target.getAttribute('class'));
    alert(singlePlayRound(e.target.getAttribute("class"), getComputerChoice()));
    
},true);
