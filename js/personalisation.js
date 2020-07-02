'use strict';

(function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', 'e6e848'];

  var setup = document.querySelector('.setup');
  var changeCoatColors = document.querySelector('.wizard-coat');
  var changeEyesColors = document.querySelector('.wizard-eyes');
  var changeFireballColors = document.querySelector('.setup-fireball-wrap');

  var changeCoatColorsInput = setup.querySelector('input[name="coat-color"]');
  var changeEyesColorsInput = setup.querySelector('input[name="eyes-color"]');
  var changeFireballColorsInput = setup.querySelector('input[name="fireball-color"]');


  changeCoatColors.addEventListener('click', function () {
    var newColor = window.util.isRandom(WIZARD_COAT_COLORS);
    changeCoatColorsInput.value = changeCoatColors.style.fill = newColor;
    window.wizard.onCoatChange(newColor);
  });

  changeEyesColors.addEventListener('click', function () {
    var newColor = window.util.isRandom(WIZARD_EYES_COLORS);
    changeEyesColorsInput.value = changeEyesColors.style.fill = newColor;
    window.wizard.onEyesChange(newColor);
  });

  /* changeCoatColors.addEventListener('click', function () {
    changeCoatColors.style.fill = changeCoatColorsInput.value = window.util.isRandom(WIZARD_COAT_COLORS);
  });

  changeEyesColors.addEventListener('click', function () {
    changeEyesColors.style.fill = changeEyesColorsInput.value = window.util.isRandom(WIZARD_EYES_COLORS);
  }); */

  changeFireballColors.addEventListener('click', function () {
    changeFireballColors.style.backgroundColor = changeFireballColorsInput.value = window.util.isRandom(FIREBALL_COLORS);
  });
})();
