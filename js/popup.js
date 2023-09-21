import { HOUSE_TYPE_TRANLATION, nounDeclension } from './data.js';
import { getNoun } from './utils.js';

const cardTemplate = document.querySelector('#card').content;

const renderOfferFeatures = (features, templateClone) => {
  const offerFeatures = templateClone.querySelector('.popup__features');
  offerFeatures.innerHTML = '';
  if (features) {
    features.forEach((feature) => {
      const item = document.createElement('li');
      item.className = `popup__feature popup__feature--${feature}`;
      item.textContent = feature;
      offerFeatures.appendChild(item);
    });
  }
};

const renderOfferPhotos = (photos, templateClone) => {
  const offerPhotos = templateClone.querySelector('.popup__photos');
  offerPhotos.innerHTML = '';
  if (photos) {
    photos.forEach((photo) => {
      const item = cardTemplate.querySelector('.popup__photo').cloneNode();
      item.src = photo;
      offerPhotos.appendChild(item);
    });
  }
};

const createPopupContent = (selector, content, template, type = 'textElement') => {
  const element = template.querySelector(selector);

  if (content) {
    if (type === 'image') {
      element.src = content;
    }
    if (type === 'houseType') {
      element.textContent = HOUSE_TYPE_TRANLATION[type];
    }
    element.textContent = content;
  } else {
    element.remove();
  }
};

const createPopupElement = ({author: {avatar}, offer: {title, address, price, type, rooms, guests, checkin, checkout, description, features, photos}}) => {
  const offerCard = cardTemplate.cloneNode(true);

  const capacity = {
    roomNumber: rooms,
    guestNumber: guests,

    getText () {
      return `${this.roomNumber} ${getNoun(this.roomNumber, ...nounDeclension[0])} для ${this.guestNumber} ${getNoun(this.guestNumber, ...nounDeclension[1])}`;
    }
  };

  createPopupContent('.popup__title', title, offerCard);
  createPopupContent('.popup__text--address', address, offerCard);
  createPopupContent('.popup__text--price', `${price} ₽/ночь`, offerCard);
  createPopupContent('.popup__type', HOUSE_TYPE_TRANLATION[type], offerCard);
  createPopupContent('.popup__text--capacity', capacity.getText(), offerCard);
  createPopupContent('.popup__text--time', `Заезд после ${checkin}, выезд до ${checkout}`, offerCard);
  createPopupContent('.popup__description', description, offerCard);
  createPopupContent('.popup__type', type, offerCard, 'houseType');
  createPopupContent('.popup__avatar', avatar, offerCard, 'image');

  renderOfferFeatures(features, offerCard);
  renderOfferPhotos(photos, offerCard);

  return offerCard;
};


export {createPopupElement};
