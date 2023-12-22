const userName = "welcome to Jodhpur" //this is one ways 
const stringObject = new String("A string Object")
// console.log(typeof userName)
// console.log(typeof stringObject)
// console.log(userName.charAt(2)) //it is given l
// console.log(userName.toLocaleLowerCase())
// console.log(userName.toUpperCase())
// console.log(userName.toLocaleLowerCase())

//string iterator
const str = "A\uD835\uDC68";
const strIter = str[Symbol.iterator]();
// console.log(strIter.next().value)
// console.log(strIter.next().value)
// console.log(strIter.next().value)
// console.log(strIter.next().value)


// console.log(strIter)

//String prototype at

const message  = "this is copy message we can here to do that"
// let index = 5;
// console.log(`An index of ${index} return of the char ${message.at(index)}`)

// console.log(message.at(0))

//charAt
// console.log(message.charAt(2)) //given what is index 2
// console.log(message.charAt(message.length -2 ))

//Using slice() method
// console.log(message.slice(-2,-1))
//Using at() method
// console.log(message.charAt(-5))
console.log("A".charCodeAt(0))  //it is given me asc value 


//concat

const str1 = "welcome to Hello world"
const  str2 = "kapil inania"
console.log(str1.concat(' ',str2))
console.log("user value is ".concat(...str2))
//best ways of concat is 
console.log( `this is new value is ${str1} and next one is  ${str2}`)
console.log("null value is ".concat(null))
console.log("True value is ".concat(true))
console.log("True value of  4 and 5  is ".concat(4,5))


//useing endswith
const endsMessgaedata = "this is my last messgae"
console.log(endsMessgaedata.endsWith("ast messgae"))
console.log(endsMessgaedata.endsWith("ast messgae",19))

