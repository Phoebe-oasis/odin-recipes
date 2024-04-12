// use forEach()
// const removeFromArray = function(arr, ...other) {
//     for(let i = 0; i < other.length; i++){
//     arr.forEach(function(ele, index,array){
//         if(other[i] === ele){
//             array.splice(index,1);
//         }
//     }
        
//     )
// }
// return arr;
// };

// use includes()

const removeFromArray = function(arr, ...other){
    let newArray = [];
    arr.forEach(function(ele,index,arr){
        if(!other.includes(ele)){
            newArray.push(ele);
        }
    });
    return newArray

}



// Do not edit below this line
module.exports = removeFromArray;
