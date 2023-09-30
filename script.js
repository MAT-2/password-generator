// Assignment Code
var generateBtn = document.querySelector("#generate");

//A seleciton of variable containing each option the user can choose from.
// var lowerCase = "abcdefghijklmnopqrstuvwxwyz";
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numbers = "0123456789";
// var specialCharacters = "!@#$%^&*()<>?";
// var poolOfChoices = "";

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "w",
  "y",
  "z",
];
var upperCase = lowerCase.map((Element) => {
  return Element.toUpperCase();
});
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "<",
  ">",
  "?",
];
var poolOfChoices = [];
var password = "";

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

  //We need a loop to helps us create a random choice of characters specifed from the users' decision of what kind of parameters the password should have at random given the amount of characters they request.
  //We need to access the array from poolOfChoices that stores all the details, and in brackets (since it is an array), use Math.floor and Math.random() when creating to randomly choose from the poolOfChoices array that contains the specified characters the user wants, and the length the user chose.

  //Math.floor() is a method that only takes the integer part of the calculation. No floats.
  //Math.random() is a method that returns a float between 0 and 1.
  for (var i = 0; i < numberCharacters; i++) {
    var random =
      poolOfChoices[Math.floor(Math.random() * poolOfChoices.length)];
    console.log("random:", random);
    password = password + random;
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
