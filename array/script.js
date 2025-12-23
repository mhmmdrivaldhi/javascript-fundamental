// array with method length
let name = ["Muhammad", "Ali", "Khan", "Duk"];
console.log(name)
console.log(name.length)

// array with method toString & join
let val = [1, 2, 3, 4, 5]
console.log(val)
console.log(val.toString())
console.log(typeof val) // return data type is object

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
console.log(days)
console.log(days.join("-"))

// array with method pop & shift
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months)
console.log(months.pop()) // method pop will delete the last index of array (december)
console.log(months)
console.log(months.shift()) // method shift will delete the first index of array (january)

// array with method push & unshift
let progLang = ["PHP", "Golang"]
console.log(progLang)
progLang.push("Javascript") 
console.log(progLang) // method push will add value of array at the end

progLang.unshift("Python")
console.log(progLang) // method unshift will add value of array at the start

// array with method splice
let frameworks = ["Laravel", "Gin", "React"]
frameworks.splice(3, 0, "Djago")
console.log(frameworks)

// array with method concat
joinArray = progLang.concat(frameworks)
console.log(joinArray)

// array with method slice
let number = [11, 10, 9, 8 ,7]
joinNumber = number.slice(1, 3)
console.log(joinNumber)