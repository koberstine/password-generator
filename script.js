// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbol = ['\u0020', '\u0021', '\u0022', '\u0023', '\u0024', '\u0025', '\u0026', '\u0027', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];
var enteredInputLength ="";
var userInputLength = 0;
var passwordLength = 0;
var lowerCheck = false;
var upperCheck = false;
var numberCheck = false;
var symbolCheck = false;
var newPassword = "";
var identifyer = 0;
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;
};

function generatePassword() {
  passwordText.value = ""
  do {
    enteredInputLength = prompt("How many characters should the password be?", "8 to 128")
    userInputLength = (parseInt(enteredInputLength));
    // Sanity check on user input for password length
    if (isNaN(userInputLength)) {
      alert("Please enter a number");
    } else if (enteredInputLength != userInputLength) {
      alert("Please enter an integer"); 
    } else if (userInputLength < 8) {
      alert("Please enter a number that is at least 8");
    } else if (userInputLength > 128) {
      alert("Please enter a number that is no more than 128");
    } else passwordLength = userInputLength;
  } while (passwordLength < 1);

  // User prmpted for character types
  do {
    lowerCheck = (confirm("Do you want to use lowercase letters?"));
    upperCheck = (confirm("Do you want to use uppercase letters?"));
    numberCheck = (confirm("Do you want to use numbers?"));
    symbolCheck = (confirm("Do you want to use special characters?"));
    // Check for at least one character type
    if (lowerCheck === false && upperCheck === false && numberCheck === false && symbolCheck === false) {alert("You cannot make a password with no characters")};
  } while (lowerCheck === false && upperCheck === false && numberCheck === false && symbolCheck === false); 

  if (lowerCheck === true) {
    var initialArray = lowerCase;
  } else var initialArray = "";
  if (upperCheck === true) {
    var secondStep = initialArray.concat(upperCase);
  } else var secondStep = initialArray;
  if (numberCheck === true) {
    var thirdStep = secondStep.concat(number)
  } else var thirdStep = secondStep;
  if (symbolCheck === true) {
    var passwordArray = thirdStep.concat(symbol);
  } else var passwordArray = thirdStep;

  for (var i = 0; i < passwordLength; i++) {
    identifyer = Math.floor(Math.random() * passwordArray.length);
    newPassword += passwordArray[identifyer]
  }
  return newPassword;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
