const substitutionModule = (function () {
  const normalAlph = "abcdefghijklmnopqrstuvwxyz".split("");
  let cipher = [];
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    const repeatCheck = new Set(alphabet);
    if ([...repeatCheck].length !== 26) return false;
    alphabet.split("");
    if (encode) {
      for (let i = 0; i <= 25; i++) {
        cipher[normalAlph[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i <= 25; i++) {
        cipher[alphabet[i]] = normalAlph[i];
      }
    }
    let result = input
      .toLowerCase()
      .split("")
      .map((char) => {
        if (char === " ") return char;
        return cipher[char];
      });
    return result.join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
