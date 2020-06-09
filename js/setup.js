'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_WISARDS = 4;

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

var wizards = [];

var numberOfWizards = function (number) {
  for (var i = 0; i < number; i++) {
    wizards.push(renderWizard());
  }
};
numberOfWizards(NUMBER_OF_WISARDS);

var createDom = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizardElement(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
createDom();

document.querySelector('.setup-similar').classList.remove('hidden');
