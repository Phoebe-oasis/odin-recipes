const q7Button = document.querySelector('button[name="q7"]');


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

q7Button.addEventListener('click',()=>{
    alert(names);
});