// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays

var characterAmount = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // console.log("WOOHOO! You clicked on the big button.");
  var numberCharacters = prompt(
    "Please insert how many caracters you would like"
  );

  var number = parseInt(numberCharacters);

  if (number >= 8 && number <= 128) {
    characterAmount.push(number);
  } else {
    alert(
      "You did not choose the correct criteria. Password length has to be between 8 to 128."
    );
  }

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
  return password;
}
