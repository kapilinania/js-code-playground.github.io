//two type of datatype 
//premitive and non primative
//Premitive
//7 types  these all are call by value
// string , number, boolean, null, underfind, Symbol, BinInt

//Non premitive or rederence type  
//memmory to reference attocate kiya jata hai

//Array, Objects, Functions
//objects and browser web events both are important in js 

//javascript is dynamic typed language 

const isLoggedIn = 45
const score = 150.23

const userValue = true
const outsideTemp = null    //but it is typeof is object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//both are not same 

console.log(id == anotherId)

const largeNumber = 4536456456453n
//it is bigint last m n lga doo
console.log(typeof largeNumber)


//array object and function 

const names = ["kapil", "ram", "shyam"]
//{} inside object hota hai keya nd values pair mai

let myobject = {
    name: "kapil",
    age: 22,
}

//funciton 

const myFunction = function(){
    console.log("Hello world")
} 

console.log(myFunction)
console.log(typeof myFunction)
console.log(typeof myobject)
console.log(typeof names)

//non primitive data type ka type always object he hot hai

//--------------memory allocation--
//2types of memory 
//stack. heap
//use case
//stack(primative Datatype)  hum yha ek copy milti hai 
//heap (non primative )  y ahum reference milta hai uani original value miltee hai 

let myName = "kapil choudhary"   //this is stack value a be changes 
let anotherName = myName
anotherName = "Rohit choudhary"
console.log(anotherName)
console.log(myName)

//this is heap

let userOne  = {
    email : "user@gmail.com",
    upi: "user@ybl"
}
let  userTwo = userOne

userOne.email = "kapil@google.com"

console.log(userOne.email)
console.log(userTwo.email)

