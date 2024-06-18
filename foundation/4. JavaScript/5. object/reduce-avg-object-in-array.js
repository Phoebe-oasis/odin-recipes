const q11Button = document.querySelector('button[name="q11"]');

let joon = { name: "joon", age: 25 };
let pee = { name: "pee", age: 30 };
let mmy = { name: "mmy", age: 29 };            
let arr11 = [ joon, pee, mmy ];            

function getAverageAge(arr11){
    return arr11.reduce((sum, current) => sum + current.age, 0) / arr11.length;
}

q11Button.addEventListener('click',()=>{
    alert( getAverageAge(arr11) ); // (25 + 30 + 29) / 3 = 28
});
