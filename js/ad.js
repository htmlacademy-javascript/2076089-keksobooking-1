import { getRandomNumber, getAvatarUrl, getFeauturesList, getPhotosUrlList, getLatCoordinates, getLngCoordinates } from './random-functions.js';
import { TITLES, PRICE, HOUSING_TYPES, ROOMS_NUMBER, GUESTS_NUMBER, CHECK_TIME, DESCRIPTIONS } from './data.js';

const createAd = () => ({
  author: {
    avatar: getAvatarUrl(),
  },
  offer: {
    title: TITLES[getRandomNumber(0, TITLES.length - 1)],
    address: `${getLatCoordinates()}, ${getLngCoordinates()}`,
    price: getRandomNumber(PRICE.MIN, PRICE.MAX),
    type: HOUSING_TYPES[getRandomNumber(0, HOUSING_TYPES.length - 1)],
    rooms: getRandomNumber(ROOMS_NUMBER.MIN, ROOMS_NUMBER.MAX),
    guests: getRandomNumber(GUESTS_NUMBER.MIN, GUESTS_NUMBER.MAX),
    checkin: CHECK_TIME[getRandomNumber(0, CHECK_TIME.length - 1)],
    checkout: CHECK_TIME[getRandomNumber(0, CHECK_TIME.length - 1)],
    feautures: getFeauturesList(),
    decription: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)],
    photos: getPhotosUrlList(),
  },
  location: {
    lat: getLatCoordinates(),
    lng: getLngCoordinates()
  }
});


export {createAd};
