const isPalindrome = (str) => {
  const reverseString = str.replaceAll(' ', '').split('').reverse().join('');
  return str.replaceAll(' ', '').toLowerCase() === reverseString.toLowerCase();
};

const getIntNumber = (str) => {
  const arr = String(str)
    .replaceAll(' ', '')
    .split('')
    .filter((i) => Number.isInteger(+i));
  return arr.length > 0 ? parseInt(arr.join(''), 10) : NaN;
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
  const isArgumentNotValid = typeof minRange !== 'number' || typeof maxRange !== 'number' || typeof numOfSigns !== 'number';
  if (isArgumentNotValid) {
    return NaN;
  }

  const min = Math.min(minRange, maxRange);
  const max = Math.max(minRange, maxRange);

  return (Math.random() * (max - min) + min).toFixed(numOfSigns);
};
