/* JavaScript for Telephone Number Validator project */
function telephoneCheck(str) {
  let re = /^1?\s*(\(\s*\d{3}\s*\)|\s*\d{3}\s*)-?\s*\d{3}\s*-?\d{4}$/;
  return re.test(str);
}

telephoneCheck("555-555-5555");