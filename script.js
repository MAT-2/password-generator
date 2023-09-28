// Assignment Code
var generateBtn = document.querySelector("#generate");

//A seleciton of variable containing each option the user can choose from.
var lowerCase = "abcdefghijklmnopqrstuvwxwyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()<>?";
var poolOfChoices = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//This function below will include all the work needed to get the password generator functioning.
function generatePassword() {
  var numberCharacters = prompt(
    "Please insert how many caracters you would like"
  );

  var number = parseInt(numberCharacters);

  if (number >= 8 && number <= 128) {
    confirm(
      "Excellent! We will now ask what you would like your password consist of."
    );
  } else {
    alert(
      "You did not choose the correct criteria. Password length has to be between 8 to 128."
    );
  }

  //We need to create confirm methods to ask what options the user wants to choose.
  var lowerCaseChoice = confirm("Would you like to have lower case letters?");
  if (lowerCaseChoice === true) {
    poolOfChoices += lowerCase;
  }
  var upperCaseChoice = confirm("Would you like to include upper case leters?");
  if (upperCaseChoice === true) {
    poolOfChoices += upperCase;
  }
  var numberChoice = confirm("Would you like to have numbers involved?");
  if (numberChoice === true) {
    poolOfChoices += numbers;
  }
  var specialChoice = confirm("Will there be any special characters included?");
  if (specialChoice === true) {
    poolOfChoices += specialCharacters;
  }

  console.log("available: ", poolOfChoices);

  //all code here
  //var numChar = window.prompt
  // console.log(numChar);
  //var includeNums = window.confirm true/false

  //Need array for each character type.
  // var numArray = ["0", "1"];

  // if statement
  // var options = [];
  // if true push/concat array into a new array var.

  //for loop through options array depending on required characters
  //random index value for every loop.
  //Google this: How to randomly choose a value from an array;
  //var chosenArray = [];
  //Turn array into a string called password
  // return password;
}
