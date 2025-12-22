let fistName, lastName, fullName;

document.getElementById("btn-merge").onclick = function() {
    firstName = document.getElementById("first_name").value;
    lastName = document.getElementById("last_name").value;
    fullName = firstName + " " + lastName;
    console.log(fullName);

    document.getElementById("full_name").textContent = fullName;
}