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

const formsbt = document.querySelector('#FormSbt');
const tweetContainer = document.querySelector('tweetsContainer');
formsbt.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const usernameInput = formsbt.elements.Username;
    const tweetInput = formsbt.elements.comment;

    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';

})






const addTweet = (username, tweet) => {
    const NewElement = document.createElement('li')
    const btag = document.createElement('b');
    btag.append(username)
    NewElement.append(btag);
    NewElement.append(`-${tweet}`)
    console.log(NewElement);
    tweetsContainer.append(NewElement);
}


tweetsContainer.addEventListener('click', function (evtaction) {

    evtaction.target.nodeName === 'LI' && evtaction.target.remove();

})



/*
    <li>
        <h2>username<h2>
        <h3>tweet<h3>
    <li>
*/


const setH1 = document.querySelector('#SetH1');

const H1val = document.querySelector('#SetH1Head')

setH1.addEventListener('input', (evt1) => {
    H1val.innerText = setH1.value;

})