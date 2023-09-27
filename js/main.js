import { createAd } from './ad.js';
import { ADS_NUMBER } from './data.js';
import { createPopupElement } from './popup.js';
import { toggleStatus, deactivateForm } from './form.js';

const mapBlock = document.querySelector('#map-canvas');

const createPopups = (arrayList) => {
  const photoListFragment = document.createDocumentFragment();
  arrayList.forEach((item) => {
    const popup = createPopupElement(item);
    photoListFragment.appendChild(popup);
  });
  mapBlock.appendChild(photoListFragment);
};

const ads = Array.from({length: ADS_NUMBER}, createAd);
createPopups(ads);
toggleStatus(deactivateForm);
