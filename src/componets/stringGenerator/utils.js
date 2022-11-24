export function getRandomChar(min, max) {
    const limit = max - min + 1;
   let result = String.fromCharCode(Math.floor(Math.random() * limit) + min);
   return result
    console.log(result)
  }
  
  export function getSpecialChar() {
    const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
    return specialChar[Math.floor(Math.random() * specialChar.length)];
  }
  
 