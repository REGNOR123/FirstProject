let a =10;   //task -1
let b =0;

setTimeout(()=>{let b = 20;},2000); //task - 2

console.log('Task-3, OUTPUT - 1 : ',a+b); // task - 3

let promise = new Promise((resolve,reject)=>{  // 'Promise' resolve the drowback of asynchronous programming
    setTimeout(()=>{
        resolve(30);   // initializing the parameter with some value
    },2000);
})
promise.then((data)=>{ // bringing out the 'resolve ' parameter value using arrow function, resolve = 30 = data
console.log('OUTPUT - 2 : ',a+data);
})

 