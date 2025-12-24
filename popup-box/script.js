alert("Hello World")

var name = prompt("What is your name?")

var valid = confirm("Are you sure?")
if (!valid) {
    alert("Try Again!")
} else {
    alert("Hello " + name)
}