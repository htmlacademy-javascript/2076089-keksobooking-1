const isPalindrome = (str) => {
  const reverseString = str.replaceAll(' ', '').split('').reverse().join('');
  return str.toLowerCase() === reverseString.toLowerCase();
};

const getIntNumber = (str) => {
  let arr;
  if (typeof str === 'number') {
    arr = String(str).split('');
  } else {
    arr = str.split('');
  }
  let arrOfNum = [];
  for (let i of arr) {
    if (isNaN(+i) === false && i !== ' ') {
      arrOfNum.push(i);
    }
  }
  return arrOfNum.length > 0 ? parseInt(arrOfNum.join(''), 10) : NaN;
};

const padStart = (originalString, minLength, padString) => {
  const actualPad = minLength - originalString.length;

  if (actualPad <= 0) {
    return originalString;
  }

  return padString.slice(0, actualPad % padString.length) + padString.repeat(actualPad / padString.length) + originalString;
};

const isRightLength = (string, rightLength) => string.length <= rightLength;

const getRandomNumberFromRange = (minRange, maxRange, numOfSigns) => {
  if (typeof minRange !== 'number' || typeof maxRange !== 'number' || typeof numOfSigns !== 'number') {
    return NaN;
  }

  let min, max;
  if (minRange > maxRange) {
    min = Math.ceil(maxRange);
    max = Math.floor(minRange);
  } else {
    min = Math.ceil(minRange);
    max = Math.floor(maxRange);
  }

  return (Math.random() * (max - min) + min).toFixed(numOfSigns);
};
