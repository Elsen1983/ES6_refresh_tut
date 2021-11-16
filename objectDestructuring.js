const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = [1,2,3,4,5,6]

const [a,,b, ...rest] = alphabet;

//combine 2 array
const newArray = [...alphabet, ...numbers]

console.log(a);
console.log(b);
console.log(rest);

console.log(newArray);

function sumAndMultiply(a,b){
    return [a+b, a*b];
};
const sumAndMultiplyArray = sumAndMultiply(2,5);
console.log(sumAndMultiplyArray);

const [sum, multiply] = sumAndMultiply(2,5);
console.log(`Sum = ${sum}`);
console.log(`Multiply = ${multiply}`);


//Object Destructuring
//https://www.youtube.com/watch?v=NIq3qLaHCIs&list=PLZlA0Gpn_vH-0FlQnruw2rd1HuiYJHHkm&index=5

const personOne = {
    name: 'Tim',
    age: 26,
    address:{
        city: 'Bandon',
        state: 'Cork'
    }
}
const personTwo = {
    name: 'Bob',
    age: 42,
    favoriteFood : "Mellon",
    address:{
        city: 'Cork',
        state: 'Cork'
    }
}

const { name: firstName_UserOne, age: age_UserOne, favoriteFood: favoriteFood_UserOne = "rice" } = personOne;
console.log(firstName_UserOne);
console.log(age_UserOne);
console.log(favoriteFood_UserOne);

const {name: firstName_UserTwo, age: age_UserTwo, favoriteFood: favoriteFood_UserTwo = "rice" } = personTwo;
console.log(firstName_UserTwo);
console.log(age_UserTwo);
console.log(favoriteFood_UserTwo)

