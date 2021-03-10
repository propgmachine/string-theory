/******************
 * YOUR CODE HERE *
 ******************/

function onlyVowels(str) {
  let output = '';
  for (const char of str) {
    const lowerCaseChar = char.toLowerCase();
    if (
      lowerCaseChar === 'a' ||
      lowerCaseChar === 'e' ||
      lowerCaseChar === 'o' ||
      lowerCaseChar === 'u' ||
      lowerCaseChar === 'i' 
    ) {
      output += char;
    }
  }
  return output;
}

function crazyCase(str) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (i % 2 === 0) {
      output += char.toLowerCase();
    }
  
    else {
      output += char.toUpperCase();  
    }
  }
  return output;
}

function titleCase(str) {
  let output = '';
  let shouldCapitalizeNextLetter = true;
  for (const char of str) {

    
    
    if (shouldCapitalizedNextLetter) {
      output += char.toUpperCase();
    } 


    else {
      output += char.toLowerCase();
    }

    if(char === ' ') {
      shouldCapitalizeNextLetter = true;
    } else {
      shouldCapitalizeNextLetter = false;
    }


  }

  return output;
}

function camelCase(str) {
  let output = '';
  let shouldCapitalizeNextLetter = false;
  for (const char of str) {



    if (char !== ' ') {
      
      if (shouldCapitalizeNextLetter) {
      output += char.toUpperCase();
    } else {
      output += char.toLowerCase();
    }
  }
  
  //
  //
  //
    if (char === ' ') {
      shouldCapitalizeNextLetter = true;
    } else {
      shouldCapitalizeNextLetter = false; 
    }
  }

  return output;
}

function crazyCase2ReturnOfCrazyCase(str) {
  let output = '';
  let shouldCapitalizeNextLetter = false;
  for (const char of str) {

  
    if (shouldCapitalizeNextLetter) {
      output += char.toUpperCase();
    } else {
      output += char.toLowerCase(); 
    }


    if (char !== ' ') {
      shouldCapitalizeNextLetter = !shouldCapitalizeNextLetter;
    }
  }
  return output;
} 
/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}