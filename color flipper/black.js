// let firstClick = document.querySelector("#button");
// let background1 = document.querySelector("body");
// let background = document.querySelector("body")
let button = document.getElementById('button');         // <--   // grabbing the id from html from the tags button
// firstClick.addEventListener ("click", () => {       // <--  // Trial and error
//     // background1.classList.remove("yellow");
//     background1.classList.add("blue"),("yellow");
//     background2.classList.replace("violet");
   
// }
// )
let color = ["blue","yellow","violet","black"];    // <--  // This will display the colors when using the array
// let word = ["blue","yellow","violet"];     // <--  // Trial and error
// let color = ["blue","yellow","violet;"];

// for(i=0; i < color.length;i++){
//    console.log(color);
// }

button.addEventListener('click', function(){                     // <--     // I use the function so that I can randomize the colors in the previous array

   let randomColor = color[Math.floor(Math.random() * color.length)]     // <--    // I declare my variable with let randomColor and use color to randomize the color array.
   // let randomWord = word[Math.floor(Math.random() * word.length)]     // <--  // Trial and error. Was trying to display the name o

let body = document.getElementById('body');   // <-- // Using my element id, I can create the colors I want in the background
// let word = document.getElementById('random-word');

body.style.background = randomColor;  // <-- // The colors will display using randomColor for the entire background. 
// word.style.random = randomWord;
})




