import { FEAUTURES_LIST, PHOTOS_URL_LIST, LAT, LNG } from './data.js';

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

const getFeauturesList = () => {
  const min = getRandomNumber(0, FEAUTURES_LIST.length - 1);
  const max = getRandomNumber(1, FEAUTURES_LIST.length);
  // while (max < min) {
  //   max += 1;
  // }
  return FEAUTURES_LIST.slice(min, max);
};

const getPhotosUrlList = () => {
  const min = getRandomNumber(0, PHOTOS_URL_LIST.length - 1);
  const max = getRandomNumber(1, PHOTOS_URL_LIST.length);
  // while (max < min) {
  //   max += 1;
  // }
  return PHOTOS_URL_LIST.slice(min, max);
};

const getLatCoordinates = () => getRandomNumber(LAT.MIN, LAT.MAX, LAT.SIGNS);
const getLngCoordinates = () => getRandomNumber(LNG.MIN, LNG.MAX, LNG.SIGNS);

export {getRandomNumber, getAvatarUrl, getFeauturesList, getPhotosUrlList, getLatCoordinates, getLngCoordinates};
