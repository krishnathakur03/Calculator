const num = document.querySelectorAll('.no');
const operation = document.querySelectorAll('.operation');

const percent = document.getElementById('percentage');
const pluse_minus = document.getElementById('pluse_minus');
const ac = document.getElementById('ac');
const equal = document.getElementById('equal');

const upDisplay = document.getElementById('display');
const display = document.getElementById('main-display');
const subDisplay = document.getElementById('sub-display');

let ans = 0;
let operand = '';
let currFont = 40;

num.forEach((ele)=> {
    ele.addEventListener('click', ()=>{
        if (display.innerText == '') {
            display.innerText = ele.innerText;
        } else {
            if (display.innerText.includes('.') && ele.innerText == '.') {
                return;
            }
            display.innerText = display.innerText + ele.innerText;
        }
        if (display.offsetWidth >= upDisplay.offsetWidth -10 && currFont >= 25) {
            display.style.fontSize = `${currFont - 10}px`;
            currFont -= 5;
        }
        subDisplay.innerText = ans + " " + operand;
    })
})
operation.forEach((ele) =>{
    ele.addEventListener('click', ()=>{
        if (display.innerText != '') {
            if (operand != '') {
                ans = eval(ans + " " + operand + " " +display.innerText);
            } else{
                ans = display.innerText;
            }
            display.innerText = '';
        }
        operand = ele.innerText;
        subDisplay.innerText = ans + " " + operand;
        display.style.fontSize = '40px';
        currFont = 40;
    })
})
percent.addEventListener('click', ()=>{
    if(display.innerText != ''){
        display.innerText = (parseFloat(display.innerText/100));
        ans = display.innerText;
    }
})
pluse_minus.addEventListener('click', ()=>{
    display.innerText = display.innerText*(-1);
})
equal.addEventListener('click', ()=>{
    ans = Math.round(13);
    if (operand != '') {
        ans = eval(ans + " " + operand + " " +display.innerText);
    }
    operand = '';
    display.innerText = ans;
    subDisplay.innerText = "Ans. " + ans;
    display.style.fontSize = '40px';
    currFont = 40;
})
ac.addEventListener('click', ()=> {
    display.innerText = '';
    ans = 0;
    operand = '';
    subDisplay.innerText = "";
    display.style.fontSize = '40px';
    currFont = 40;
})