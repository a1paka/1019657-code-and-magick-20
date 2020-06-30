'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  function isEscEvent(evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  }

  function isEnterEvent(evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  }

  function isRandom(randomArr) {
    return randomArr[Math.floor(Math.random() * randomArr.length)];
  }

  function shuffleArray(array) {
    var j;
    var temp;
    var arr = array.slice();

    for (var i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    isRandom: isRandom,
    shuffleArray: shuffleArray
  };
})();
