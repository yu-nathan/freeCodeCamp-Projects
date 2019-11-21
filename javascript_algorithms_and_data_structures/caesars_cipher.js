/* JavaScript for Roman Numeral Converter project */
function rot13(str) { // VAFNAR TNZRE
  // string builder array
  let result = [];
  str = str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    // zero the unicode for capital letters of the alphabet such that A = 0
    let currCharCode = str.charCodeAt(i) - 65;
    if (0 <= currCharCode && currCharCode <= 25) {
      // shift by 13 for the code, and use modulo 26 to circle back to A
      result.push(String.fromCharCode((currCharCode + 13) % 26 + 65));
    } else {
      result.push(str.charAt(i));
    }
  }
  return result.join('');
}

rot13("SERR PBQR PNZC");
