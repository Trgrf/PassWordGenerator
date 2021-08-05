// set up four dirrent arrays for: 

// Speical characters
var speacialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '/',];
// numerical
var numericalChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// lowerCase (look up .split())
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('o');
// upperCase (look up .split())
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('o');

// Create a function that prompts the user for the password options
function getUserOptions() {
var userInput = prompt("Please enter how long you would like the password to be.")

// create a variable to store the length of password from the user input (look up parseInt())

var passLength = parseInt(userInput);

// create a conditional statement to check if the length is an actual number
if (typeof passLength != 'number') {
  alert("Please enter a number value")
  return;
}
// create a conditional to check if password length is at least 8 char long
if (passLength < 8) {
  alert("The password must be 8 digits or more.")
  return;
}

// create a conditional to check if password length is lower than 128 chars
if (passLength > 128) {
  alert("The password must be 128 digits or less.")
  return;
}

// create 4 different conditional statement to store if user password is going to use special chars, numbers, lower and upper
if (confirm("Would you like to use Special Characters?")) {
  passSpec = speacialChars
}

if (confirm("Would you like to use Numbers?")) {
  passNum = numericalChars
}

if (confirm("Would you like to use Lowercase letters?")) {
  passLower = lowerCase
}

if (confirm("Would you like to use Uppercase letters?")) {
  passUpper = upperCase
}
// create a conditional statement to check if the user used some type of character
if( !(speacialChars == true || numericalChars == true || lowerCase == true || upperCase == true)) {
  alert("Plese choose at least one Character Choice");
  return;
}

// Create a variable to store the user input
var usersData = userInput

// create an object to store the user input
 var passOptions = {
   passLength: passLength,
   speacialChars:  passSpec,
   numericalChars: passNum,
   lowerCase: passLower,
   upperCase: passUpper,
 };

 //return our passOptions
  passOptions
  return;
}


//Function for getting a random element for an array
//check out math.random
function randomGen() {
var random = Math.floor(Math.random() * speacialChars.length)

}


//function to generate password with our user input
function generatePassword(){
  // create a variable and call our function so we can use data from previous function
var userOptionss = getUserOptions();

//create a variable to store password
var results = []
// array to store the types of characters to include in our password
var userPosChars = []
//array to contain at least one of each chosen type of characters to make sure at least one of every character is being used (validation)
var guarChar = []
// create conditional statements that add the array of characters into an array of possible characters based on our users input
// need to push our new random characters to the guarenteed characters (look up .concat())

// if (userOptions.specialCharacters){
    // take chars and concat
    // take characters and push(randomizationfunction(specialCharacter)) (After We Randomize)
}

// create conditional statements that add the array of characters into an array of possible characters based on our users input
// need to push our new random characters to the guarenteed characters (look up .concat())

// create conditional statements that add the array of characters into an array of possible characters based on our users input
// need to push our new random characters to the guarenteed characters (look up .concat())


// create conditional statements that add the array of characters into an array of possible characters based on our users input
// need to push our new random characters to the guarenteed characters (look up .concat())


// create a for loop to pluck out random options object and grabing random characters from the array of possible characters and concat them into the results variable


// create another for loop to guarantee at least one character from each possible characters in the results

// take the result look up join() 




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
