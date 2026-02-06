<<<<<<< HEAD
console.log("Hello world");
var a=5; //global scope
var a = 10;
console.log(a);
let b=20; //block scope
console.log(b);
const c = 30; //block scope
// const c=40;
console.log(c);

var a = 10; //number
var str = "rekha" // '' //'' //string
var bool = true; //boolean
var un; //undefined
var nu = null; // null
var big = 1234567891239n;
var symbol = Symbol("li");
console.log(typeof a);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof un);
console.log(typeof nu);
console.log(typeof big);
console.log(typeof symbol);

var obj = {
    name:"rekha",
    age:20
}
for(let i in obj){
    console.log(i,obj[i]);
}


let arr = [10,20,30,40];
var double_arr=arr.map((i)=>(i*2));
console.log(arr);

var even = arr.filter((i)=>(i%2===0))
console.log(even);

var total = arr.reduce((sum,i)=>(sum+i),0);
console.log(total);

var total_sum = arr.map((num)=>num*2).filter((num)=>(num%2===0)).reduce((sum,num)=>(sum+num));
console.log(total_sum)

var n =7;
var flag=true;
if(n<=1) flag = false;
else{
    for(let i=2;i<=n/2;i++){
        if(n%i===0){
            flag=false;
            break;
        }
    }
}
console.log(flag?"prime":"not prime");

var name="rekha";
console.log(`My name is ${name}`);

arr.forEach((value,index)=>{
    console.log(index,value);
})

//call by function
var add=(a,b,callback)=>{
    var result=a+b;
    callback(result);
}
add(10,20,(result)=>
{
        console.log(result);
})

var main=(callBack)=>{
    console.log("I am main");
    callBack()
}
var demo =()=>{
    console.log("I am callBack");
}
var main=(myFunction)=>{
    myFunction()
}
main(demo);

var promise = new Promise((resolve,reject)=>{
    var success = false;
    if(success){
        resolve("Promise Resolved");
    }
else{
    reject("Promise Rejected");
    }
})
promise.then((res)=>console.log(res))
.catch((err)=>console.log(err))


var promise = new Promise((resolve,reject)=>{
    var success = true;
    if(success){
        setTimeout(()=>{
            resolve("Promise Resolved")
        },5000)
    }
else{
    reject("Promise Rejected");
    }
})
promise.then((res)=>console.log(res))
.catch((err)=>console.log(err))

// const getData =()=>{
//     return fetch('https://jsonplaceholder.typicode.com/posts')
// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))

const getData=async()=>{
    try{
   var res =await fetch("https://jsonplaceholder.typicode.com/posts")
   var dats =await res.json();
  console.log(data);
}
catch (err) {
    console.log(err);
    }
}
getData();
=======
console.log("Hello World!");
var a = 10;//global scope
console.log(a);
let b = 20;//block scope
console.log(b);
const c = 30;
console.log(c);//constant value
var d = 12;
var str = "soumya";
var bool = true;
var und;
var nu = null;
var big = 12345678901234567890n;
console.log(typeof a);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof und);
console.log(typeof nu);
console.log(typeof big);
console.log(typeof Symbol);
>>>>>>> 268f42caed6276f6a14c49e4ea2b890e251dde4d
