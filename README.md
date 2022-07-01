# Assessment-MC

# Exercises: Variables
## The Fortune Teller
 ### Why pay a fortune teller when you can just program your fortune yourself?
 - Store the following into variables: number of children, partner's name, geographic location, job title.

let numberOfChildren = [];
let partnersName = [];
let geographicLocation = [];

 - Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

let x = ["x","y","z","n"];

for(i=0; i < x.length; i++){
  console.log(`You will be a ${x[0]} in ${x[1]}, and married to ${x[2]} with ${x[3]} kids.`);
}
alert(`You will be a ${x[0]} in ${x[1]}, and married to ${x[2]} with ${x[3]} kids.`);

## The Age Calculator
### Want to find out how old you'll be? Calculate it!
 - Store your birth year in a variable.

let birthYear = ["1999"];

 - Store a future year in a variable.

let futureYear = ["2034","34","35"];

 - Calculate your 2 possible ages for that year based on the stored values.

 if(futureYear > birthYear ){
     alert(`I will be either ${futureYear[1]} or ${futureYear[2]} in ${futureYear[0]}`);

 - For example, if you were born in 1998, then in 2036 you'll be either 37 or 38, depending on what month it is in 2036.

 - Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

## The Lifetime Supply Calculator
### Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
 - Store your current age into a variable.
 - Store a maximum age into a variable.
 - Store an estimated amount per day (as a number).
 - Calculate how many you would eat total for the rest of your life.
 - Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".



# Exercises: Arrays 

## 1.

  ```let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];```

  

 - What is the length of the array?
     6
 - Write a function called ```myAlphabetLength``` which console.logs the length of the array

 function myAlphabetLength(){

   console.log(myAlphabet.length)

   if(myAlphabet[0]< myAlphabet[4]){
    alert(`${myAlphabet[0]} is less than ${myAlphabet[1]}`)
   }

 }

 - Within the function also use an ```if```-conditional statement that checks if the number of items within the array are less than 4

 

## 2.

 - Declare a function ```checkFunc``` that takes a string and a boolean as parameters

 - Call the function using 2 arguments

## 3.

 - Declare and initialize an array called ```Planets``` with 5 string values

 - ```console.log``` each item in the array

 - Also console.log the index in each iteration

## 4.
 - Declare and initialize an array called

 ```wowDatatypes```

The array must have 5 different data types (NOT objects)

# Color Flipper
- Navigate to the color flipper folder and use the provides html, css and javascript files
- Create a color flipper site like the following:

https://ashuydv.github.io/color-picker/

The concepts you will need to use are a button with event handler, arrays, variables, and functions!
NOTE: you can use hex values or regular color values (I.E red, green, yellow, blue, etc). Stretch goal is to include BOTH regular and hex color values!
