const q3Input = document.querySelector('input[name="q3"]');
const q3Button = document.querySelector('button[name="q3"]');

function filterRangeInPlace(array, a, b){
    // let newArray = array.filter(item => {
    //     if(item >= a && item <= b){
    //         return true;
    //     }
    // });
    // for(let i = 0; i < newArray.length; i++){
    //     arr[i] = newArray[i]; 
    // }

    //法二：
    for(let i = 0; i < array.length; i++){
        let val = array[i];
        if(val < a || val > b){
            array.splice(i, 1);
            i--;
        }
    }
}


q3Button.addEventListener('click',()=>{
    if(q3Input.value){
        let arr = q3Input.value.split(',');
        filterRangeInPlace(arr, 1, 4);
        alert(arr);
    }
});