// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function shiftChar(input, shift) {
    let result = "";
    const letter = input.toLowerCase();
    if (/[a-zA-Z]/.test(letter)) {
      let alphaChar = alphabet.findIndex((character) => character === letter);
      let tempChar = alphaChar + shift;
      switch (true) {
        case tempChar < 0:
          tempChar += 26;
          break;
        case tempChar > 25:
          tempChar -= 26;
          break;
      }
      result = alphabet[tempChar];
    } else {
      result = letter;
    }
    return result;
  }
  function caesar(input, shift, encode = true) {
    if (!encode) {
      shift *= -1;
    }
    if (!shift || shift > 25 || shift < -25) {
      return false;
    } else {
      let encoded = [];
      for (let char in input) encoded.push(shiftChar(input[char], shift));
      return encoded.join("");
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
