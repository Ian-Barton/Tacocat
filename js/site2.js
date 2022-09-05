function getValues() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let returnObj = checkString(userString);
    display(returnObj);
}

function checkString(userString) {
    userString = userString.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for (let i = userString.length - 1; i >=0; i--) {
        revString += userString[i];
    }

    if (revString == userString) {
        returnObj.msg = "Well done! You've entered a Palindrome."
    }
    else {
        returnObj.msg = "Sorry! You did not enter a Palindrome."
    }

    returnObj.reversed = revString;
    return returnObj;
}

function display(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}