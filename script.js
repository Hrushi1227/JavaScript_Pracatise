// // // // // // //console.log("Hello Welcome to First Script")
// // // // // // //let dummy = prompt("Enter Number")
// // // // // // //if (dummy < 10) {

// // // // // // //console.log("Your Number is less than 10  Enjoy buddy !!!!! ");
// // // // // // //console.log(dummy);
// // // // // // //}
// // // // // // //else {
// // // // // // //   console.log("YOUR WRONG BRO");
// // // // // // //}

// // // // // // /*
// // // // // // let arr = [1, 2, 3];
// // // // // // const Rushi123 = { First: "Rushi", Last: "Ghatol" }


// // // // // // for (let i = 0; i < 10; i += 2) {
// // // // // //     console.log(i);
// // // // // // }
// // // // // // console.log("Prunting Decending data ");

// // // // // // for (let i = 100; i >= 0; i -= 10) {

// // // // // //     console.log(i);
// // // // // // }


// // // // // // const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // // // // // // WRITE YOUR LOOP BELOW THIS LINE:
// // // // // // for (let i = 0; i < people.length; i++) {
// // // // // //     console.log(people[i].toUpperCase());
// // // // // // }


// // // // // // for (let i = 0; i < 10; i++) {
// // // // // //     console.log(i)
// // // // // //     for (let j = i; j <= 3; j++) {
// // // // // //         console.log(`${j}`)
// // // // // //     }
// // // // // // }

// // // // // // for (var x = 0; x < 10; x++) {
// // // // // //     for (var y = 0; y < 10; y++) {
// // // // // //         console.log("x: " + x + ", y: " + y);
// // // // // //     }
// // // // // // }

// // // // // // let secret = 'GOGO';

// // // // // // let pass = prompt("Enter passswrord");

// // // // // // while (pass !== secret) {
// // // // // //     prompt("Enter passswrord");


// // // // // // }
// // // // // // console.log('Congratulations');



// // // // // // let max = parseInt(prompt("Enter the Maxmum Number"));
// // // // // // while (!max) {
// // // // // //     prompt("Enter a Valid Number ");
// // // // // // }
// // // // // // let target = Math.floor(Math.random() * max) + 1;
// // // // // // console.log(target);

// // // // // // let guess = parseInt(prompt("Enter your Guess Man"));
// // // // // // while (guess !== target) {
// // // // // //     if (guess > target) {
// // // // // //         guess = parseInt(prompt("Your Num is High "));
// // // // // //     }
// // // // // //     else {
// // // // // //         guess = parseInt(prompt("Your Num is Low "));
// // // // // //     }
// // // // // // }

// // // // // // console.log(`You Got it your Result iisss   ${target}`);
// // // // // // */
// // // // // // let input = prompt("What Woould you like to DO !!");
// // // // // // const arr = ['demo', 'sugar', 'lasan'];
// // // // // // while (input !== 'quit' && input !== 'q') {
// // // // // //     if (input === 'list') {
// // // // // //         for (let i = 0; i < arr.length; i++) {
// // // // // //             console.log(`${i}-->${arr[i]}`);
// // // // // //         }

// // // // // //     }

// // // // // //     else if (input === 'add') {
// // // // // //         let add = prompt("Enter Value which you want to Add ");
// // // // // //         arr.push(add)
// // // // // //         console.log(`${add} Added Value `);

// // // // // //     }
// // // // // //     else if (input === 'delete') {
// // // // // //         const index = prompt("Enter  Index which you want Delete");
// // // // // //         if (!Number.isNaN(index)) {
// // // // // //             const deleted = arr.splice(index, 1);   
// // // // // //         } else {
// // // // // //             console.log('unknown index');
// // // // // //         }
// // // // // //     }


// // // // // //     input = prompt("What Woould you like to DO !!")

// // // // // // }
// // // // // // console.log("Ok You QUIT THE GAME");



// // // // // function repeat(str, num) {
// // // // //     let result = '';
// // // // //     for (let i = 0; i < num; i++) {

// // // // //         result += str;

// // // // //     }
// // // // //     console.log(result);
// // // // // }

// // // // function add(x, y) {
// // // //     if (typeof x !== 'number' || typeof y !== 'number') {
// // // //         console.log(false);
// // // //     }
// // // //     return x + y;
// // // // }   

// // // function Twice(func) {
// // //     func();
// // //     func();
// // //     func();
// // // }
// // // function roll() {
// // //     console.log("Hello");
// // // }
// // // Twice(roll);

// // //------------------------------------
// // function return_fun() {
// //     const vari = Math.random();
// //     if (vari > 0.5) {
// //         return function () {

// //             console.log("Hello function within Funtion ");
// //         }
// //     } else {
// //         return function () {
// //             alert("Your virus");
// //         }
// //     }
// // }

// // //------------------------------------

// function Between(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// const child = Between(0, 18);

// const adult = Between(19, 50);

// const senior = Between(51, 100);
// //call functio via name like child,adult,senior and pass 1 argument like defination of it