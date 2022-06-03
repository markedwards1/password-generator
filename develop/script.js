// Assignment Code
// Password variables
// USE PROMPT TO ASK THE USER FOR THE PASSWORD CRITERIA IMPUT

 var askNumber;
 var askCharacter;
 var askUpper;
 var askLower;
//password array variables
character = ['!', '@', '#', '$', '%', '&','(', ')', '*', '+', ',', '/'];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","T","V","W","X","Y","Z"];


var generateBtn = document.querySelector("#generate");
    console.log(" first button clicked") 

//start of function
    function generatePassword() {  
//my code goes here. 

var passwordLength = prompt("Select a password lenght between 8 and 128 numbers")
  
//verify number is between 8 and 128
console.log(passwordLength);
  console.log(typeof passwordLength);

var x = passwordLength;
  const lengthVerifyMax = (Number (x) < 129);
  const lengthVerifyMin = (Number(x) >= 8);

  
 var UserImput = (lengthVerifyMin && lengthVerifyMax); 
 if (!UserImput){
   alert("you have not selected a number between 8 and 128")
 
  
  console.log(lengthVerifyMax);
  console.log(lengthVerifyMin);

 }else if (lengthVerifyMin && lengthVerifyMax){
    console.log ("pass");
    
//confirming questions
 askNumber = confirm("Do you want to use NUMBERS ?");
 askCharacter = confirm("Do you want to use SPECIAL CHARACTERS");
 askUpper = confirm("do you want to use UPPERCASE letters?")
 askLower = confirm("do you wnat to use lowercase letters?")
};


//if criteria is not met give a alert
if (!number && !character && !askUpper && !askLower) {
  criteria = alert ("you must choose at least one option")
}
//check chosen options when user imput vaidated
//all options
else if (askNumber && askCharacter && askUpper && askLower){

  criteria = number.concat(character, upper, lower);

}
//3 options number, character, upper
else if (askNumber && askCharacter && askUpper && !askLower){
  criteria = number.concat(character, upper);

}
//3 options number character lower
else if (askNumber && askCharacter && !askUpper && askLower){
  criteria = number.concat(character, lower);

}
else if (askNumber && !askCharacter && askUpper && askLower){
  criteria = number.concat(upper, lower);

}

else if (!askNumber && askCharacter && askUpper && askLower){
  criteria = upper.concat(character, lower);

}
//2 options selected

else if (askNumber && askCharacter){
  criteria = number.concat(character);
}
else if (askNumber && askUpper){
  criteria = number.concat(upper);
    }
else if (askNumber && askLower){
  criteria = number.concat(lower);
  }
else if (askCharacter && askUpper){
  criteria = character.concat(upper);
}
else if (askCharacter && askLower){
  criteria = character.concat(lower);
}
else if (askCharacter && askNumber){
  criteria = character.concat(number);
}
else if (askLower && askUpper){
  criteria = lower.concat(upper);
}
  //single option

  else if (askNumber){
  criteria = number;
  }
  else if (askCharacter){
  criteria = character;
  }
  else if (askUpper){
  criteria = askUpper;
  }
  else if (askLower){
  criteria = lower;
  }  
//password variable is an array.
var password = [];

var newpassword = [];

//random selection
for (var i = 0; i < passwordLength; i++) {
  var randomChoice = criteria [Math.floor(Math.random() * criteria.length)];
  password.push(randomChoice);

}
//this turns the password into a string and removes the commas
var password = password.join("");  

return password //this is where the new password is returned
};

//this is where the password is pushed into the HTML
function writePassword() {  
  let password = generatePassword(); //this is the function that is called to generates the pasword
  var passwordText = document.querySelector("#password"); //this is the code that displays text for the password in the id #password. It takes the data from generatePassword and stores the value into #password

  passwordText.value = password; //this is where the value is put onto the page


}



generateBtn.addEventListener("click", writePassword);


