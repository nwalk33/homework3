var length = 8;
var choiceArr = [];
var lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','^','|','~'];
var output = document.getElementById("output")

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if (correctPrompts){
        var newpassword = generatePassword();
        passwordText.value = newpassword;
    } else {
        passwordText.value = "";
    }
}

function generatePassword() {
    var password = "";
    for(var i = 0; i<length; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr [randomIndex];
    }
    return password;
}    
function getPrompts(){
    choiceArr = [];
    charLength = parseInt(prompt("How many characters do you want your password to be?"));
    if(isNAN(charLength) || charLength < 8 || charLength > 128) {
            alert("Password length must be between 8 and 126 characters");
            return false;
        }
    if (confirm("Do you want your password to include lower case letters?")) {
            choiceArr = choiceArr.concat(lowerCase);
        }
    if (confirm("Do you want your password to include upper case letters?")) {
            choiceArr = choiceArr.concat(upperCase);   
        }
    if (confirm("Do you want your password to include numbers?")) {
            choiceArr = choiceArr.concat(number);   
        }
    if (confirm("Do you want your password to include numbers special characters?")) {
                choiceArr = choiceArr.concat(special); 
        }
    return true;
}