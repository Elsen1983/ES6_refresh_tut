//'Single' Promise 

let p = new Promise((resolve, reject)=>{
    let a = 1+2;
    if(a==2){
        resolve('Success')
    }else{
        reject('Failed')
    }
});

p.then( (message) => {
    console.log('This is in the then ' + message)
}).catch((message)=>{
    console.log('This is in the catch ' + message)
});


//---------------------------------

//'Multiple' Promises for see Promise.all()
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('First promise run with success...')
    }, 10);
    
});
const promise2 = new Promise((resolve, reject)=>{
    resolve('Second promise run with success...')
});
const promise3 = new Promise((resolve, reject)=>{
    resolve('Third promise run with success...')
});

//Promise.all() --> when all the promises are completed then results will be returned at same time
Promise.all([
    promise1,
    promise2,
    promise3
])
//when all are done, then do ...
.then( (messages) => {
    console.log("Promise.all() : " + messages);
}).catch((message) => {
    console.log("Something went wrong" + message);
});

//Promise.race() --> when the first promise is soon as completed then results will be returned at same time
Promise.race([
    promise1,
    promise2,
    promise3
])
//when all are done, then do ...
.then( (messages) => {
    console.log("Promise.race(): " +messages);
}).catch((message) => {
    console.log("Something went wrong" + message);
});

