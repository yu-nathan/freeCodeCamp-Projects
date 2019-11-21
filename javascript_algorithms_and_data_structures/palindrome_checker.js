/* JavaScript for Palindrome Checker project */
function palindrome(str) {
  // removes all special characters from the string and changes it to lowerCase
  let cleanedStr = str.replace(/[\W|_]/g, '').toLowerCase();
  let i = 0;
  let j = cleanedStr.length - 1;

  // collapses from both ends to check if string is a palindrome
  while (i < j) {
    if (cleanedStr[i] != cleanedStr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

palindrome("eye");
