const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'rgb(192, 145, 145)';

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let mouseDown = false;

const plate = document.querySelector('.plate');
const btns = document.querySelectorAll('button');
const sizeBtn = document.querySelector('.size');
const sizeLabel = document.querySelector('.sizeLabel');

function initializePlate(size){
    
    const clearBtn = document.querySelector('.clear');
    const colorBtn = document.querySelector('.color');
    const rainbowBtn = document.querySelector('.rainbow');
    const valueBtn = document.querySelector('.value');

    sizeLabel.innerHTML = `Change Size: ${size} * ${size}`;
    sizeBtn.addEventListener('input',changePlateSize);
    clearBtn.addEventListener('click', reloadPlate);
    colorBtn.addEventListener('click', changePainterColor);
    rainbowBtn.addEventListener('click', changeRainbowMode);
    valueBtn.addEventListener('click', changePainterValue);

    plate.addEventListener('mousedown',()=> mouseDown = true);
    plate.addEventListener('mouseup',()=> mouseDown = false);
    plate.addEventListener('mousedown',changeGridColor);
    plate.addEventListener('mouseover',changeGridColor);

    if(size >=0 && size <= 100){
        sizeBtn.value = size;
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
    // fix mouse default event !!!!!!!!!!!!
    e.preventDefault();
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

                }else if(btns[i].className.match('value')){
                    // console.log(currentColor)
                    let HSL = HEXtoRGBtoHSL(currentColor);
                    // console.log(HSL);
                    let newHSL = (HSL[2] <= 0.9) ? 
                                [parseInt(HSL[0]), +HSL[1].toFixed(2), +(HSL[2]+0.1).toFixed(2)]: 
                                [parseInt(HSL[0]), +HSL[1].toFixed(2), +HSL[2].toFixed(2)];
                    // console.log(newHSL);
                    currentColor = `hsl(${newHSL[0]}, ${parseInt(newHSL[1]*100)}%, ${parseInt(newHSL[2]*100)}%)`;
                    // console.log(currentColor);
                }
            }
        }
        e.target.style.backgroundColor = currentColor;

    }
}
function changePlateSize(){
    currentSize = sizeBtn.value;
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

function HEXtoRGBtoHSL(str){
    let R, G, B;
    let H, S, L;
    if(!str.match('hsl')){
        //HEX to RGB
        if(!str.match('rgb')){
            // console.log(str.substr(1,2),str.substr(3,2),str.substr(5,2))
            R = parseInt(str.substr(1,2), 16);
            G = parseInt(str.substr(3,2), 16);
            B = parseInt(str.substr(5,2), 16);
            // console.log(R)

        }else{
            R = +str.match(/\d+/g)[0];
            G = +str.match(/\d+/g)[1];
            B = +str.match(/\d+/g)[2];
            // console.log(R,G,B)
        }
        //RGB to HSL
        R /= 255;
        G /= 255;
        B /= 255;
        let Cmax = Math.max(R, G, B);
        let Cmin = Math.min(R, G ,B);
        L = (Cmax + Cmin) / 2;
        if(Cmax === Cmin){
            H = S = 0;
        }else{
            let delta = Cmax - Cmin;
            S = L > 0.5 ? delta / (2 - Cmax - Cmin) : delta / (Cmax + Cmin);
            switch(Cmax){
                case R: H = (G - B) / delta % 6; break;
                case G: H = (B - R) / delta + 2; break;
                case B: H = (R - G) / delta + 4; break;
            }
            H = H * 180 / Math.PI;
        }

    }else{
        // HSL string to HSL number 
        H = +str.match(/\d+/g)[0];
        S = +str.match(/\d+/g)[1] / 100;
        L = +str.match(/\d+/g)[2] / 100;

    }
    return [H, S, L];
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







