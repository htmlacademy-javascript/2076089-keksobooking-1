import { getRandomNumber, getAvatarUrl, getRandomList } from './random-functions.js';
import { TITLES, PriceRange, HOUSING_TYPES, RoomsNumberRange, GuestsNumberRange, CHECK_TIME, FEAUTURES_LIST, DESCRIPTIONS, PHOTOS_URL_LIST, LatRange, LngRange } from './data.js';

const createAd = () => {
  const location = {
    lat: getRandomNumber(LatRange.MIN, LatRange.MAX, LatRange.SIGNS),
    lng: getRandomNumber(LngRange.MIN, LngRange.MAX, LngRange.SIGNS)
  };

  return {
    author: {
      avatar: getAvatarUrl(),
    },
    offer: {
      title: TITLES[getRandomNumber(0, TITLES.length - 1)],
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(PriceRange.MIN, PriceRange.MAX),
      type: HOUSING_TYPES[getRandomNumber(0, HOUSING_TYPES.length - 1)],
      rooms: getRandomNumber(RoomsNumberRange.MIN, RoomsNumberRange.MAX),
      guests: getRandomNumber(GuestsNumberRange.MIN, GuestsNumberRange.MAX),
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
