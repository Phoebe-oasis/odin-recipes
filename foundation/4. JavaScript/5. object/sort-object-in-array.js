const q9Button = document.querySelector('button[name="q9"]');

let joh = { name: "John", age: 25 };
let pet = { name: "Pete", age: 30 };
let mry = { name: "Mary", age: 28 };            
let arr = [ pet, joh, mry ];

function sortByAge(array){
    arr.sort((a, b) => a.age - b.age)
}                       
// now: [john, mary, pete]

q9Button.addEventListener('click',()=>{
    sortByAge(arr);
    alert(arr[0].name); // John
    alert(arr[1].name); // Mary
    alert(arr[2].name); // Pete
});

