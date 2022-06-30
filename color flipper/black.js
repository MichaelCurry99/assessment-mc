// let firstClick = document.querySelector("#button");
// let background1 = document.querySelector("body");
// let background = document.querySelector("body")
let button = document.getElementById('button');
// firstClick.addEventListener ("click", () => {
//     // background1.classList.remove("yellow");
//     background1.classList.add("blue"),("yellow");
//     background2.classList.replace("violet");
   
// }
// )
let color = ["blue","yellow","violet"];
// let color = ["blue","yellow","violet;"];

// for(i=0; i < color.length;i++){
//    console.log(color);
// }

button.addEventListener('click', function(){

   var randomColor = color[Math.floor(Math.random() * color.length)]

let cody = document.getElementById('body');

body.style.background = randomColor;
})




