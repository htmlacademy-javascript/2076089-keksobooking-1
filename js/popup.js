import { HouseTypeTranslation } from './data.js';

const cardTemplate = document.querySelector('#card').content;

const renderOfferFeatures = (offerList, templateClone) => {
  const offerFeatures = templateClone.querySelector('.popup__features');
  offerFeatures.innerHTML = '';
  offerList.features.forEach((element) => {
    const item = document.createElement('li');
    item.className = `popup__feature popup__feature--${element}`;
    item.textContent = element;
    offerFeatures.appendChild(item);
  });
};

const renderOfferPhotos = (offerList, templateClone) => {
  const offerPhotos = templateClone.querySelector('.popup__photos');
  offerPhotos.innerHTML = '';
  offerList.photos.forEach((element) => {
    const photo = document.createElement('img');
    photo.src = element;
    photo.className = 'popup__photo';
    photo.width = '45';
    photo.height = '40';
    photo.alt = 'Фотография жилья';
    offerPhotos.appendChild(photo);
  });
};

const createPopupElement = ({author, offer}) => {
  const offerCard = cardTemplate.cloneNode(true);

  offerCard.querySelector('.popup__title').textContent = offer.title;
  offerCard.querySelector('.popup__text--address').textContent = offer.address;
  offerCard.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  offerCard.querySelector('.popup__type').textContent = HouseTypeTranslation[offer.type];
  offerCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат для ${offer.guests} гостей`;
  offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  offerCard.querySelector('.popup__description').textContent = offer.description;
  offerCard.querySelector('.popup__avatar').src = author.avatar;
  renderOfferFeatures(offer, offerCard);
  renderOfferPhotos(offer, offerCard);

  return offerCard;
};


export {createPopupElement};
