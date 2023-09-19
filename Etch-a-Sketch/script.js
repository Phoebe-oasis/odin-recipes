const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = `rgb(192, 145, 145)`;

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let mouseDown = false;

const plate = document.querySelector('.plate');
const btns = document.querySelectorAll('button');


function initializePlate(size){
    const sizeBtn = document.querySelector('.size');
    const clearBtn = document.querySelector('.clear');
    const colorBtn = document.querySelector('.color');
    const rainbowBtn = document.querySelector('.rainbow');
    const valueBtn = document.querySelector('.value');

    sizeBtn.addEventListener('click',changePlateSize);
    clearBtn.addEventListener('click', reloadPlate);
    colorBtn.addEventListener('click', changePainterColor);
    rainbowBtn.addEventListener('click', changeRainbowMode);
    valueBtn.addEventListener('click', changePainterValue);

    plate.addEventListener('mousedown',()=> mouseDown = true);
    plate.addEventListener('mouseup',()=> mouseDown = false);
    plate.addEventListener('mousedown',changeGridColor);
    plate.addEventListener('mouseover',changeGridColor);

    if(size >=0 && size <= 100){
        for(let i = 0; i < size; i++){
            for(let j = 0; j < size;j++){
                const grid = document.createElement('div');
                grid.style.width = `${800/size}px`;
                grid.style.height = `${800/size}px`;
                plate.appendChild(grid);
            }
        }
    }else{
        alert("Please enter number between 1 and 100!");
    }
}

function reloadPlate(){
    clearUpPlate();
    initializePlate(currentSize);
}

function clearUpPlate(){
    const grids = document.querySelectorAll('.plate div');
    for(let i = 0; i < grids.length; i++){
        plate.removeChild(grids[i]);
    }
}

function changeGridColor(e){
    if(e.target !== plate){
        if(e.type === 'mouseover' && !mouseDown) return;

        for(let i = 0; i < btns.length; i++){
            if(btns[i].className.match('active')){

                if(btns[i].className.match('color')){

                }else if(btns[i].className.match('rainbow')){
                    let R = Math.floor(Math.random() * 255);
                    let G = Math.floor(Math.random() * 255);
                    let B = Math.floor(Math.random() * 255);
                    currentColor = `rgb(${R}, ${G}, ${B})`;

                }else{
                    let HSL = RGBtoHSL(currentColor);
                    let newHSL;
                }
            }
        }
        e.target.style.backgroundColor = currentColor;

    }
}
function changePlateSize(){
    currentSize = +prompt('Please enter the number of squares per side for the new grid: (1~100)');
    clearUpPlate();
    initializePlate(currentSize);
}


function changePainterColor(e){
    // console.log(btns);// nodelist
    const colorHide = document.querySelector('#colorhide');
    colorHide.addEventListener('input', ()=> currentColor = colorHide.value);
    colorHide.click();

    for(let i = 0; i < btns.length; i++){
        if(btns[i].className.match('active')){
            btns[i].classList.remove('active');
        }
    }
    if(!e.target.className.match('active')){
        e.target.classList.add('active');
    }

}

function changeRainbowMode(e){
    for(let i = 0; i < btns.length; i++){
        if(btns[i].className.match('active')){
            btns[i].classList.remove('active');
        }
    }
    if(!e.target.className.match('active')){
        e.target.classList.add('active');
    }
}

function changePainterValue(e){
    for(let i = 0; i < btns.length; i++){
        if(btns[i].className.match('active')){
            btns[i].classList.remove('active');
        }
    }
    if(!e.target.className.match('active')){
        e.target.classList.add('active');
    }
}



initializePlate(currentSize);



// plate.addEventListener('mouseout',function(e){
//     if(e.target !== plate){
//         // console.log(e.target);
//     e.target.style.backgroundColor = 'white';
//     }
// });







