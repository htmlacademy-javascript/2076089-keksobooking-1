
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

const AVATAR_URL_NUMBER = getUniqueNumber(1, 10);

const getAvatarUrl = () => {
  const number = AVATAR_URL_NUMBER();

  if (number < 10) {
    return `img/avatars/user0${number}.png`;
  }
  return `img/avatars/user${number}.png`;
};

const shuffle = (array) => array.toSorted(() => Math.random() - 0.5);

const getRandomList = (array) => {
  const shuffleList = shuffle(array);
  return shuffleList.slice(0, getRandomNumber(1, shuffleList.length));
};

export {getRandomNumber, getAvatarUrl, getRandomList};