// Assignment code here
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var NumChar = '0123456789';
var specialChar = "!@#$%^&*;:{}<>,.?/[]~"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var password = "";
  var passwordChar = "";
  var passwordLengthPrompt = prompt("How many characters do you want?");
passwordLengthPrompt = parseInt(passwordLengthPrompt);
if(passwordLengthPrompt < 8) {
  alert("error your password must be 7 characters or more");
  return "";
}

if (passwordLengthPrompt > 128) {
  alert("error password must be 128 characters or less");
}

var lowercaseBoolean = confirm("would you like lowercase characters?");

if (lowercaseBoolean) {
  passwordChar += lowercaseChar;
}

var uppercaseBoolean = confirm("would you like uppercase characters?");

if (uppercaseBoolean) {
  passwordChar += uppercaseChar;

}

var numBoolean = confirm("would you like numbers?");

if (numBoolean) {
  passwordChar += NumChar;

}
var specialCharBoolean = confirm("would you like  special characters?");

if (specialCharBoolean) {
  passwordChar += specialChar;

}

for (var i = 0; i < passwordLengthPrompt; i++) {
  password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
}
return password;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.getElementById("password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

