// set up four dirrent arrays for: 

// Speical characters
var speacialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '/',];
// numerical
var numericalChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// lowerCase (look up .split())
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
// upperCase (look up .split())
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var outputArray = [];

// Create a function that prompts the user for the password options
function getUserOptions() {
  var userInput = prompt("Please enter how long you would like the password to be.")

  // create a variable to store the length of password from the user input (look up parseInt())

  var passLength = parseInt(userInput);

  // create a conditional statement to check if the length is an actual number
  if (isNaN(passLength)) {
    alert("Please enter a number value")
    return getUserOptions();
  }
  // create a conditional to check if password length is at least 8 char long
  if (passLength < 8) {
    alert("The password must be 8 digits or more.")
    return getUserOptions();
  }

  // create a conditional to check if password length is lower than 128 chars
  if (passLength > 128) {
    alert("The password must be 128 digits or less.")
    return getUserOptions();
  }

  // create 4 different conditional statement to store if user password is going to use special chars, numbers, lower and upper
  if (confirm("Would you like to use Special Characters?")) {
    outputArray = outputArray.concat(speacialChars);
  }

  if (confirm("Would you like to use Numbers?")) {
    outputArray = outputArray.concat(numericalChars);
  }

  if (confirm("Would you like to use Lowercase letters?")) {
    outputArray = outputArray.concat(lowerCase);
  }

  if (confirm("Would you like to use Uppercase letters?")) {
    outputArray = outputArray.concat(upperCase);
  }
  // create a conditional statement to check if the user used some type of character
  if (outputArray.length === 0) {
    alert("Please choose at least one Character Choice");
    return getUserOptions();
  }

  // create an object to store the user input
  var passOptions = {
    passLength,
    outputArray
  };

  //return our passOptions
  return passOptions;
}


//Function for getting a random element for an array
//check out math.random
function randomGen() {
  var random = Math.floor(Math.random() * outputArray.length)
  return random;
}

//function to generate password with our user input
function generatePassword() {
  // create a variable and call our function so we can use data from previous function
  var userOptions = getUserOptions();
  console.log(userOptions);
  //create a variable to store password
  var results = []

  // create a for loop to pluck out random options object and grabing random characters from the array of possible characters and concat them into the results variable
  for (var i = 0; i < userOptions.passLength; i++) {
    var digit = userOptions.outputArray[randomGen()];
    results.push(digit);
  }

  // take the result look up join() 
  return results.join("");
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
