// Assignment code here
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  }
  var password = "";
  var passwordCharacters = "";
  var lowercase = confirm("Would you like to include lowercase letters?");
  if (lowercase) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  var uppercase = confirm("Would you like to include uppercase letters?");
  if (uppercase) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  var numeric = confirm("Would you like to include numbers?");
  if (numeric) {
    passwordCharacters += "0123456789";
  }
  var special = confirm("Would you like to include special characters?");
  if (special) {
    passwordCharacters += "!@#$%^&*()_-+={}[]|:;<>?,./";
  }
  if (lowercase === false && uppercase === false && numeric === false && special === false) {
    alert("You must choose at least one character type.");
    return;
  }
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
