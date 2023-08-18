const isPalindrome = (str) => {
  const lowerString = str.replaceAll(' ', '').toLowerCase();
  return lowerString === lowerString.split('').reverse().join('');
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
