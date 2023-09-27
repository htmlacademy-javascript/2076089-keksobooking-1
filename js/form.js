const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const formElements = adForm.querySelectorAll('fieldset');
const filterElements = mapFilters.children;

const deactivateForm = (formItem) => {
  formItem.setAttribute('disabled', 'disabled');
};
const activateForm = (formItem) => {
  formItem.removeAttribute('disabled');
};

const toggleStatus = (callback) => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilters.classList.toggle('ad-form--disabled');

  formElements.forEach((element) => callback(element));
  Array.from(filterElements).forEach((element) => callback(element));
};


export {toggleStatus, deactivateForm, activateForm};
