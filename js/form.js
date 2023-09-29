const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const formElements = adForm.querySelectorAll('fieldset');
const filterElements = mapFilters.children;

const toggleStatus = (status) => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilters.classList.toggle('ad-form--disabled');

  if (status) {
    formElements.forEach((element) => element.removeAttribute('disabled'));
    Array.from(filterElements).forEach((element) => element.removeAttribute('disabled'));
  } else {
    formElements.forEach((element) => element.setAttribute('disabled', 'disabled'));
    Array.from(filterElements).forEach((element) => element.setAttribute('disabled', 'disabled'));
  }
};


export {toggleStatus};
