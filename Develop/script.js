// Assignment Code
let generateBtn = document.querySelector("#generate");

  // ---------------------------------------------------------------------------------------------------------
      // create a function

      function generatePassword(){
        let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let specialChar = '!@#$%^&*()_-+=?/>.<\|;:~';
        let num = '0123456789'
        let newPasswordType = "";
        let newPassword="";
        

        let passwordLength = prompt("Please enter the length of the password you want")
        if((passwordLength < 8) || (passwordLength > 128) || isNaN(passwordLength)){
          alert("Password length cannot be less than 8 or greater than 128 and it should be a number")
        }else{

        //Ask for criteria needed by the user 
        let wantLowerCase = confirm ("Do you want a lowercase variable added?")
        let wantUpperCase = confirm ("Do you want an uppercase variable added?")
        let wantSpecialChar = confirm ("Do you want a special character added?")
        let wantNum = confirm ("Do you want a number added?")
          
        //If the user wants lowerCase add it to the string
        if(wantLowerCase){
          newPasswordType = newPasswordType + lowerCase;
        }

        //If the user wants lowerCase add it to the string
        if(wantUpperCase){
          newPasswordType = newPasswordType + upperCase;
        }

        //If the user wants lowerCase add it to the string
        if (wantSpecialChar){
          newPasswordType = newPasswordType + specialChar;
        }

        //If the user wants lowerCase add it to the string
        if (wantNum){
           newPasswordType = newPasswordType + num;
        }

        //If nothing was selected just tell the user
        else{
          alert("No type was selected")
        }

        //Loop through using length selected by the user and create random password

        for(let i = 0; i < passwordLength; i++){
            newPassword = newPassword + newPasswordType.charAt(Math.floor(Math.random() * newPasswordType.length))
        }
           
      }
            return(newPassword);
      }

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
