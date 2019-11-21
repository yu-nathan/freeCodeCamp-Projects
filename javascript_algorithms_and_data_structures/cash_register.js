function checkCashRegister(price, cash, cid) {
  let result = { status: null, change: [] };

  // object mapping currency names to their values
  let currencyTable = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.10,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100,
  }
  let change = floatToDecimal(cash - price);

  // total amount of money in the change drawer
  let totalCID = floatToDecimal(cid.reduce((prev, curr) => {
    return prev + curr[1];
  }, 0));

  // if there is exact change, the cash in drawer is retured
  if (totalCID == change) {
    result.status = 'CLOSED';
    result.change = cid;
    return result;
  }

  // if there is not enough change, then nothing is returned
  if (totalCID < change) {
    result.status = 'INSUFFICIENT_FUNDS';
    return result;
  }
  
  let changeCID = [];

  // iterate from the largest currency unit to the smallest
  for (let i = cid.length - 1; i >= 0; i--) {
    let currencyName = cid[i][0];
    let currencyAmount = cid[i][1];
    let currencyValue = currencyTable[currencyName];
    let currencyUnitChange = [currencyName, 0];
    while (currencyAmount > 0 && change >= currencyValue) {
      // subtract currency unit value from change and cash in drawer, then
      // update the amount used for our change array
      change -= currencyValue;
      change = floatToDecimal(change);
      currencyAmount -= currencyValue;
      currencyAmount = floatToDecimal(currencyAmount);
      currencyUnitChange[1] += currencyValue;
      currencyUnitChange[1] = floatToDecimal(currencyUnitChange[1]);
    }
    
    // only push to change array if some of the currency unit is used
    if (currencyUnitChange[1] > 0) {
      changeCID.push(currencyUnitChange);
    }
  }

  // if there is leftover change, then there is not enough change of each
  // currency unit to provide exact change
  if (change != 0) {
    result.status = 'INSUFFICIENT_FUNDS';
    return result;
  } else {
    result.status = 'OPEN';
    result.change = changeCID;
    return result;
  }
}

// function to deal with floating point errors
function floatToDecimal(n) {
  return Number.parseFloat(n.toFixed(2));
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
                              ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
                              ["TEN", 20], ["TWENTY", 60],
                              ["ONE HUNDRED", 100]]);
