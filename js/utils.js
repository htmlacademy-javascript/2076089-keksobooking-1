const getRandomNumber = (minRange, maxRange, numOfSigns = 0) => {
  const isArgumentNotValid = typeof minRange !== 'number' || typeof maxRange !== 'number' || typeof numOfSigns !== 'number';
  if (isArgumentNotValid) {
    throw new TypeError('Error: Argument type must be a number');
  }

  const min = Math.min(minRange, maxRange);
  const max = Math.max(minRange, maxRange);

  return (Math.random() * (max - min) + min).toFixed(numOfSigns);
};

const getUniqueNumber = (min, max, signs = 0) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(min, max, signs);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error('Error: All numbers have been used');
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max, signs);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getAvatarUrlNumber = getUniqueNumber(1, 10);

const getAvatarUrl = () => {
  const number = getAvatarUrlNumber();
  return `img/avatars/user${number.padStart(2, '0')}.png`;
};

const shuffle = (array) => array.toSorted(() => Math.random() - 0.5);

const getRandomList = (array) => {
  const shuffleList = shuffle(array);
  return shuffleList.slice(0, getRandomNumber(1, shuffleList.length));
};

export {getRandomNumber, getRandomArrayElement, getAvatarUrl, getRandomList};
