'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', 'e6e848'];
var NUMBER_OF_WISARDS = 4;
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function getRandom(randomArr) {
  return randomArr[Math.floor(Math.random() * randomArr.length)];
}

var renderWizard = function () {
  var wizardNames = getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES);
  var wizardCoatColor = getRandom(WIZARD_COAT_COLORS);
  var wizardEyesColor = getRandom(WIZARD_EYES_COLORS);
  return {name: wizardNames, coatColor: wizardCoatColor, eyesColor: wizardEyesColor};
};

var renderWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var numberOfWizards = function (number) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    wizards.push(renderWizard());
  }
  return wizards;
};

var createDom = function (wizards) {
  wizards = numberOfWizards(NUMBER_OF_WISARDS);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizardElement(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
createDom();

document.querySelector('.setup-similar').classList.remove('hidden');

// 4-1 открытие/закрытие окна
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var changeCoatColors = document.querySelector('.wizard-coat');
var changeEyesColors = document.querySelector('.wizard-eyes');
var changeFireballColors = document.querySelector('.setup-fireball-wrap');

var changeCoatColorsInput = setup.querySelector('input[name="coat-color"]');
var changeEyesColorsInput = setup.querySelector('input[name="eyes-color"]');
var changeFireballColorsInput = setup.querySelector('input[name="fireball-color"]');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  if (userNameInput === document.activeElement) {
    setup.classList.remove('hidden');
  } else {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// Валидация ввода имени
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// изменение цвета плаща
changeCoatColors.addEventListener('click', function () {
  changeCoatColors.style.fill = changeCoatColorsInput.value = getRandom(WIZARD_COAT_COLORS);
});

// глаз
changeEyesColors.addEventListener('click', function () {
  changeEyesColors.style.fill = changeEyesColorsInput.value = getRandom(WIZARD_EYES_COLORS);
});

// фаербола
changeFireballColors.addEventListener('click', function () {
  changeFireballColors.style.backgroundColor = changeFireballColorsInput.value = getRandom(FIREBALL_COLORS);
});

