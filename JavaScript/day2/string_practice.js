//we can use simle and dubble code 
const firstName = "kapil Choudhary"
const lastName = 'Komal Choudhary'

const score = 500
//for concanaciate user + . it is not good
console.log(firstName + score + lastName)

//today we are use ``  it is called name pta nhi
console.log(`Hy there i am ${firstName}  and my count is ${score}`)

//string declarte
const disCoredname  = new String('Nsti-Jodhpur')
console.log(disCoredname)
console.log(disCoredname[0])
console.log(disCoredname.__proto__)
//how to use object
console.log(disCoredname.length)
console.log(disCoredname.toUpperCase())  //it is not changed origional values
console.log(disCoredname.charAt([3]))
console.log(disCoredname.indexOf(['J']))

//string method
const gameName = disCoredname.substring(0,4)
// 0 to 3 come last wali value include nhi ho rhi hai this is basic
console.log(gameName)

const anotherString = disCoredname.slice(-1,1)
console.log(anotherString)

//trim or replace
//trim is used to removed spaces
//it is used only work with white spaces
const newTrim = "    kapil      "
console.log(newTrim.trim())

//replace
 
const url = "https://kapil.com/kapil%20inaniya"

console.log(url.replace('%20', '-'))

console.log(url.includes('nsti'))
console.log(url.includes('kapil'))
console.log(gameName.split('-'))