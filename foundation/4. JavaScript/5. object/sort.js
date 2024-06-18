const q4Input = document.querySelector('input[name="q4"]');
const q4Button = document.querySelector('button[name="q4"]');

function sort(arr){
    return arr.sort((a, b) => {
        return b - a;
    });
}


q4Button.addEventListener('click',()=>{
    if(q4Input.value){
        alert(sort(q4Input.value.split(',')));
    }
});