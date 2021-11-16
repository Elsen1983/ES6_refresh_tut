const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 100},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Book', price: 1000},
    {name: 'Keyboard', price: 25},
];

//Filter -> array.filter()
//filter all under price 100
const filteredItems = items.filter((item)=>{
    return item.price <= 100;
});
console.log(filteredItems);
console.log('-----------');

//Map -> array.map()
//return all items name
const itemsName = items.map((item)=>{
    return item.name;
});

console.log(itemsName);
console.log('-----------');

//Find -> array.find()
//return the first item where name is 'Book'
const itemFind = items.find((item)=>{
    return item.name === 'Book';
});

console.log(itemFind);
console.log('-----------');

//ForEach -> array.forEach()
//similar than a simple for loop
const forEchLoopOnItems = items.forEach((item)=>{
    console.log("The " + item.name + " price is " + item.price);
});
console.log('-----------');

//Some -> array.some()
//return true or false
//return true if is in the array any object with price less than 100
const hasCheepItems = items.some((item)=>{
    return item.price < 100;
});

console.log(hasCheepItems);
console.log('-----------');

//Every -> array.every()
//return true or false
//return true if all object in the array has a price less than 100
const allItemsCheep = items.every((item)=>{
    return item.price < 100;
});

console.log(allItemsCheep);
console.log('-----------');

//Reduce array.reduce()
// 2 property (currentTotal, item) + a second parameter as a starting point -> her it will be 0
const reduceTotal = items.reduce((currentTotal, item)=>{
    return item.price + currentTotal;
},0);

console.log(reduceTotal);
console.log('-----------');

//Includes array.includes()
//return true or false
//best use of it on arrays when the array has primitive-types elements like numbers
let includeItems = [0,6,15,8,36,25.5];
const includesItem = includeItems.includes(25.5);
console.log(includesItem);



