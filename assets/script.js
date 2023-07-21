// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password
function generatePassword() {
  var passwordLength = promptPasswordLength();
  if (!passwordLength) {
    return "";
  }
  var hasLowercase = confirm("Include lowercase letters?");
  var hasUppercase = confirm("Include uppercase letters?");
  var hasNumber = confirm("Include numbers?");
  var hasSpecialCharacter = confirm("Include special characters?");

  if (!hasLowercase && !hasUppercase && !hasNumber && !hasSpecialCharacter) {
    alert("You must agree to at least one of the prompt criteria.");
    return "";
  }
  return generateRandomPassword(passwordLength, hasLowercase, hasUppercase, hasNumber, hasSpecialCharacter);
}

// Function to prompt for password length
function promptPasswordLength() {
  var passwordLength = prompt("Select a number between 8 and 128.");
  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128 to proceed.");
    return null;
  }
  return passwordLength;
}

// Function to generate a random password
function generateRandomPassword(length, hasLowercase, hasUppercase, hasNumber, hasSpecialCharacter) {
  var characters = "";
  var password = "";
  if (hasLowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (hasUppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (hasNumber) {
    characters += "0123456789";
  }
  if (hasSpecialCharacter) {
    characters += "!#$%&'()*+,-./:;<=>?@[^_`{|}~"
  }
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}