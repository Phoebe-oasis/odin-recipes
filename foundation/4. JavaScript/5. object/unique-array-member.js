const q12Button = document.querySelector('button[name="q12"]');

let strings = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];              
function unique(arr){
  let newArr = [];
  arr.map(item => {
    if(!newArr.includes(item))newArr.push(item);
  })
  return newArr;
}

q12Button.addEventListener('click', () => {
  alert( unique(strings) ); // Hare, Krishna, :-O

});
