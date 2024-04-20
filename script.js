let passwordBox = document.getElementById('password');
let lengths = 12;

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialCharacters = "!@#$%^&*_-+=~`(){}[]<>|"
let allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

function generatePassword (){
    let password = "";
    password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    
    while(lengths > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
function copyPassword (){
    passwordBox.select();
    document.execCommand("copy")
}

