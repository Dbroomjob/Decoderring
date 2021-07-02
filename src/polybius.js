// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
  const theCode = [             // polybius square
    ["a","b","c","d","e"],
    ["f","g","h","(i/j)","k"],
    ["l","m","n","o","p"],  
    ["q","r","s","t","u"],
    ["v","w","x","y","z"]
   ]
  
  let letter = "";   //  letter that is decoded
 
  let code = "";   // the final return
  
  if (encode === true) {  // condition for encoding
   let row = 0;
   let col = 0;
   for (let i=0; i<input.length; i++){  // looping through input
    
    row = (Math.floor((input[i].charCodeAt()-97)/5))+1  // number for row
    col = ((input[i].charCodeAt()-97)%5)+1  // number for column
    
    if (input[i] == " ") {  // condition for spaces
      row = " "
      col = ""
    }
    
    else if (input.charAt(i) >= 'j') {  // condition for letters greater then i
      if (col == 1) {
        col = 6;
        row = row - 1;
       }  
      col = col - 1;    
    }
    
    code += `${col}${row}`  // adding numbers to final return 
    }
  }
  else if(encode === false) {  // condition for decoding
    const even = input.replace(' ',"")
    if (even.length % 2 != 0){    // remove spaces and check for even amount of charters
      return false;} 
  
      for (let i=0; i < input.length; i++) {  // loops through encoded input
  
        if(input.charAt(i) != " "){  // for sets of two numbers
          let col = parseInt(input.charAt(i))
          let row = parseInt(input.charAt(i+1))  
          letter = theCode[row-1][col-1];  // using the square
          i=i+1
         }
  
        else{  
          letter = " ";  // keeping the spaces input  
         }   
        code += `${letter}`  // adding each letter to final return
      }}
  
return code;  // final return
  
} 
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
