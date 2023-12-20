const num = document.querySelectorAll('.no');
const operation = document.querySelectorAll('.operation');

const percent = document.getElementById('percentage');
const pluse_minus = document.getElementById('pluse_minus');
const ac = document.getElementById('ac');
const equal = document.getElementById('equal');
const display = document.getElementById('display');

let ans = 0;
let operand = '';

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
    if (operand != '') {
        ans = eval(ans + " " + operand + " " +display.innerText);
    }
    operand = '';
    display.innerText = ans;
})
ac.addEventListener('click', ()=> {
    display.innerText = '';
    ans = 0;
    operand = '';
})