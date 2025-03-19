
/* task 7 */

const containerRGB = document.querySelector(".task-7 .container");
const RGBInputs = document.querySelectorAll(".task-7 .container input");
const RGBText = document.querySelector("#rgb-code");


chacngeBGColor(createColor())

containerRGB.addEventListener('input', (e) => {
    if (e.target.type !== "range") return;
    console.log()
    chacngeBGColor(createColor())
})

function createColor() {
    let RGBColor = 'rgb(';
    for (let i of RGBInputs) {
        RGBColor += i.value + (i.id !== "blue" ? ',' : ')');
    }
    return RGBColor;
}

function chacngeBGColor(color) {
    containerRGB.style.backgroundColor = color;
    RGBText.textContent = color;
}



/* task 8 */

const keyboard = document.querySelector('.keyboard');
const keyboardInput = document.querySelector('.keyboard-input');

function keyboardCreate() {
    let keyboardChar = keyboardCharCreate();
    for (let str of keyboardChar) {
        for (key of str) {
            let elem = document.createElement('div');
            elem.className = "key";
            elem.textContent = key;
            keyboard.appendChild(elem)
        }
    }
    let shift = document.createElement('div');
    shift.className = "key";
    shift.textContent = 'shift';
    keyboard.appendChild(shift)
}

function keyboardCharCreate() {
    let str = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    return str.map(i => i.split(''))
}

keyboardCreate()

keyboard.addEventListener('click', (e) => {
    if (e.target.className !== "key") return;

    if (e.target.textContent == 'shift') {
        keyboardInput.dataset.case = keyboardInput.dataset.case == 'lower' ? 'upper' : 'lower';
        return
    }

    keyboardInput.value += keyboardInput.dataset.case == 'lower' ? e.target.textContent : e.target.textContent.toUpperCase();
})


/*task 3 */

function strToMath() {
    let mathInput = document.querySelector('.task-9 input').value;
    let resultElem = document.querySelector('.task-9 .result');

    let newStr = mathInput.replace('^', '**');
    resultElem.textContent = eval(newStr)
}

strToMath()


const arrowMinEl = document.querySelector('.arrow-min');
const arrowSecEl = document.querySelector('.arrow-sec');
const arrowHourEl = document.querySelector('.arrow-hour');


let idTimerSec = setInterval(() => {
    let dateNow = new Date();
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();
    let hours = dateNow.getHours();

    arrowSecEl.style.transform = 'rotate(' + seconds * 6 + 'deg)';
    arrowMinEl.style.transform = 'rotate(' + minutes * 360 / 60 + 'deg)';
    arrowHourEl.style.transform = 'rotate(' + ((360 / 12 * hours) + (30 / 60 * minutes)) + 'deg)';
}, 1000)



/* task 10 */

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); //доступ к контексту 
let isDrawing = false;
let colorChange = document.querySelector('input#color');

canvas.addEventListener('mousedown', ({ offsetX, offsetY }) => {
    ctx.strokeStyle = colorChange.value;
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
})

canvas.addEventListener('mousemove', ({ offsetX, offsetY }) => {
    if (isDrawing) {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    }
})

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});