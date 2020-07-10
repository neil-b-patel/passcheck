document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById("myInput");
    const result = document.getElementById("result");

    input.addEventListener('input', strongPassword);
})

function strongPassword(password) {
    "use strict";
    password = password.target.value;
    resetText();

    let spclChars = ['!', '@', '#', '$', '%', '^', '&', '*', '()', '-', '+'],
        numDigits = 0,
        numLower = 0,
        numUpper = 0,
        numSpcl = 0,
        charsNeeded = 0;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            numDigits++;
        }
        if (password[i] >= 'a' && password[i] <= 'z') {
            numLower++;
        }
        if (password[i] >= 'A' && password[i] <= 'Z') {
            numUpper++;
        }
        if (spclChars.includes(password[i])) {
            numSpcl++;
        }
    }

    if (password.length < 6) {
        document.getElementById('length').innerHTML = "Boo! Your password is too short. Add at least " + (6 - password.length) + " characters."
    }
    if (!numDigits) {
        document.getElementById('digit').innerHTML = "Add at least 1 digit.";
        charsNeeded++;
    }
    if (!numLower) {
        document.getElementById('lower').innerHTML = "Add at least 1 lowercase letter.";
        charsNeeded++;
    }
    if (!numUpper) {
        document.getElementById('upper').innerHTML = "Add at least 1 uppercase letter.";
        charsNeeded++;
    }
    if (!numSpcl) {
        document.getElementById('spcl').innerHTML = "Add at least 1 special character.";
        charsNeeded++;
    }

    if (password.length >= 6 && !charsNeeded) {
        document.getElementById('congrats').innerHTML = "Congratulations! You're password is (probably) safe from script kiddies.";
    }
}

function resetText() {
    document.getElementById('length').innerHTML = "";
    document.getElementById('digit').innerHTML = "";
    document.getElementById('lower').innerHTML = "";
    document.getElementById('upper').innerHTML = "";
    document.getElementById('spcl').innerHTML = "";
    document.getElementById('congrats').innerHTML = "";
}