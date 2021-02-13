const btn = document.querySelector('#v2')
//console.log(btn);


btn.onclick = function () {

    console.log("Hello You Cliced me via Javascript ")

}

document.querySelector('.Button_New').addEventListener('click', (evt) => {
    console.log(evt)

})

const inp = document.querySelector('#Input_val');
inp.addEventListener('keydown', (Evt) => {
    console.log(Evt.key)
    console.log(Evt.code)
})




function screem() {
    console.log("Stop Touchiing me ");
    alert('Stop Touchiing me!!')
}

btn.onmouseenter = screem;


const btn3 = document.querySelector('#v3')

btn3.addEventListener('click', () => {

    alert('Third Method to click Button')
    console.log("Third Method to click Button")

})


const btn_back = document.querySelector('#v5')
const h3 = document.querySelector('h3')

btn_back.addEventListener('click', () => {
    const makeRandom = randomColorsFun();
    document.querySelector('.random').style.backgroundColor = makeRandom;
    h3.innerText = makeRandom;

})
const randomColorsFun = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}

const btn_many = document.querySelectorAll('button');


for (let btn of btn_many) {
    btn.addEventListener('click', Colorize)
}

const h2s = document.querySelectorAll('h2');
for (let h2 of h2s) {
    h2.addEventListener('click', Colorize)
}

function Colorize() {
    this.style.backgroundColor = randomColorsFun();
    this.style.color = randomColorsFun();
}