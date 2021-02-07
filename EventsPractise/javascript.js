const btn = document.querySelector('#v2')
console.log(btn);


btn.onclick = function () {

    console.log("Hello You Cliced me via Javascript ")

}


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
