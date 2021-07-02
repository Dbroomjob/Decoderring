// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (alphabet === undefined || alphabet.length != 26) {  // checking if alphbet exist and is correct length
      return false;
    }  
    
    let code = "";
    let letter = "";
    
    for (let i=0; i<alphabet.length;i++ ) {  // checking if alphabet has repeat characters  
      for (let j=i+1; j<alphabet.length;j++ ) {
        if (alphabet[i] == alphabet[j]) return false;
    }}
      // encode
    if (encode === true){
      for (let k=0;k<input.length;k++) {  // iterating input string
        if(input[k] != " "){  
          let letterNum = input[k].charCodeAt()-97;
          letter = alphabet[letterNum];  //  finding letter if no space  
        }
        else{
          letter =" "; // space condition
        }
        code += letter;  // storing letters to final return
    }}
      // decode
    if (encode === false){  
      for (let k=0; k<input.length;k++) {  // nested loop to find matching character value postion
        if (input[k] != " ") {
          for (let h=0; h<alphabet.length; h++) {
            if (input[k] === alphabet[h]) {
            letter = String.fromCharCode(h+97)
            code += letter;  // storing in final return
        }}}
        else {
          code += " "  // space condition
        }}} 
return code;  // final return
}
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
