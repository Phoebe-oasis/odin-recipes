const q8Button = document.querySelector('button[name="q8"]');

let johnn = { name: "John", surname: "Smith", id: 1 };
let peter = { name: "Pete", surname: "Hunt", id: 2 };
let may = { name: "Mary", surname: "Key", id:3 };            
let users2 = [ johnn, peter, may ];            
let usersMapped = users2.map(item => {
    let fullName = `${item.name} ${item.surname}`;
    return {'fullName': fullName, 'id': item.id};
});

q8Button.addEventListener('click',()=>{
    alert( usersMapped[0].id ) // 1
    alert( usersMapped[0].fullName ) // John Smith
});