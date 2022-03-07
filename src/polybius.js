// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alph = [
    [],
    ["", "A", "B", "C", "D", "E"],
    ["", "F", "G", "H", "(I/J)", "K"],
    ["", "L", "M", "N", "O", "P"],
    ["", "Q", "R", "S", "T", "U"],
    ["", "V", "W", "X", "Y", "Z"],
  ];
  function encoder(input) {
    if (input === " ") return input;
    formatInput = input.toUpperCase();
    for (let row in alph) {
      for (let col in alph[row]) {
        if (alph[row][col].includes(formatInput)) {
          return col + row;
        }
      }
    }
  }

  function decoder(input) {
    let result = [];
    let inputMap = input.split("");
    let spaceIndex = 0;
    for (let char in inputMap) {
      if (inputMap[char] == " ") {
        spaceIndex = char;
        break;
      }
    }
    let alphMap = inputMap.filter((char) => char != " ");
    let charCount = alphMap.length / 2;
    console.log(alphMap);
    if (!(alphMap.length % 2)) {
      for (let i = 0; i < charCount; i++) {
        let index = alphMap.splice(0, 2);
        result.push(alph[parseInt(index[1])][parseInt(index[0])]);
      }
      if (input.includes(" ")) {
        result.splice(spaceIndex / 2, 0, " ");
      }
      return result.join("").toLowerCase();
    }
    return false;
  }

  function polybius(input, encode = true) {
    if (!encode) return decoder(input);
    let encodedInput = [];
    for (let char in input) encodedInput.push(encoder(input[char]));
    return encodedInput.join("");
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
