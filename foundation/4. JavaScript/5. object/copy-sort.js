const q5Input = document.querySelector('input[name="q5"]');
const q5Button = document.querySelector('button[name="q5"]');
let array = [];

function copySorted(arr){
    let newArray = arr.slice(0);
    return newArray.sort();
    //法2：//return arr.toSorted();
}


q5Button.addEventListener('click',()=>{
    if(q5Input.value){
        array = q5Input.value.split(',');
        let sorted = copySorted(array);
        alert(sorted);
        alert(array);
    }
});