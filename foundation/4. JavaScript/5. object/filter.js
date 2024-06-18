const q2Input = document.querySelector('input[name="q2"]');
const q2Button = document.querySelector('button[name="q2"]');

function filterRange(str, a, b){
    return str.split(',').filter(item =>{
        if(item >= a && item <= b){
            return true;
        }
    });
}


q2Button.addEventListener('click',()=>{
    if(q2Input.value){
        alert(filterRange(q2Input.value, 1, 4));
    }
});