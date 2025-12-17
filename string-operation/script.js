console.log("String Operation")

// Char at method 
let dataString = "Hello Guys!"
let dataChar = dataString.charAt(6)
console.log(dataChar)

// concat method for the string connecting
let firstName = "Muhammad"
let lastName = "Ali"
let fullName = firstName.concat(" ", lastName)
console.log(fullName)

// get index of the char
let animal = "Elephant is the biggest of mammal"
console.log(animal.indexOf("s"))

// get substring of the char
console.log(dataString.substring(6))

// get char using slice
console.log(animal.slice(16, 8))

// replace string of the char
let newName = fullName.replace("Muhammad Ali", "Tank Davies")
console.log(newName)

// toLower method
let lowerName = fullName.toLowerCase()
console.log(lowerName)

// toUpper method
let upperName = fullName.toUpperCase()
console.log(upperName)

// extract data number
let val = "20"
console.log(typeof val)

valToInt = parseInt(val)
console.log(valToInt)
console.log(typeof valToInt)

// extract data float
let val2 = "85.53"
valToFloat = parseFloat(val2)
console.log(valToFloat)
console.log(typeof valToFloat)


