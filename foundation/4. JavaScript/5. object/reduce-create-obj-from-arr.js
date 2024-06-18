const q13Button = document.querySelector('button[name="q13"]');

let users13 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
  ];   
  
function groupById(arr){
  let obj = {};
  obj = arr.reduce((pre, cur) => {
    // let key = cur.id;
    // pre[`${key}`] = cur;
    pre[cur.id] = cur
    return pre;
  }, {});
  return obj;
}


q13Button.addEventListener('click', () => {
  let usersById = groupById(users13);          
  console.log(usersById)
    /*
  // after the call we should have:          
  usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
});