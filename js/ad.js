import { getRandomNumber, getRandomArrayElement, getAvatarUrl, getRandomList } from './util-functions.js';
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
      title: getRandomArrayElement(TITLES),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(PriceRange.MIN, PriceRange.MAX),
      type: getRandomArrayElement(HOUSING_TYPES),
      rooms: getRandomNumber(RoomsNumberRange.MIN, RoomsNumberRange.MAX),
      guests: getRandomNumber(GuestsNumberRange.MIN, GuestsNumberRange.MAX),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: getRandomList(FEAUTURES_LIST),
      decription: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomList(PHOTOS_URL_LIST),
    },
    location
  };
};

export {createAd};
