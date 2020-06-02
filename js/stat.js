'use strict';
// высота и ширина облака
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

// позиция облака
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10; // отступ от границы облака

var COLUMN_WIDTH = 40;// ширина колонки
var COLUMN_HEIGHT = 150; // максимальная высота колонки
var COLUMNS_GAP = 50; // расстояние между колонками
var HISTOGRAM_GAP = 40; // расстояние гистограммы от левого края

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, GAP * 4);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, GAP * 6);

  var maxTime = getMaxElement(times);
  renderHistogram(ctx, players, times, maxTime);
};

var renderHistogram = function (ctx, players, times, maxTime) {
  for (var i = 0; i < players.length; i++) {
    var randomColor = Math.random().toFixed(1);
    var playerTime = Math.round(times[i]);
    var barHeight = playerTime * COLUMN_HEIGHT / (maxTime - 0);
    var COLUMN_X = CLOUD_X + HISTOGRAM_GAP + (COLUMN_WIDTH + COLUMNS_GAP) * i;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], COLUMN_X, CLOUD_HEIGHT - GAP / 2);
    ctx.fillText(playerTime, COLUMN_X, CLOUD_Y + COLUMN_HEIGHT - barHeight / 2);

    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + randomColor + ')';
    ctx.fillRect(CLOUD_X + HISTOGRAM_GAP + (COLUMN_WIDTH + COLUMNS_GAP) * i, CLOUD_HEIGHT - GAP * 2, COLUMN_WIDTH, barHeight * (-1));
  }
};
