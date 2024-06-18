const q1Input = document.querySelector('input[name="q1"]');
const q1Button = document.querySelector('button[name="q1"]');
function camelize (str){

    return str.split("-")
    .map((item, index)=>{
        if(index){
            let newItem = item.slice(0,1).toUpperCase().concat(item.slice(1));
            return newItem;
        }else{
            return item;
        }})
    .join('');
}

q1Button.addEventListener('click',()=>{
    if(q1Input.value){
        alert(camelize(q1Input.value));
        
    }
});