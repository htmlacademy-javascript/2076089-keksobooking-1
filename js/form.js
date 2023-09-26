const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const formElements = adForm.querySelectorAll('fieldset');
const filterElements = mapFilters.children;


const initForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');

  for (let element of formElements) {
    element.setAttribute('disabled', 'disabled');
  }

  for (let element of filterElements) {
    element.setAttribute('disabled', 'disabled');
  }
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');

  for (let element of formElements) {
    element.removeAttribute('disabled');
  }

  for (let element of filterElements) {
    element.removeAttribute('disabled');
  }
};

export {initForm};
