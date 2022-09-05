//Get the String input
//Controller function
function getValues() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    userString = userString.replace(" ", "");
    userString = userString.toLocaleLowerCase(userString);
    reverseString(userString);
}
//Reverse the String
//Logic Function
function reverseString(userString) {
    let revString = [];

    for (let i = userString.length - 1; i >=0; i--) {
        revString += userString[i];
    }
    displayTacocat(userString, revString)
}
//Display the message
//View Function
function displayTacocat(userString, revString) {
    if (userString == revString) {
        document.getElementById("msg").innerHTML = `Your palindrome is: ${userString}`;
        document.getElementById("alert").classList.remove("invisible");
    }
    else {
        document.getElementById("msg").innerHTML = `You don't have a palindrome`;
        document.getElementById("alert").classList.remove("invisible");
    }
}