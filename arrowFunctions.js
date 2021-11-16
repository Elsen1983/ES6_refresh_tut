/*

Change the following functions to use arrow function

function sum(a,b){
    return a + b;
}
function isPositive(number){
    return number >= 0;
}
function randomNumber(){
    return Math.random;
}
document.addEventListener('click', function(){
    console.log("Click");
});
*/

//1st step - remove function()
//2nd step add =>
let sum = (a,b) => {
    return a + b;
}
//and could be simplified by remove return and {}
let sum2 = (a,b) => a + b;

//if there is just one parameter then we can remove () also
let isPositive = number => number >= 0;

let randomNumber = () => Math.floor(Math.random() * 10);

//using anonymous function in this arrowFunction (but then cannot use ; after console.log())

//document.addEventListener('click', () => console.log("Click"));


console.log(sum(22,5));
console.log(sum2(4,6));
console.log(isPositive(-10));
console.log(randomNumber());

//-------------------------------------------------
//-------------------------------------------------
// arrow function is redefine the THIS keyword inside of them opposed to normal functions
//explain it soon


