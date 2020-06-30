'use strict';

/* var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green']; */
var NUMBER_OF_WISARDS = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

/* var renderWizard = function () {
  var wizardNames = window.util.isRandom(WIZARD_NAMES) + ' ' + window.util.isRandom(WIZARD_SURNAMES);
  var wizardCoatColor = window.util.isRandom(WIZARD_COAT_COLORS);
  var wizardEyesColor = window.util.isRandom(WIZARD_EYES_COLORS);
  return {name: wizardNames, coatColor: wizardCoatColor, eyesColor: wizardEyesColor};
}; */

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

/* var numberOfWizards = function (number) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    wizards.push(renderWizard());
  }
  return wizards;
}; */

/* var createDom = function (wizards) {
  wizards = numberOfWizards(NUMBER_OF_WISARDS);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizardElement(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
createDom();
document.querySelector('.setup-similar').classList.remove('hidden'); */

var successHandler = function (wizards) {
  var fragment = document.createDocumentFragment();
  var shuffledWizards = window.util.shuffleArray(wizards);

  for (var i = 0; i < NUMBER_OF_WISARDS; i++) {
    fragment.appendChild(renderWizard(shuffledWizards[i]));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

var errorHandler = function (errorMessage) {
  var node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';

  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
};
window.backend.load(successHandler, errorHandler);

var form = userDialog.querySelector('.setup-wizard-form');
var submitHandler = function (evt) {
  window.backend.save(new FormData(form), function () {
    userDialog.classList.add('hidden');
  });
  evt.preventDefault();
};
form.addEventListener('submit', submitHandler);


