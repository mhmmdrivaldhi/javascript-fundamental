let numberOne, numberTwo, result;

document.getElementById("btn-result").onclick = function () {
    numberOne = document.getElementById("number_one").valueAsNumber;
    console.log(`Number = ${numberOne} Type = ${typeof numberOne}`);
    numberTwo = document.getElementById("number_two").valueAsNumber;
    console.log(`Number = ${numberTwo} Type = ${typeof numberTwo}`);

    result = numberOne + numberTwo;
    console.log(`Result = ${result} Type = ${typeof result}`);

    document.getElementById("result").textContent = result;
}