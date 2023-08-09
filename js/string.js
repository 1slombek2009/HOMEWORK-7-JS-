// String-1


// function printUppercaseLetters(n) {
//   let result = "";
  
//   for (let i = 0; i < n; i++) {
//     result += String.fromCharCode(65 + i);
//   }
  
//   console.log(result);
// }

// printUppercaseLetters(5);




// String-2



// function determineCharacterType(character) {
//   let result;

//   if (!isNaN(character)) {
//     result = "digit";
//   } else if (character.match(/[a-zA-Z]/)) {
//     result = "lotin";
//   } else {
//     result = "nol";
//   }

//   console.log(result);
// }

// determineCharacterType("5"); 
// determineCharacterType("A"); 
// determineCharacterType("#"); 




// String-3



// function getUtf16Code(string) {
//   let firstCharacter = string.charCodeAt(0);
//   let lastCharacter = string.charCodeAt(string.length - 1);
  
//   console.log(firstCharacter, lastCharacter);
// }

// getUtf16Code("Hello"); 




// String-4



// function generateString(n, character) {
//   let result = "";
  
//   for (let i = 0; i < n; i++) {
//     result += character;
//   }
  
//   console.log(result);
// }

// generateString(5, "A"); 




// String-5



// function reverseString(string) {
//   let result = "";
  
//   for (let i = string.length - 1; i >= 0; i--) {
//     result += string[i];
//   }
  
//   console.log(result);
// }

// reverseString("Hello");




// String-6



// function getStringStars(string, N) {
//   let result = "";
  
//   for (let i = 0; i < string.length; i++) {
//     result += string[i] + "*".repeat(N);
//   }
  
//   console.log(result);
// }

// getStringStars("Hello", 2);




// String-7



// function countDigits(string) {
//   let count = 0;
  
//   for (let char of string) {
//     if (!isNaN(char)) {
//       count++;
//     }
//   }
  
//   console.log(count);
// }

// countDigits("Hello123"); 




// String-8



// function countLetters(string) {
//   let count = 0;
  
//   for (let char of string) {
//     if (char.match(/[a-z]/i)) {
//       count++;
//     }
//   }
  
//   console.log(count);
// }

// countLetters("Hello World");



// String-9



// function convertToLowerCase(string) {
//   let result = "";
  
//   for (let char of string) {
//     if (char.match(/[A-Z]/)) {
//       result += char.toLowerCase();
//     } else {
//       result += char;
//     }
//   }
  
//   console.log(result);
// }

// convertToLowerCase("Hello World");




// String-10



// function swapCase(string) {
//   let result = "";
  
//   for (let char of string) {
//     if (char.match(/[A-Z]/)) {
//       result += char.toLowerCase();
//     } else if (char.match(/[a-z]/)) {
//       result += char.toUpperCase();
//     } else {
//       result += char;
//     }
//   }
  
//   console.log(result);
// }

// swapCase("Hello World");




// String-11



// let input = "123";

// if (Number.isInteger(Number(input))) {
//   console.log(1);
// } else if (!isNaN(parseFloat(input))) {
//   console.log(2);
// } else {
//   console.log(0);
// }




// String-12



// function getInverseNumber(n) {
//   return -n;
// }

// let n = 5; 
// let inverseNumber = getInverseNumber(n);
// console.log(inverseNumber);




// String-13



// let input = "7+3-2";

// let result = eval(input);
// console.log(result);




// String-14



// let N1 = 3; 
// let N2 = 4; 
// let S1 = "Hello, world!";
// let S2 = "JavaScript"; 

// let newString = S1.slice(N1) + S2.slice(0, -N2);
// console.log(newString);




// String-15



// let C = "a"; 
// let S = "abcde"; 

// let newString = S.replace(new RegExp(C, "g"), C.repeat(2));
// console.log(newString);




// String-16



// let C = "a"; 
// let S1 = "abcde"; 
// let S2 = "XYZ"; 

// let newString = S1.replace(new RegExp(C, "g"), S2 + C);
// console.log(newString);




// String-17



// let S1 = "abcde";
// let S2 = "cd"; 

// let count = S1.split(S2).length - 1;
// console.log(count);




// String-18



// let S1 = "abcde";
// let S2 = "cd"; 

// let newString = S1.replace(S2, "");
// console.log(newString);