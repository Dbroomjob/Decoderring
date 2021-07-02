// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
   (encode === false) ? shift = (-1)*shift : shift=shift;  // checking if encoded
    if( shift != 0 && shift <= 25 && shift >= -25){   // seeing if the shift value < 25 or > -25 
      let str = input.toLowerCase();  //  defining variables
      let charVal = 0;  
      let code ="";
      let highCharVal = 0;
      if (shift < 0) {shift = shift + 26}  // condition for negitive shift
      
        for(let i = 0; i < str.length; i++) {  // loop to iterate string
          if(str[i] != " " && str[i] != ".") {  // condition for letters only
          
            if ((str[i].charCodeAt()-96 + shift) <= 26) {  // condition for character values not at end of string 
              charVal = (str[i].charCodeAt()) + shift;
              code += String.fromCharCode(charVal);
             }
 
          else {
            charVal = (str[i].charCodeAt()) + shift - 26;  // character values at end of string
            
            code += String.fromCharCode(charVal);      
           }}  
        
          else {charVal = (str[i].charCodeAt());  //  characters that are not letters are unchanged
            code += String.fromCharCode(charVal);
          }}
          
          return code;  //  final return value
    }           
    return false;  //  happens if shift is out of bounds
  
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
