/* JavaScript for Roman Numeral Converter project */
function convertToRoman(num) {
  if (typeof num != 'number') {
     return undefined;
  }
  // array mapping different numerals to their Roman symbols
  let romanTable = [
    {
        'one': 'I',
        'five': 'V',
        'ten': 'X',
    },
    {
        'one': 'X',
        'five': 'L',
        'ten': 'C',
    },
    {
        'one': 'C',
        'five': 'D',
        'ten': 'M',
    },
    {
        'one': 'M',
    }
  ];
  // split the number string into digits, and then reverse to haves ones place
  // first
  let digitArray = num.toString().split('').reverse();
  //
  return digitArray
     .reduce((prev, curr, pos) => {
         return (romanNumeralFormula(curr, romanTable[pos]).concat(prev));
     }, '');
}
 
// convert numeral to its Roman numeral form
function romanNumeralFormula(digit, tableEntry) {
    let result = '';
    switch (digit) {
        case '1':
        case '2':
        case '3':
            result = tableEntry['one'].repeat(parseInt(digit));
            break;
        case '4':
            result = tableEntry['one'].concat(tableEntry['five']);
            break;
        case '5':
            result = tableEntry['five'];
            break;
        case '6':
        case '7':
        case '8':
            result = tableEntry['five'].concat(tableEntry['one']
                        .repeat(parseInt(digit) - 5));
            break;
        case '9':
            result = tableEntry['one'].concat(tableEntry['ten']);
            break;
    }
    return result;
}
 
convertToRoman(36);
