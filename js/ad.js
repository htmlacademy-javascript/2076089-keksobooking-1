import { getRandomNumber, getAvatarUrl, getRandomList } from './random-functions.js';
import { TITLES, PRICE, HOUSING_TYPES, ROOMS_NUMBER, GUESTS_NUMBER, CHECK_TIME, FEAUTURES_LIST, DESCRIPTIONS, PHOTOS_URL_LIST, LAT, LNG } from './data.js';

const createAd = () => {
  const location = {
    lat: getRandomNumber(LAT.MIN, LAT.MAX, LAT.SIGNS),
    lng: getRandomNumber(LNG.MIN, LNG.MAX, LNG.SIGNS)
  };

  return {
    author: {
      avatar: getAvatarUrl(),
    },
    offer: {
      title: TITLES[getRandomNumber(0, TITLES.length - 1)],
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(PRICE.MIN, PRICE.MAX),
      type: HOUSING_TYPES[getRandomNumber(0, HOUSING_TYPES.length - 1)],
      rooms: getRandomNumber(ROOMS_NUMBER.MIN, ROOMS_NUMBER.MAX),
      guests: getRandomNumber(GUESTS_NUMBER.MIN, GUESTS_NUMBER.MAX),
      checkin: CHECK_TIME[getRandomNumber(0, CHECK_TIME.length - 1)],
      checkout: CHECK_TIME[getRandomNumber(0, CHECK_TIME.length - 1)],
      feautures: getRandomList(FEAUTURES_LIST),
      decription: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)],
      photos: getRandomList(PHOTOS_URL_LIST),
    },
    location
  };
};


export {createAd};
