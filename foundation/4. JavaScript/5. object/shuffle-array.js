const q10Button = document.querySelector('button[name="q10"]');
let arr10 = [1, 2, 3];

function shufflearray(arr10){
    arr10.sort(() => {
        return Math.random() - 0.5;
    });
}

q10Button.addEventListener('click',()=>{
    shufflearray(arr10);
    alert(arr10)
});
